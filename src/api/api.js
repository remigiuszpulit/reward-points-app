import data from "../fixtures/sampleData.json";
import { apiCall, mockApiCall } from "./utils/apiUtils";

export class Api {
  static async getTransactionData() {
    if (process.env.REACT_APP_API_MODE === "MOCK") {
      return mockApiCall(data, 0.2);
    }
    return apiCall(process.env.REACT_APP_API_URL);
  }
}
