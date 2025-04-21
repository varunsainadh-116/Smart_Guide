
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fertilizer, TreeDeciduous } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FertilizerRecommendationProps {
  crop: string;
  soilData: {
    ph: number;
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
  weatherData: {
    temperature: number;
    humidity: number;
    rainfall: number;
  };
}

interface RecommendationResult {
  fertilizerType: string;
  nitrogenAmount: number;
  phosphorusAmount: number;
  potassiumAmount: number;
  applicationMethod: string;
  timing: string;
}

const FertilizerRecommendation = ({ crop, soilData, weatherData }: FertilizerRecommendationProps) => {
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Reset recommendation when inputs change
    setRecommendation(null);
  }, [crop, soilData, weatherData]);

  const calculateRecommendation = () => {
    if (!crop) {
      toast({
        title: "Missing Crop Selection",
        description: "Please select a crop type first",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const result = generateRecommendation(crop, soilData, weatherData);
      setRecommendation(result);
      setLoading(false);
      
      toast({
        title: "Recommendation Generated",
        description: `Fertilizer recommendation for ${crop} is ready`,
      });
    }, 1500);
  };

  const generateRecommendation = (
    crop: string, 
    soilData: { ph: number; nitrogen: number; phosphorus: number; potassium: number; }, 
    weatherData: { temperature: number; humidity: number; rainfall: number; }
  ): RecommendationResult => {
    // This is a simplified model - in a real app, this would be a much more sophisticated algorithm
    const { ph, nitrogen, phosphorus, potassium } = soilData;
    const { rainfall, temperature } = weatherData;
    
    // Base values that would need to be adjusted per crop in a real implementation
    let nitrogenAmount = 100 - nitrogen;
    let phosphorusAmount = 100 - phosphorus;
    let potassiumAmount = 100 - potassium;
    let fertilizerType = "Balanced NPK";
    let applicationMethod = "Broadcast application";
    let timing = "Early growing season";
    
    // Simple crop-specific adjustments
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
        nitrogenAmount *= 0.5; // Reduced nitrogen need due to nitrogen fixation
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
      // Acidic soil - reduce application rates for certain nutrients
      fertilizerType += ", with agricultural lime";
      phosphorusAmount *= 0.8; // Phosphorus less available in acidic soil
    } else if (ph > 7.5) {
      // Alkaline soil
      fertilizerType += ", with sulfur amendment";
      nitrogenAmount *= 0.9; // Nitrogen more volatile in alkaline soil
    }
    
    // Weather adjustments
    if (rainfall > 80) { // High rainfall
      nitrogenAmount *= 1.2; // Increase nitrogen due to leaching
      applicationMethod = "Split application with slow-release formula";
    } else if (rainfall < 30) { // Low rainfall
      nitrogenAmount *= 0.9; // Reduce nitrogen to prevent burn
    }
    
    // Temperature adjustments
    if (temperature > 30) { // Hot conditions
      // Use slow-release in hot weather
      fertilizerType += " (slow-release)";
      timing = "Early morning or evening application";
    }
    
    // Ensure minimum/maximum values
    nitrogenAmount = Math.max(0, Math.min(200, Math.round(nitrogenAmount)));
    phosphorusAmount = Math.max(0, Math.min(200, Math.round(phosphorusAmount)));
    potassiumAmount = Math.max(0, Math.min(200, Math.round(potassiumAmount)));
    
    return {
      fertilizerType,
      nitrogenAmount,
      phosphorusAmount,
      potassiumAmount,
      applicationMethod,
      timing
    };
  };

  return (
    <Card className="farm-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Fertilizer className="h-5 w-5 text-farm-leaf" />
            Fertilizer Recommendation
          </CardTitle>
        </div>
        <CardDescription>Optimized for your soil and crop</CardDescription>
      </CardHeader>
      <CardContent>
        {!recommendation ? (
          <div className="flex flex-col items-center justify-center p-6 space-y-4">
            <TreeDeciduous className="h-12 w-12 text-muted-foreground/70" />
            <p className="text-center text-muted-foreground">
              {crop 
                ? "Click the button below to generate personalized fertilizer recommendations based on your soil data and crop selection."
                : "Select a crop first, then generate fertilizer recommendations tailored to your needs."}
            </p>
          </div>
        ) : (
          <div className="space-y-4 animate-grow">
            <div className="bg-secondary/50 p-3 rounded-md">
              <span className="text-sm font-semibold">Recommended Fertilizer:</span>
              <p className="text-base font-semibold text-primary">{recommendation.fertilizerType}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-muted/50 p-2 rounded-md">
                <span className="text-xs font-medium">Nitrogen</span>
                <p className="text-sm font-bold">{recommendation.nitrogenAmount} kg/ha</p>
              </div>
              <div className="bg-muted/50 p-2 rounded-md">
                <span className="text-xs font-medium">Phosphorus</span>
                <p className="text-sm font-bold">{recommendation.phosphorusAmount} kg/ha</p>
              </div>
              <div className="bg-muted/50 p-2 rounded-md">
                <span className="text-xs font-medium">Potassium</span>
                <p className="text-sm font-bold">{recommendation.potassiumAmount} kg/ha</p>
              </div>
            </div>
            
            <div>
              <span className="text-sm font-semibold">Application Method:</span>
              <p className="text-sm">{recommendation.applicationMethod}</p>
            </div>
            
            <div>
              <span className="text-sm font-semibold">Timing:</span>
              <p className="text-sm">{recommendation.timing}</p>
            </div>
            
            <div className="pt-2 text-xs text-muted-foreground italic">
              Note: These recommendations are based on simplified models and should be adjusted based on local expertise and additional soil testing.
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={calculateRecommendation} 
          disabled={!crop || loading} 
          className="w-full bg-primary hover:bg-primary/90"
        >
          {loading ? "Calculating..." : recommendation ? "Recalculate" : "Generate Recommendation"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FertilizerRecommendation;
