/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Container } from "@root/components";

describe("Container component tests", () => {
  it("should render without crashing", () => {
    render(<Container />);

    const element = screen.getByTestId("container");

    expect(element).toBeInTheDocument();
  });
});
