import { useEffect, useState } from "react";
import { Api } from "../api/api";
import calculatePoints from "../utils/calculatePoints";

const useGetPointsData = () => {
  const [pointsUserData, setPointsUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await Api.getTransactionData();
        setPointsUserData(calculatePoints(response));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPoints();
  }, []);
  return { pointsUserData, isLoading, isError };
};

export default useGetPointsData;
