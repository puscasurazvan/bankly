import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TransactionHistory } from ".";
import { http, HttpResponse } from "msw";
import { server } from "../../../vitest-setup";
import { transactions } from "../../api/data/transactions";

describe("transaction history", () => {
  beforeEach(() => {
    server.use(
      http.get("/api/transactions", () => HttpResponse.json(transactions))
    );
  });
  test("the expenses tab should be shown by default", async () => {
    render(<TransactionHistory />);

    expect(await screen.findByText("Transaction History")).toBeInTheDocument();

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });

    expect(expensesTabTrigger).toHaveAttribute("data-state", "active");

    const expensesTable = screen.getByRole("table", {
      name: "Expenses",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(screen.getByText("-€20.25")).toBeInTheDocument();
  });

  test("changing between the expenses and income tabs should show different transactions", async () => {
    render(<TransactionHistory />);

    await screen.findByText("Transaction History");

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });
    const incomeTabTrigger = screen.getByRole("tab", {
      name: "Income",
    });
    const expensesTable = screen.getByRole("table", {
      name: "Expenses",
    });
    const incomeTable = screen.queryByRole("table", {
      name: "Income",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(incomeTable).not.toBeInTheDocument();

    expect(screen.getByText("-€20.25")).toBeInTheDocument();

    await userEvent.click(incomeTabTrigger);

    expect(incomeTabTrigger).toHaveAttribute("data-state", "active");
    expect(expensesTabTrigger).toHaveAttribute("data-state", "inactive");
    expect(screen.queryByText("-€20.25")).not.toBeInTheDocument();
  });

  test("shows loading state while waiting for API", async () => {
    server.use(
      http.get("/api/transactions", async () => {
        await new Promise((res) => setTimeout(res, 200));
        return HttpResponse.json(transactions);
      })
    );
    render(<TransactionHistory />);
    expect(
      screen.getByText(/Loading your transaction history/)
    ).toBeInTheDocument();
    expect(await screen.findByText("Transaction History")).toBeInTheDocument();
  });

  test("shows error state when API fails", async () => {
    server.use(
      http.get("/api/transactions", () =>
        HttpResponse.text("Server error", { status: 500 })
      )
    );
    render(<TransactionHistory />);
    expect(
      await screen.findByText(/Error loading your transaction history/)
    ).toBeInTheDocument();
  });
});
