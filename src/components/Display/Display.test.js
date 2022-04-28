import Display from "./Display";
import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
describe("Given a Display component", () => {
  describe("When it receives numbers 3 4 5 and 6", () => {
    test("Then it should show it on the screen", () => {
      const givenNumbers = [3, 4, 5, 6];
      render(<Display numbers={givenNumbers} />);
      const numberElement = screen.getByRole("span", { number: givenNumbers });
      expect(numberElement).toBeInTheDocument();
    });
  });
  describe("When it receives a number Array [7, 4, 5, 6]", () => {
    test("Then it should show a string '7456'", () => {
      const givenNumberArray = [7, 4, 5, 6];
      const expectedResultString = "7456";

      render(
        <PhoneContextProvider value={givenNumberArray}>
          <Display numbers={givenNumberArray} />
          );
        </PhoneContextProvider>
      );

      const numberElement = screen.getByText("span", {
        number: expectedResultString,
      });
      expect(numberElement).toBeInTheDocument();
    });
  });
});
