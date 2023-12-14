import { useState, useEffect } from "react";

interface ErrorData {
  [key: string]: any;
}

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    function handleError(errorData: ErrorData) {
      // Check the structure of the error response and handle each error type
      if (errorData && errorData.errorMessage) {
        // Handle specific error type
        setError(errorData.errorMessage);
      } else if (errorData && errorData.error) {
        // Handle another specific error type
        setError(errorData.error);
      } else {
        // Handle other types of errors based on the structure of errorData
        setError("An unknown error occured");
      }
    }
    //fetch from the weather API
    try {
      const response = await fetch("https://api.example.com/weather");

      if (!response.ok) {
        const errorData = await response.json();
        handleError(errorData);
        return;
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error: any) {
      // Handle unexpected errors
      setError(error);
    }

    useEffect(() => {
      // Fetch weather data from API here and handle errors
      getData();
    }, []);

    return (
      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : weatherData ? (
          <div>
            <h2>Weather Information</h2>
            {/* Display weather data */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
};
export default WeatherInfo;
