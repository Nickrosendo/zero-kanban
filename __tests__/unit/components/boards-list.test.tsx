/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { BoardsList } from "@root/components";

describe("BoardsList component tests", () => {
  it("should render without crashing", () => {
    render(<BoardsList />);

    const element = screen.getByTestId("boards-list");

    expect(element).toBeInTheDocument();
  });
});
