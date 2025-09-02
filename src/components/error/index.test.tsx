import { render, screen } from "@testing-library/react";
import { Error } from ".";

describe("Error component", () => {
  it("renders default error message", () => {
    render(<Error />);
    expect(
      screen.getByText(/Error loading your transaction history/)
    ).toBeInTheDocument();
    expect(screen.getByText(/⚠️/)).toBeInTheDocument();
  });

  it("renders custom error message", () => {
    render(<Error displayText="Something went wrong!" />);
    expect(screen.getByText(/Something went wrong!/)).toBeInTheDocument();
    expect(screen.getByText(/⚠️/)).toBeInTheDocument();
  });
});
