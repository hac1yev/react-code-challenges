import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import { fireEvent, render } from "@testing-library/react";

describe('Counter', () => {
    it('counter displays correct initial count', () => {
        const { getByTestId } = render(<Counter />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0); 
    });

    it('count should increment by 1 if the increment button clicked', () => {
        const { getByTestId,getByRole } = render(<Counter/>);
        const incrementBtn = getByRole("button", { name: "Increment" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0); 
        fireEvent.click(incrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1); 

    });
});