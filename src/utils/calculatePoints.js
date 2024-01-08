import { AWARDS_PER_THRESHOLD, POINTS_THRESHOLDS } from "../config/points";

const thresholds = JSON.parse(JSON.stringify(POINTS_THRESHOLDS));
thresholds.sort((a, b) => (a > b ? -1 : 1));

const calculatePointsForTransaction = (amount, points = 0, index = 0) => {
  if (index >= thresholds.length) {
    return points;
  }
  if (amount >= thresholds[index]) {
    points +=
      (amount - thresholds[index]) * AWARDS_PER_THRESHOLD[thresholds[index]];
    return calculatePointsForTransaction(thresholds[index], points, index + 1);
  }
  return calculatePointsForTransaction(amount, points, index + 1);
};

const updatePoints = (currentPoints, newPoints) =>
  currentPoints ? currentPoints + newPoints : newPoints;

const calculatePoints = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const customerName = transaction.customerName;
    const month = transaction.date.split("-")[1];
    const points = calculatePointsForTransaction(transaction.amount);

    const customerData = acc.find(
      (element) => element.customerName === customerName
    );
    if (customerData) {
      const monthlyPoints = customerData.monthlyPoints;
      const monthlyData = monthlyPoints.find(
        (element) => element.month === month
      );
      if (monthlyData) {
        monthlyData.points = updatePoints(monthlyData.points, points);
        customerData.total = updatePoints(customerData.total, points);
        return acc;
      }
      monthlyPoints.push({ month, points });
      customerData.total = updatePoints(customerData.total, points);
      return acc;
    }
    acc.push({
      customerName,
      total: points,
      monthlyPoints: [{ month, points }],
    });
    return acc;
  }, []);
};

export default calculatePoints;
