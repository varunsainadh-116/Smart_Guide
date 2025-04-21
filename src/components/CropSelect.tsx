
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat } from "lucide-react";

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
            <Wheat className="h-5 w-5 text-farm-leaf-dark" />
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
            <SelectItem value="corn">Corn</SelectItem>
            <SelectItem value="soybean">Soybean</SelectItem>
            <SelectItem value="cotton">Cotton</SelectItem>
            <SelectItem value="sugarcane">Sugarcane</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
            <SelectItem value="tomato">Tomato</SelectItem>
            <SelectItem value="onion">Onion</SelectItem>
          </SelectContent>
        </Select>

        {selectedCrop && (
          <div className="mt-4 p-3 bg-secondary/50 rounded-md">
            <h4 className="font-semibold text-sm mb-1">Crop Info: {selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1)}</h4>
            <p className="text-sm text-muted-foreground">
              {getCropDescription(selectedCrop)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const getCropDescription = (crop: string): string => {
  const descriptions: Record<string, string> = {
    wheat: "Moderate nitrogen needs with balanced phosphorus and potassium requirements.",
    rice: "High nitrogen needs, especially during vegetative growth stages.",
    corn: "High nitrogen requirements, moderate phosphorus and potassium needs.",
    soybean: "Low nitrogen needs (fixes own nitrogen), higher phosphorus and potassium requirements.",
    cotton: "Balanced NPK needs with higher potassium requirements during boll formation.",
    sugarcane: "High nitrogen and potassium needs throughout its growth cycle.",
    potato: "Higher phosphorus and potassium needs for tuber formation.",
    tomato: "Balanced NPK needs with increased phosphorus for flowering and fruiting.",
    onion: "Moderate nitrogen, higher phosphorus and potassium for bulb formation."
  };

  return descriptions[crop] || "No specific information available.";
};

export default CropSelect;
