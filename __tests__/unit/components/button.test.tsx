/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "@root/components";

describe("Button component tests", () => {
  it("should render without crashing", () => {
    render(<Button> test </Button>);

    const element = screen.getByTestId("button");

    expect(element).toBeInTheDocument();
  });
});
