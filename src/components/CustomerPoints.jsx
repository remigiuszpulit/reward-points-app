import getMonthName from "../utils/getMonthName";

export default function CustomerPoints({ data }) {
  return (
    <div className="flex-column-start width-420">
      <h2>{data.customerName}</h2>
      <div className="flex-row">
        <div className="flex-row">
          <h4 className="padding-rigt-05">Total Points:</h4>
          <p className="padding-rigt-05">{data.total}</p>
        </div>
        {data.monthlyPoints.map((month) => {
          return (
            <div key={month.month} className="flex-row">
              <h4 className="padding-rigt-05">{getMonthName(month.month)}</h4>
              <p className="padding-rigt-05">{month.points}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
