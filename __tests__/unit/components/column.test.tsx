/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen } from "@testing-library/react";

import { Column } from "@root/components";
import { renderWithProviders } from "@root/helpers";

describe("Column component tests", () => {
  it("should render without crashing", () => {
    renderWithProviders(<Column />);

    const element = screen.getByTestId("column");

    expect(element).toBeInTheDocument();
  });
});
