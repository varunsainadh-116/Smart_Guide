
import { Leaf } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="py-6 mb-6">
      <div className="flex items-center justify-center">
        <Leaf className="h-8 w-8 text-primary mr-2" />
        <h1 className="text-3xl font-bold text-center">
          FarmSmart<span className="text-primary">Guide</span>
        </h1>
      </div>
      <p className="text-center text-muted-foreground mt-2 max-w-md mx-auto">
        Make data-driven decisions for sustainable farming with personalized fertilizer recommendations
      </p>
    </header>
  );
};

export default AppHeader;
