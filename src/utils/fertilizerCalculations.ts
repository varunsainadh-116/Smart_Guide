
interface SoilData {
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
}

export interface RecommendationResult {
  fertilizerType: string;
  nitrogenAmount: number;
  phosphorusAmount: number;
  potassiumAmount: number;
  applicationMethod: string;
  timing: string;
}

export const generateRecommendation = (
  crop: string,
  soilData: SoilData,
  weatherData: WeatherData
): RecommendationResult => {
  const { ph, nitrogen, phosphorus, potassium } = soilData;
  const { rainfall, temperature } = weatherData;
  
  let nitrogenAmount = 100 - nitrogen;
  let phosphorusAmount = 100 - phosphorus;
  let potassiumAmount = 100 - potassium;
  let fertilizerType = "Balanced NPK";
  let applicationMethod = "Broadcast application";
  let timing = "Early growing season";
  
  // Crop-specific adjustments
  switch (crop) {
    case "wheat":
      nitrogenAmount *= 1.2;
      fertilizerType = nitrogenAmount > 50 ? "Urea" : "NPK (20-10-10)";
      break;
    case "rice":
      nitrogenAmount *= 1.5;
      fertilizerType = "Ammonium Sulfate";
      applicationMethod = "Split application";
      break;
    case "corn":
      nitrogenAmount *= 1.4;
      potassiumAmount *= 1.1;
      fertilizerType = "NPK (15-15-15)";
      break;
    case "soybean":
      nitrogenAmount *= 0.5;
      phosphorusAmount *= 1.2;
      fertilizerType = "DAP";
      break;
    case "cotton":
      potassiumAmount *= 1.3;
      fertilizerType = "NPK (10-10-20)";
      break;
    case "sugarcane":
      nitrogenAmount *= 1.2;
      potassiumAmount *= 1.4;
      fertilizerType = "NPK (16-8-24)";
      applicationMethod = "Band placement";
      break;
    case "potato":
      phosphorusAmount *= 1.3;
      potassiumAmount *= 1.2;
      fertilizerType = "NPK (10-20-20)";
      timing = "Prior to tuber formation";
      break;
    case "tomato":
      phosphorusAmount *= 1.4;
      fertilizerType = "NPK (10-30-20)";
      applicationMethod = "Drip fertigation";
      break;
    case "onion":
      phosphorusAmount *= 1.2;
      potassiumAmount *= 1.1;
      fertilizerType = "NPK (12-24-24)";
      timing = "Early bulb development";
      break;
  }
  
  // Soil pH adjustments
  if (ph < 5.5) {
    fertilizerType += ", with agricultural lime";
    phosphorusAmount *= 0.8;
  } else if (ph > 7.5) {
    fertilizerType += ", with sulfur amendment";
    nitrogenAmount *= 0.9;
  }
  
  // Weather adjustments
  if (rainfall > 80) {
    nitrogenAmount *= 1.2;
    applicationMethod = "Split application with slow-release formula";
  } else if (rainfall < 30) {
    nitrogenAmount *= 0.9;
  }
  
  // Temperature adjustments
  if (temperature > 30) {
    fertilizerType += " (slow-release)";
    timing = "Early morning or evening application";
  }
  
  return {
    fertilizerType,
    nitrogenAmount: Math.max(0, Math.min(200, Math.round(nitrogenAmount))),
    phosphorusAmount: Math.max(0, Math.min(200, Math.round(phosphorusAmount))),
    potassiumAmount: Math.max(0, Math.min(200, Math.round(potassiumAmount))),
    applicationMethod,
    timing
  };
};

