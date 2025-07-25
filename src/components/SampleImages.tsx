import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import sampleCat from "@/assets/sample-cat.jpg";
import sampleDog from "@/assets/sample-dog.jpg";

interface SampleImagesProps {
  onSampleSelect: (imageUrl: string, type: 'cat' | 'dog') => void;
}

export const SampleImages = ({ onSampleSelect }: SampleImagesProps) => {
  const samples = [
    {
      src: sampleCat,
      type: 'cat' as const,
      label: 'Sample Cat'
    },
    {
      src: sampleDog,
      type: 'dog' as const,
      label: 'Sample Dog'
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-center">Try Sample Images</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {samples.map((sample, index) => (
          <div key={index} className="space-y-3">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={sample.src}
                alt={sample.label}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onSampleSelect(sample.src, sample.type)}
            >
              Classify {sample.label}
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};