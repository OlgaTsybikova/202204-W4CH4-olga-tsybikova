import Info from "./Info.js";

import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider.js";

describe("Given a Info Component", () => {
  describe("When it receives a text 'on hold'", () => {
    test("Then it should renderize this text on the screen", () => {
      const givenText = ["on hold"];

      render(<Info infos={givenText} />);
      const textElement = screen.getByRole("span", { info: givenText });
      expect(textElement).toBeInTheDocument();
    });
  });
  describe("When it receives a calling state which equals to true", () => {
    test("Then it should return the text'Calling...'", () => {
      const calling = true;

      render(
        <PhoneContextProvider value={calling}>
          <Info />
        </PhoneContextProvider>
      );
      const textElement = screen.getByText("Calling...");
      expect(textElement).toBeInTheDocument();
    });
  });
});
