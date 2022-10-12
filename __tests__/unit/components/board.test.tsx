/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Board } from "@root/components";

describe("Board component tests", () => {
  it("should render without crashing", () => {
    render(<Board />);

    const element = screen.getByTestId("board");

    expect(element).toBeInTheDocument();
  });
});
