
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, TreeDeciduous } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateRecommendation, RecommendationResult } from "@/utils/fertilizerCalculations";
import RecommendationDetails from "./RecommendationDetails";

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

const FertilizerRecommendation = ({ crop, soilData, weatherData }: FertilizerRecommendationProps) => {
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
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

  return (
    <Card className="farm-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Sprout className="h-5 w-5 text-farm-leaf" />
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
          <RecommendationDetails recommendation={recommendation} />
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

