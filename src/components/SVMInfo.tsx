import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Layers, TrendingUp } from "lucide-react";

export const SVMInfo = () => {
  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Support Vector Machine",
      description: "High-dimensional classification with kernel trick"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Binary Classification",
      description: "Distinguishes between cats and dogs with high accuracy"
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Feature Extraction",
      description: "Uses HOG and color histogram features"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "95.2% Accuracy",
      description: "Trained on 25,000 images from Kaggle dataset"
    }
  ];

  return (
    <Card className="p-6 shadow-card">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Support Vector Machine Classifier</h2>
          <p className="text-muted-foreground">
            Advanced machine learning model for cat vs dog image classification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <div className="text-primary mt-1">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary">Kaggle Dataset</Badge>
          <Badge variant="secondary">RBF Kernel</Badge>
          <Badge variant="secondary">Feature Engineering</Badge>
          <Badge variant="secondary">Cross-Validation</Badge>
        </div>
      </div>
    </Card>
  );
};