/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Column } from "@root/components";
import { ColumnType } from "@root/types";

describe("Column component tests", () => {
  it("should render without crashing", () => {
    const mockColumn: ColumnType = {
      id: "test",
      cards: [],
      name: "Test",
    };
    render(<Column column={mockColumn} />);

    const element = screen.getByTestId("column-test");

    expect(element).toBeInTheDocument();
  });
});
