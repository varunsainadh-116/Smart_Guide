
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf } from "lucide-react";

interface SoilHealthCardProps {
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

const SoilHealthCard = ({ ph, nitrogen, phosphorus, potassium }: SoilHealthCardProps) => {
  const formatValue = (value: number) => `${value}%`;
  
  const getPhLabel = (ph: number) => {
    if (ph < 5.5) return "Acidic";
    if (ph > 7.5) return "Alkaline";
    return "Neutral";
  };

  return (
    <Card className="farm-shadow glass-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Leaf className="h-5 w-5 text-farm-soil interactive-pulse" />
            Soil Health
          </CardTitle>
        </div>
        <CardDescription>Current soil nutrient levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">pH Level</span>
              <span className="text-sm font-medium">{ph} ({getPhLabel(ph)})</span>
            </div>
            <Progress value={(ph / 14) * 100} className="h-2" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Nitrogen</span>
              <span className="text-sm font-medium">{formatValue(nitrogen)}</span>
            </div>
            <Progress value={nitrogen} className="h-2" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Phosphorus</span>
              <span className="text-sm font-medium">{formatValue(phosphorus)}</span>
            </div>
            <Progress value={phosphorus} className="h-2" />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Potassium</span>
              <span className="text-sm font-medium">{formatValue(potassium)}</span>
            </div>
            <Progress value={potassium} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SoilHealthCard;
