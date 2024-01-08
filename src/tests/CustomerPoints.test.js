import { render, screen } from "@testing-library/react";
import CustomerPoints from "../components/CustomerPoints";

test("renders customer data correctly", () => {
  const mockData = {
    customerName: "John Doe",
    total: 100,
    monthlyPoints: [
      { month: "01", points: 50 },
      { month: "02", points: 120 },
    ],
  };

  render(<CustomerPoints data={mockData} />);

  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Total Points:/i)).toBeInTheDocument();
  expect(screen.getByText(100)).toBeInTheDocument();
  expect(screen.getByText(/January/i)).toBeInTheDocument();
  expect(screen.getByText(50)).toBeInTheDocument();
  expect(screen.getByText(120)).toBeInTheDocument();
  expect(screen.getByText(/February/i)).toBeInTheDocument();
});
