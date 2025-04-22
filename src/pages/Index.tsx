
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import SoilHealthCard from "@/components/SoilHealthCard";
import CropSelect from "@/components/CropSelect";
import WeatherInfo from "@/components/WeatherInfo";
import FertilizerRecommendation from "@/components/FertilizerRecommendation";

const Index = () => {
  const [soilData, setSoilData] = useState({
    ph: 6.5,
    nitrogen: 45,
    phosphorus: 35,
    potassium: 40,
  });

  const [weatherData, setWeatherData] = useState({
    temperature: 24,
    humidity: 65,
    rainfall: 35,
    windSpeed: 8,
  });

  const [selectedCrop, setSelectedCrop] = useState("");

  // Handler for crop selection that also updates weather data
  const handleCropSelect = (crop: string) => {
    setSelectedCrop(crop);
    
    // Update weather data based on crop type
    const newWeatherData = getWeatherDataForCrop(crop);
    setWeatherData(newWeatherData);
  };

  // Helper function to determine weather data based on crop
  const getWeatherDataForCrop = (crop: string) => {
    switch (crop) {
      case "rice":
        return {
          temperature: 28,
          humidity: 85,
          rainfall: 75,
          windSpeed: 5,
        };
      case "wheat":
        return {
          temperature: 22,
          humidity: 60,
          rainfall: 45,
          windSpeed: 12,
        };
      case "corn":
        return {
          temperature: 26,
          humidity: 70,
          rainfall: 55,
          windSpeed: 8,
        };
      case "cotton":
        return {
          temperature: 30,
          humidity: 55,
          rainfall: 35,
          windSpeed: 10,
        };
      case "sugarcane":
        return {
          temperature: 32,
          humidity: 75,
          rainfall: 85,
          windSpeed: 6,
        };
      case "potato":
        return {
          temperature: 20,
          humidity: 65,
          rainfall: 40,
          windSpeed: 7,
        };
      case "tomato":
        return {
          temperature: 25,
          humidity: 70,
          rainfall: 45,
          windSpeed: 6,
        };
      case "onion":
        return {
          temperature: 22,
          humidity: 60,
          rainfall: 35,
          windSpeed: 8,
        };
      case "soybean":
        return {
          temperature: 27,
          humidity: 65,
          rainfall: 50,
          windSpeed: 9,
        };
      case "sunflower":
        return {
          temperature: 24,
          humidity: 55,
          rainfall: 40,
          windSpeed: 11,
        };
      case "barley":
        return {
          temperature: 18,
          humidity: 60,
          rainfall: 45,
          windSpeed: 10,
        };
      case "chickpea":
        return {
          temperature: 23,
          humidity: 50,
          rainfall: 30,
          windSpeed: 8,
        };
      default:
        return {
          temperature: 24,
          humidity: 65,
          rainfall: 35,
          windSpeed: 8,
        };
    }
  };

  return (
    <div className="min-h-screen container py-8">
      <AppHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <SoilHealthCard 
            ph={soilData.ph} 
            nitrogen={soilData.nitrogen} 
            phosphorus={soilData.phosphorus} 
            potassium={soilData.potassium} 
          />
          <CropSelect onSelectCrop={handleCropSelect} />
        </div>
        
        {/* Middle Column */}
        <div className="space-y-6">
          <WeatherInfo 
            temperature={weatherData.temperature}
            humidity={weatherData.humidity}
            rainfall={weatherData.rainfall}
            windSpeed={weatherData.windSpeed}
          />
        </div>
        
        {/* Right Column */}
        <div className="md:col-span-2 lg:col-span-1">
          <FertilizerRecommendation
            crop={selectedCrop}
            soilData={soilData}
            weatherData={weatherData}
          />
        </div>
      </div>
      
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>FarmSmart Guide &copy; 2025 • Sustainable Farming Solutions</p>
      </footer>
    </div>
  );
};

export default Index;
