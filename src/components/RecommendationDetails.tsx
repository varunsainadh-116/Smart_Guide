
import { RecommendationResult } from "@/utils/fertilizerCalculations";

interface RecommendationDetailsProps {
  recommendation: RecommendationResult;
}

const RecommendationDetails = ({ recommendation }: RecommendationDetailsProps) => {
  return (
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
  );
};

export default RecommendationDetails;

