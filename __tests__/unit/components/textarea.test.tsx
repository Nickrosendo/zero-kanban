/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Textarea } from "@root/components";

describe("Textarea component tests", () => {
  it("should render without crashing", () => {
    render(<Textarea />);

    const element = screen.getByTestId("textarea");

    expect(element).toBeInTheDocument();
  });
});
