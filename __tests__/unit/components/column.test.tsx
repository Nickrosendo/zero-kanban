/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Column } from "@root/components";

describe("Column component tests", () => {
  it("should render without crashing", () => {
    render(<Column />);

    const element = screen.getByTestId("column");

    expect(element).toBeInTheDocument();
  });
});
