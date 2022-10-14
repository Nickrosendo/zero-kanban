/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { BoardsListItem } from "@root/components";

describe("BoardsListItem component tests", () => {
  it("should render without crashing", () => {
    render(<BoardsListItem />);

    const element = screen.getByTestId("boards-list-item");

    expect(element).toBeInTheDocument();
  });
});
