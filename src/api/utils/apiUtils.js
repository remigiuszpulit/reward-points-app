 const shouldFailWithProbability = (probability) => {
    return Math.random() < probability;
}

export const mockApiCall = (data, probability, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldFailWithProbability(probability)
        ? reject(new Error("Something went wrong"))
        : resolve(data)
    }, timeout);
  });
}

export const apiCall = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("An error occurred while fetching the data:", error);
    throw error;
  }
}