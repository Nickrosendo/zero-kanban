/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen } from "@testing-library/react";

import { BoardsListItem } from "@root/components";
import { renderWithProviders } from "@root/helpers";

describe("BoardsListItem component tests", () => {
  it("should render without crashing", () => {
    renderWithProviders(<BoardsListItem />);

    const element = screen.getByTestId("boards-list-item");

    expect(element).toBeInTheDocument();
  });
});
