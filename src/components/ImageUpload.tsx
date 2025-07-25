import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export const ImageUpload = ({ onImageSelect }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (jpg, png, etc.)",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (jpg, png, etc.)",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Card 
      className={`relative p-8 transition-all duration-300 cursor-pointer border-2 border-dashed
        ${dragActive 
          ? 'border-primary bg-primary/5 shadow-glow' 
          : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5'
        }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <ImageIcon className="h-16 w-16 text-muted-foreground animate-float" />
          <Upload className="h-6 w-6 text-primary absolute -top-2 -right-2" />
        </div>
        
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Upload Image</h3>
          <p className="text-sm text-muted-foreground">
            Drag and drop an image of a cat or dog here, or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            Supported formats: JPG, PNG, GIF
          </p>
        </div>

        <Button variant="outline" className="mt-4">
          Browse Files
        </Button>
      </div>
    </Card>
  );
};