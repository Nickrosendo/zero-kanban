/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { Column } from "@root/components";

describe("Column component tests", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={{}}>
        {" "}
        <Column />{" "}
      </Provider>
    );

    const element = screen.getByTestId("column");

    expect(element).toBeInTheDocument();
  });
});
