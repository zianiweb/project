// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  colorHex: string,
  colorRgb: string,
  colorCmyk: string,
  darkRatio: string,
  lightRatio: string
}

const hexToRgb = (hex: string) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
  }

  return { r: 0, g: 0, b: 0 }
}

const hexToCMYK = (hex: string) => {
  let computedC = 0;
  let computedM = 0;
  let computedY = 0;
  let computedK = 1;
 
  const rgb = hexToRgb(hex);
 
  // BLACK
  if (rgb.r != 0 && rgb.g !=0 && rgb.b != 0) {
    computedC = 1 - (rgb.r/255);
    computedM = 1 - (rgb.g/255);
    computedY = 1 - (rgb.b/255);
   
    const minCMY = Math.min(computedC,Math.min(computedM,computedY));
   
    computedC = parseFloat(((computedC - minCMY) / (1 - minCMY)).toFixed(2)) * 100;
    computedM = parseFloat(((computedM - minCMY) / (1 - minCMY)).toFixed(2)) * 100;
    computedY = parseFloat(((computedY - minCMY) / (1 - minCMY)).toFixed(2)) * 100;
    computedK = parseFloat((minCMY).toFixed(2)) * 100;
  }  
 
  return { C: Math.floor(computedC), M: Math.floor(computedM), Y: Math.floor(computedY), K: Math.floor(computedK) };
}

const luminance = (r: number, g: number, b: number) => {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

const getResult = (value: number) => {
  return value < 1 / 4.5 ? "pass" : "fail";
}

const calcRatio = (foreground: string, background: string) => {
  const rgb1 = hexToRgb(foreground);
  const rgb2 = hexToRgb(background);

  if (rgb1 != null && rgb2 != null) {
    const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);

    // calculate the color contrast ratio
    if (lum1 > lum2) {
      return getResult((lum2 + 0.05) / (lum1 + 0.05));
    } else {
      return getResult((lum1 + 0.05) / (lum2 + 0.05));
    }
  }

  return 'fail';
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const hexColor = req.body.Hex;
  const colorRgb = hexToRgb(hexColor);
  const colorCmyk = hexToCMYK(hexColor);

  const data = { 
    colorHex: hexColor.toUpperCase(),
    colorRgb: `${(`${colorRgb.r}`).padStart(3,'0')}-${(`${colorRgb.g}`).padStart(3,'0')}-${(`${colorRgb.b}`).padStart(3,'0')}`,
    colorCmyk: `${(`${colorCmyk.C}`).padStart(3,'0')}-${(`${colorCmyk.M}`).padStart(3,'0')}-${(`${colorCmyk.Y}`).padStart(3,'0')}-${(`${colorCmyk.K}`).padStart(3,'0')}`,
    darkRatio: calcRatio('#000000', hexColor),
    lightRatio: calcRatio('#FFFFFF', hexColor),
    pantone: 'Not supported yet!'
  };

  res.status(200).json(data)
}
