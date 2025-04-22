
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout } from "lucide-react";

interface CropSelectProps {
  onSelectCrop: (crop: string) => void;
}

const CropSelect = ({ onSelectCrop }: CropSelectProps) => {
  const [selectedCrop, setSelectedCrop] = useState<string>("");

  const handleCropChange = (value: string) => {
    setSelectedCrop(value);
    onSelectCrop(value);
  };

  return (
    <Card className="farm-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Sprout className="h-5 w-5 text-farm-leaf-dark" />
            Crop Selection
          </CardTitle>
        </div>
        <CardDescription>Choose your crop type</CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={selectedCrop} onValueChange={handleCropChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select crop" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wheat">Wheat</SelectItem>
            <SelectItem value="rice">Rice</SelectItem>
            <SelectItem value="corn">Corn (Maize)</SelectItem>
            <SelectItem value="soybean">Soybean</SelectItem>
            <SelectItem value="cotton">Cotton</SelectItem>
            <SelectItem value="sugarcane">Sugarcane</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
            <SelectItem value="tomato">Tomato</SelectItem>
            <SelectItem value="onion">Onion</SelectItem>
            <SelectItem value="sunflower">Sunflower</SelectItem>
            <SelectItem value="barley">Barley</SelectItem>
            <SelectItem value="chickpea">Chickpea</SelectItem>
          </SelectContent>
        </Select>

        {selectedCrop && (
          <div className="mt-4 space-y-3">
            <div className="p-3 bg-secondary/50 rounded-md">
              <h4 className="font-semibold text-sm mb-1">Crop Info: {selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1)}</h4>
              <p className="text-sm text-muted-foreground">
                {getCropDescription(selectedCrop)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-muted/50 rounded-md">
                <span className="text-xs font-medium block">Growing Season</span>
                <span className="text-sm">{getCropSeason(selectedCrop)}</span>
              </div>
              <div className="p-2 bg-muted/50 rounded-md">
                <span className="text-xs font-medium block">Water Needs</span>
                <span className="text-sm">{getCropWaterNeeds(selectedCrop)}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const getCropDescription = (crop: string): string => {
  const descriptions: Record<string, string> = {
    wheat: "Moderate nitrogen needs with balanced phosphorus and potassium requirements. Best suited for temperate climates.",
    rice: "High nitrogen needs, especially during vegetative growth stages. Requires flooding or consistent moisture.",
    corn: "High nitrogen requirements, moderate phosphorus and potassium needs. Warm season crop requiring full sun.",
    soybean: "Low nitrogen needs (fixes own nitrogen), higher phosphorus and potassium requirements. Good rotation crop.",
    cotton: "Balanced NPK needs with higher potassium requirements during boll formation. Long growing season.",
    sugarcane: "High nitrogen and potassium needs throughout its growth cycle. Tropical to subtropical crop.",
    potato: "Higher phosphorus and potassium needs for tuber formation. Cool season crop.",
    tomato: "Balanced NPK needs with increased phosphorus for flowering and fruiting. Warm season crop.",
    onion: "Moderate nitrogen, higher phosphorus and potassium for bulb formation. Cool season crop.",
    sunflower: "Deep-rooted crop with moderate nutrient needs. Drought tolerant once established.",
    barley: "Hardy cereal crop with moderate nutrient requirements. Adaptable to various climates.",
    chickpea: "Nitrogen-fixing legume with moderate phosphorus needs. Drought tolerant pulse crop."
  };

  return descriptions[crop] || "No specific information available.";
};

const getCropSeason = (crop: string): string => {
  const seasons: Record<string, string> = {
    wheat: "Winter/Spring",
    rice: "Summer",
    corn: "Spring/Summer",
    soybean: "Late Spring",
    cotton: "Spring/Summer",
    sugarcane: "Year-round",
    potato: "Spring/Fall",
    tomato: "Spring/Summer",
    onion: "Spring/Fall",
    sunflower: "Spring/Summer",
    barley: "Fall/Spring",
    chickpea: "Winter/Spring"
  };

  return seasons[crop] || "Varies by region";
};

const getCropWaterNeeds = (crop: string): string => {
  const waterNeeds: Record<string, string> = {
    wheat: "Medium",
    rice: "Very High",
    corn: "High",
    soybean: "Medium",
    cotton: "Medium-High",
    sugarcane: "High",
    potato: "Medium-High",
    tomato: "Medium",
    onion: "Medium",
    sunflower: "Low-Medium",
    barley: "Low-Medium",
    chickpea: "Low"
  };

  return waterNeeds[crop] || "Medium";
};

export default CropSelect;
