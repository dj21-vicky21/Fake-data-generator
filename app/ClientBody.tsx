"use client";

import { useState, useEffect } from "react";
import { CategorySelector } from "@/components/category-selector";
import { FieldCustomizer } from "@/components/field-customizer";
import { DataPreview } from "@/components/data-preview";
import { RecordCountControl } from "@/components/record-count-control";
import { Card } from "@/components/ui/card";
import { categories } from "@/lib/data";
import { generateData } from "@/lib/faker-utils";
import { Separator } from "@/components/ui/separator";
import { Category, Field, GeneratedData } from "@/lib/types";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function ClientBody() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [fields, setFields] = useState<Field[]>(categories[0].defaultFields);
  const [recordCount, setRecordCount] = useState<number>(5);
  const [generatedData, setGeneratedData] = useState<GeneratedData>([]);

  // Initialize with default fields when category changes
  useEffect(() => {
    setFields(selectedCategory.defaultFields);
  }, [selectedCategory]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleFieldsChange = (newFields: Field[]) => {
    setFields(newFields);
    // Don't auto-generate data here
  };

  const handleGenerateData = () => {
    const data = generateData(fields, recordCount);
    setGeneratedData(data);
  };

  return (
    <main className="max-w-[1400px] mx-auto p-4 flex flex-col sm:flex-row gap-4 h-full">
      <Card className="basis-1/2 px-4 py-6 flex flex-col gap-6 h-full overflow-y-auto">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold tracking-tight text-2xl">Customize Fields</h2>
          <p className="text-sm text-muted-foreground">
            Define field names and select data types to suit your needs
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />

          <Separator className="my-2" />

          <FieldCustomizer
            fields={fields}
            onFieldsChange={handleFieldsChange}
          />

          <div className="flex items-center justify-between">
            <RecordCountControl
              count={recordCount}
              setCount={setRecordCount}
            />

            <Button
              variant="default"
              onClick={handleGenerateData}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Generate Data
            </Button>
          </div>
        </div>
      </Card>

      <Card className="basis-1/2 py-6 flex flex-col gap-6 h-full overflow-hidden">
        <DataPreview
          data={generatedData}
          onRefresh={handleGenerateData}
          recordCount={recordCount}
        />
      </Card>

      <Toaster position="bottom-right" />
    </main>
  );
}
