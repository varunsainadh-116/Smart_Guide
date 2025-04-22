
import { Leaf, Sprout } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="relative py-12 mb-8 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/15 to-transparent" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_600px_at_50%_200px,var(--primary),transparent)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-center space-x-3 animate-fade-in">
            <div className="p-3 bg-primary/15 rounded-2xl backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/5">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
              FarmSmart<span className="text-primary">Guide</span>
            </h1>
          </div>
          
          {/* Description with icon */}
          <div className="flex items-center space-x-2 animate-fade-in [animation-delay:200ms]">
            <Sprout className="h-4 w-4 text-primary/70" />
            <p className="text-center text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Make data-driven decisions for sustainable farming with personalized fertilizer recommendations
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
