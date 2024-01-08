import calculatePoints from "../utils/calculatePoints";

test("calculatePoints correctly calculates points for transactions", () => {
  const transactions = [
    { customerName: "John Doe", date: "2022-01-01", amount: 120 },
    { customerName: "John Doe", date: "2022-02-01", amount: 80 },
    { customerName: "Jane Doe", date: "2022-01-01", amount: 100 },
  ];

  const result = calculatePoints(transactions);

  expect(result).toEqual([
    {
      customerName: "John Doe",
      total: 120,
      monthlyPoints: [
        { month: "01", points: 90 },
        { month: "02", points: 30 },
      ],
    },
    {
      customerName: "Jane Doe",
      total: 50,
      monthlyPoints: [{ month: "01", points: 50 }],
    },
  ]);
});
