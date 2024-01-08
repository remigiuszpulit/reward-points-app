import { render, screen, waitFor } from "@testing-library/react";
import CustomersPointsSummary from "../components/CustomersPointsSummary";
import useGetPointsData from "../hooks/useGetPointsData";

jest.mock("../hooks/useGetPointsData");

test("renders loader when data is loading", () => {
  useGetPointsData.mockReturnValue({
    isLoading: true,
    isError: false,
    pointsUserData: [],
  });

  render(<CustomersPointsSummary />);
  expect(screen.getByTestId(/loader/i)).toBeInTheDocument();
});

test("renders error when there is an error", () => {
  useGetPointsData.mockReturnValue({
    isLoading: false,
    isError: true,
    pointsUserData: [],
  });

  render(<CustomersPointsSummary />);
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});

test("renders customer points when data is loaded", async () => {
  useGetPointsData.mockReturnValue({
    isLoading: false,
    isError: false,
    pointsUserData: [
      { customerName: "John Doe", totalPoints: 100, monthlyPoints: [] },
    ],
  });

  render(<CustomersPointsSummary />);
  await waitFor(() => screen.getByText(/John Doe/i));
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
});
