import { screen, render } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Keyboard from "./Keyboard";

describe("Given a Keyboard Component", () => {
  describe("When it receives a calling state", () => {
    test("Then it should get disabled", () => {
      const disabled = false;
      const call = jest.fn();

      render(
        <PhoneContextProvider value={disabled}>
          <Keyboard isCalling={call} isDisabled={false} />
        </PhoneContextProvider>
      );
      const textElement = screen.getByRole("list", { name: disabled });
      expect(textElement).toBeInTheDocument();
    });
  });
});
