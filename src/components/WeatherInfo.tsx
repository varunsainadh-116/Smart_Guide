
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudSunRain, Thermometer, Wind, Droplets } from "lucide-react";

interface WeatherInfoProps {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
}

const WeatherInfo = ({ temperature, humidity, rainfall, windSpeed }: WeatherInfoProps) => {
  return (
    <Card className="farm-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <CloudSunRain className="h-5 w-5 text-farm-sky-dark" />
            Weather Conditions
          </CardTitle>
        </div>
        <CardDescription>Current weather factors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center bg-muted/50 p-3 rounded-lg">
            <Thermometer className="h-6 w-6 mb-1 text-red-500" />
            <span className="text-sm font-semibold">{temperature}°C</span>
            <span className="text-xs text-muted-foreground">Temperature</span>
          </div>
          
          <div className="flex flex-col items-center bg-muted/50 p-3 rounded-lg">
            <Droplets className="h-6 w-6 mb-1 text-farm-sky" />
            <span className="text-sm font-semibold">{humidity}%</span>
            <span className="text-xs text-muted-foreground">Humidity</span>
          </div>
          
          <div className="flex flex-col items-center bg-muted/50 p-3 rounded-lg">
            <CloudSunRain className="h-6 w-6 mb-1 text-blue-500" />
            <span className="text-sm font-semibold">{rainfall} mm</span>
            <span className="text-xs text-muted-foreground">Rainfall</span>
          </div>
          
          <div className="flex flex-col items-center bg-muted/50 p-3 rounded-lg">
            <Wind className="h-6 w-6 mb-1 text-gray-500" />
            <span className="text-sm font-semibold">{windSpeed} km/h</span>
            <span className="text-xs text-muted-foreground">Wind Speed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherInfo;
