/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen } from "@testing-library/react";
import Home from "@root/pages/index";

import { renderWithProviders } from "@root/helpers";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Home page tests", () => {
  it("renders the header component", () => {
    renderWithProviders(<Home />);

    const element = screen.getByRole("main");

    expect(element).toBeInTheDocument();
  });
});
