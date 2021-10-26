import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../../screens/Home";

describe("Home Screen", () => {
  
  it("should load appbar", () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Crypto/i));
  });
  it("should load tabs", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("search"));
    expect(getByTestId("bar-chart"));
    expect(getByTestId("bookmark-alt"));
    expect(getByTestId("player-settings"));
  });
  it("Should load title", () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Crypto news/i)).toBeTruthy();
  });
});
