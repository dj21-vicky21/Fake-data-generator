"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, RefreshCw } from "lucide-react";
import { GeneratedData } from "@/lib/types";
import { toast } from "sonner";

interface DataPreviewProps {
  data: GeneratedData;
  onRefresh: () => void;
  recordCount: number;
}

export function DataPreview({ data, onRefresh }: DataPreviewProps) {
  const formattedData = JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedData);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.error("--> ~ handleCopy ~ error:", error)
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([formattedData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fake-data-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Data downloaded successfully!");
  };

  return (
    <div className="flex flex-col gap-6 h-full relative px-4">
      <div className="absolute right-4 top-0 flex gap-2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={onRefresh}
          title="Refresh Data"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          title="Copy to Clipboard"
        >
          <Copy className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleDownload}
          title="Download JSON"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-1 pr-[120px]">
        <h2 className="font-semibold tracking-tight text-2xl">Preview Code</h2>
        <p className="text-sm text-muted-foreground">
          View the generated data in JSON format ({data.length} records)
        </p>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <Textarea
          className="absolute inset-0 resize-none font-mono text-sm p-4"
          id="code"
          value={formattedData}
          readOnly
        />
      </div>
    </div>
  );
}
