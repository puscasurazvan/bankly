
import { renderHook } from "@testing-library/react";
import { useFetch } from "./useFetch";
import { vi } from "vitest";
import { waitFor } from "@testing-library/react";

beforeEach(() => {
  global.fetch = vi.fn();
});
afterEach(() => {
  vi.resetAllMocks();
});

test("should set loading true initially and false after fetch", async () => {
  (global.fetch as any).mockResolvedValue({
    ok: true,
    json: async () => ({ foo: "bar" }),
  });

  const { result } = renderHook(() => useFetch<{ foo: string }>("/api/test"));

  expect(result.current.loading).toBe(true);
  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.data).toEqual({ foo: "bar" });
  expect(result.current.error).toBeNull();
});

test("should set error if fetch fails", async () => {
  (global.fetch as any).mockResolvedValue({
    ok: false,
    status: 500,
  });

  const { result } = renderHook(() => useFetch<{ foo: string }>("/api/test"));

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.error).toBeInstanceOf(Error);
  expect(result.current.data).toBeNull();
});
