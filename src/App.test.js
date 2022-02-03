import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the header", () => {
    render(<App />);

    const header = screen.getByText("Header");
    expect(header).toBeInTheDocument();
  });

  it("should render the segment", () => {
    render(<App />);

    const segment = screen.getByText("Segment Visualisation");
    expect(segment).toBeInTheDocument();
  });
});
