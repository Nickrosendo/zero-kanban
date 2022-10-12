/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Card } from "@root/components";

describe("Card component tests", () => {
  it("should render without crashing", () => {
    render(<Card />);

    const element = screen.getByTestId("card");

    expect(element).toBeInTheDocument();
  });
});
