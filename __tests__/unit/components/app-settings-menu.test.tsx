/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import { AppSettingsMenu } from "@root/components";

describe("AppSettingsMenu component tests", () => {
  it("should render without crashing", () => {
    render(<AppSettingsMenu />);

    const element = screen.getByTestId("app-settings-menu");

    expect(element).toBeInTheDocument();
  });
});
