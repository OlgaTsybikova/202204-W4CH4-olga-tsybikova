import { render, cleanup } from "@testing-library/react";
import App from "./App";
import React from "react";

describe("Given a App component", () => {
  describe("When it displayed", () => {
    test("should take a snapshot", () => {
      afterEach(cleanup);
      const { asFragment } = render(<App />);
      expect(asFragment(<App />)).toMatchSnapshot();
    });
  });
});
