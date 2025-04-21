
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import SoilHealthCard from "@/components/SoilHealthCard";
import CropSelect from "@/components/CropSelect";
import WeatherInfo from "@/components/WeatherInfo";
import FertilizerRecommendation from "@/components/FertilizerRecommendation";

const Index = () => {
  // Demo data for the application
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

  // Handler for crop selection
  const handleCropSelect = (crop: string) => {
    setSelectedCrop(crop);
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
