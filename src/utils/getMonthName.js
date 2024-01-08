const monthsMap = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  '10': "October",
  '11': "November",
  '12': "December",
};

const getMonthName = (monthNumber) => {
 return typeof monthNumber === "string" && monthNumber.length === 2
    ? monthsMap[monthNumber]
    : monthsMap[monthNumber.toString()];
};

export default getMonthName;
