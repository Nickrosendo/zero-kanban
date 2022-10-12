/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { FontSizeManager } from "@root/components";

describe("FontSizeManager component tests", () => {
  it("should render without crashing", () => {
    render(<FontSizeManager />);

    const element = screen.getByTestId("font-size-manager");

    expect(element).toBeInTheDocument();
  });
});
