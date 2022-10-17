import React from "react";
import renderer from "react-test-renderer";
import Index from "@root/pages/index";

import { StoreWrapper } from "@root/helpers";

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

it("should render homepage matching snapshot", () => {
  const tree = renderer
    .create(
      <StoreWrapper>
        <Index />
      </StoreWrapper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
