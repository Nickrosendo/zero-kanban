/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Input } from "@root/components";

describe("Input component tests", () => {
  it("should render without crashing", () => {
    render(<Input />);

    const element = screen.getByTestId("input");

    expect(element).toBeInTheDocument();
  });
});
