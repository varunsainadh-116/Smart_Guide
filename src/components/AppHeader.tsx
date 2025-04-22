
import { Leaf } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="relative py-8 mb-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo and Title */}
          <div className="flex items-center justify-center space-x-3 animate-fade-in">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-center">
              FarmSmart<span className="text-primary">Guide</span>
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-center text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in">
            Make data-driven decisions for sustainable farming with personalized fertilizer recommendations
          </p>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
