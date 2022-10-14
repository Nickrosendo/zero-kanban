/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Logo } from "@root/components";

describe("Logo component tests", () => {
  it("should render without crashing", () => {
    render(<Logo />);

    const element = screen.getByTestId("logo");

    expect(element).toBeInTheDocument();
  });
});
