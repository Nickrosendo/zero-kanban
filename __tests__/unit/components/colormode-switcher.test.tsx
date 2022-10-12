/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { ColormodeSwitcher } from "@root/components";

describe("ColormodeSwitcher component tests", () => {
  it("should render without crashing", () => {
    render(<ColormodeSwitcher />);

    const element = screen.getByTestId("color-mode-switcher");

    expect(element).toBeInTheDocument();
  });
});
