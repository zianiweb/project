import React from "react";
import { styled } from "../stitches.config";

const Crad = styled("div", {
  fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,.125)",
  borderRadius: ".2rem",
  width: "320px"
});

const HeaderCrad = styled("div", {
  backgroundColor: "blueviolet",
  padding: "20px",
  [`& h3`]: {
    color: "white",
    fontSize: "25px",
    fontWeight: "600",
    height: "95px",
    margin: 0
  },
  [`& ul`]: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    padding: "0",
    margin: "0",
    listStyle: "none",
  },
  [`& ul li`]: {
    fontSize: "15px"
  },
  [`& ul li:last-child`]: {
    textAlign: "right"
  },
  [`& ul li.light p`]: {
    color: "white"
  },
  [`& ul li.dark p`]: {
    color: "black",
  },
  [`& ul li label`]: {
    color: "white",
    padding: "4px 8px",
    border: "1px solid white",
  },
  [`& ul li label.pass`]: {
    backgroundColor: "#578f83",
  },
  [`& ul li label.fail`]: {
    backgroundColor: "#c36f7b",
  },
});

const BodyCrad = styled("div", {
  backgroundColor: "white",
  padding: "20px",
  [`& ul`]: {
    listStyle: "none",
    fontSize: "15px",
    padding: "0",
    margin: "0"
  },
  [`& ul li:not(:last-child)`]: {
    paddingBottom: "10px"
  },
  [`& ul li label`]: {
    textTransform: "uppercase",
    color: "#99a0ac"
  },
  [`& ul li p`]: {
    margin: "5px 0"
  }
});

export const ContrastChecker = () => {
  return (
    <Crad>
      <HeaderCrad>
        <h3>Color-name</h3>
        <ul>
          <li className="dark">
            <p>Aa Bb Cc</p>
            <label className="fail">FAIL</label>
          </li>
          <li className="light">
            <p>Aa Bb Cc</p>
            <label className="pass">PASS</label>
          </li>
        </ul>
      </HeaderCrad>
      <BodyCrad>
        <ul>
          <li>
            <label>HEX</label>
            <p>000000</p>
          </li>
          <li>
            <label>RGB</label>
            <p>000-000-000</p>
          </li>
          <li>
            <label>CMYK</label>
            <p>000-000-000-000</p>
          </li>
          <li>
            <label>Pantone</label>
            <p>Pantone color name</p>
          </li>
        </ul>
      </BodyCrad>
    </Crad>
  );
}