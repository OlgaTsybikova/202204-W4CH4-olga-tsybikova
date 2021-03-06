import Key from "./Key.js";
import { render, screen } from "@testing-library/react";

describe("Given a Key Component", () => {
  describe("When it receives a number 1", () => {
    test("Then it should renderize this number on the screen", () => {
      const givenNumber = 1;

      render(<Key key={givenNumber} />);

      const textElement = screen.getByRole("button", { key: givenNumber });

      expect(textElement).toBeInTheDocument();
    });
  });
});
