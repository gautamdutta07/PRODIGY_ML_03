import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Cat, Dog, Brain, Zap } from "lucide-react";

interface ClassificationResultProps {
  prediction: 'cat' | 'dog';
  confidence: number;
  processingTime: number;
}

export const ClassificationResult = ({ prediction, confidence, processingTime }: ClassificationResultProps) => {
  const isValidPrediction = prediction === 'cat' || prediction === 'dog';
  
  return (
    <Card className="p-6 bg-gradient-primary shadow-card animate-pulse-glow">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary-glow" />
            SVM Classification Result
          </h3>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            {processingTime}ms
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cat Prediction */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Cat className={`h-8 w-8 ${prediction === 'cat' ? 'text-primary-glow' : 'text-muted-foreground'}`} />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">Cat</span>
                  <span className="text-sm font-mono">
                    {prediction === 'cat' ? confidence.toFixed(1) : (100 - confidence).toFixed(1)}%
                  </span>
                </div>
                <Progress 
                  value={prediction === 'cat' ? confidence : 100 - confidence} 
                  className="h-2"
                />
              </div>
            </div>
          </div>

          {/* Dog Prediction */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Dog className={`h-8 w-8 ${prediction === 'dog' ? 'text-primary-glow' : 'text-muted-foreground'}`} />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">Dog</span>
                  <span className="text-sm font-mono">
                    {prediction === 'dog' ? confidence.toFixed(1) : (100 - confidence).toFixed(1)}%
                  </span>
                </div>
                <Progress 
                  value={prediction === 'dog' ? confidence : 100 - confidence} 
                  className="h-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final Prediction */}
        <div className="text-center pt-4 border-t border-white/10">
          <div className="text-2xl font-bold text-primary-glow">
            Prediction: {prediction.charAt(0).toUpperCase() + prediction.slice(1)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Confidence: {confidence.toFixed(1)}%
          </div>
        </div>
      </div>
    </Card>
  );
};