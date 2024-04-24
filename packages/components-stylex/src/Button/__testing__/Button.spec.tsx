import { Button } from "../Button";
import { describe, test, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    test("does something", async () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Foo</Button>)
        const button = screen.getByRole("button", { name: "Foo" });

        expect(button).toBeInTheDocument();
    });
})