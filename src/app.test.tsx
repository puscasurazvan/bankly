import { render, screen } from "@testing-library/react";
import App from "./app";
import { http, HttpResponse } from "msw";
import { server } from "../vitest-setup";
import { accounts } from "./api/data/accounts";
import { transactions } from "./api/data/transactions";

it("App renders without crashing", async () => {
  server.use(
    http.get("/api/accounts", () => HttpResponse.json(accounts)),
    http.get("/api/transactions", () => HttpResponse.json(transactions))
  );
  render(<App />);

  expect(await screen.findByText("Your accounts")).toBeInTheDocument();
});
