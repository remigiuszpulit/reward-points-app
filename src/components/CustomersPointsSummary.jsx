import CustomerPoints from "./CustomerPoints";
import useGetPointsData from "../hooks/useGetPointsData";
import Loader from "./Loader";
import Error from "./Error";

export default function CustomersPointsSummary() {
  const { pointsUserData, isLoading, isError } = useGetPointsData();

  return (
    <div className="flex-column-center">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        pointsUserData.map((userData) => <CustomerPoints key={userData.customerName} data={userData} />)
      )}
    </div>
  );
}
