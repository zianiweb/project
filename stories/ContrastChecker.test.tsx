import React from "react";

import { render, waitFor, screen } from "@testing-library/react";
import ContrastChecker from "./ContrastChecker";
import "@testing-library/jest-dom/extend-expect";

const mockData = { 
    colorName: 'Danger Color',
    colorHex: '#D63900',
    colorRgb: '214-057-000',
    colorCmyk: '000-000-000-001',
    darkRatio: 'fail',
    lightRatio: 'pass'
}; 

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    }),
) as jest.Mock;

it("renders without crashing", () => {
    render(<ContrastChecker colorName={mockData.colorName} colorHex={mockData.colorHex}></ContrastChecker>);
});

it("renders with crashing", () => {
    render(<ContrastChecker></ContrastChecker>);
    expect(screen.getByTitle("error")).toHaveTextContent('Oops something wrong!');
});

it("renders the correct centent", () => {
    render(<ContrastChecker colorName={mockData.colorName} colorHex={mockData.colorHex}></ContrastChecker>);

    expect(screen.getByTitle("colorName")).toHaveTextContent(mockData.colorName);
    expect(screen.getByTitle("colorHex")).toHaveTextContent(mockData.colorHex);
});

it("renders the correct colors", async () => {
    render(<ContrastChecker colorName={mockData.colorName} colorHex={mockData.colorHex}></ContrastChecker>);

    await waitFor(() => screen.getByTitle('colorRgb'));
    await waitFor(() => screen.getByTitle('colorCmyk'));
    await waitFor(() => screen.getByTitle('darkRatio'));
    await waitFor(() => screen.getByTitle('lightRatio'));

    expect(screen.getByTitle("colorRgb")).toHaveTextContent(mockData.colorRgb);
    expect(screen.getByTitle("colorCmyk")).toHaveTextContent(mockData.colorCmyk);
    expect(screen.getByTitle("darkRatio")).toHaveTextContent(mockData.darkRatio);
    expect(screen.getByTitle("lightRatio")).toHaveTextContent(mockData.lightRatio);
});

it("renders with correct way", async () => {
    render(<ContrastChecker colorName={mockData.colorName} colorHex={mockData.colorHex}></ContrastChecker>);

    expect(screen.getByTitle("loading")).toBeTruthy()

    await waitFor(() => screen.getByTitle('colorRgb'));
    await waitFor(() => screen.getByTitle('colorCmyk'));
    await waitFor(() => screen.getByTitle('darkRatio'));
    await waitFor(() => screen.getByTitle('lightRatio'));

    expect(screen.queryByTitle("loading")).toBeNull();
});