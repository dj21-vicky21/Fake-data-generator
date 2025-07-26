"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Category } from "@/lib/types";
import {
  ChevronDown,
  User,
  Car,
  MapPin,
  ShoppingBag,
  Building,
  CreditCard,
  Share2,
  HeartPulse,
  GraduationCap,
  Receipt
} from "lucide-react";

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export function CategorySelector({
  categories,
  selectedCategory,
  onSelectCategory
}: CategorySelectorProps) {

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return <User className="h-4 w-4 mr-2" />;
      case 'car':
        return <Car className="h-4 w-4 mr-2" />;
      case 'map-pin':
        return <MapPin className="h-4 w-4 mr-2" />;
      case 'shopping-bag':
        return <ShoppingBag className="h-4 w-4 mr-2" />;
      case 'building':
        return <Building className="h-4 w-4 mr-2" />;
      case 'credit-card':
        return <CreditCard className="h-4 w-4 mr-2" />;
      case 'share-2':
        return <Share2 className="h-4 w-4 mr-2" />;
      case 'heart-pulse':
        return <HeartPulse className="h-4 w-4 mr-2" />;
      case 'graduation-cap':
        return <GraduationCap className="h-4 w-4 mr-2" />;
      case 'receipt':
        return <Receipt className="h-4 w-4 mr-2" />;
      default:
        return <User className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="category">
          Select category
        </label>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex justify-between items-center w-full sm:w-[300px]"
          >
            <div className="flex items-center gap-2">
              {getCategoryIcon(selectedCategory.icon)}
              <span>{selectedCategory.name}</span>
            </div>
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] max-h-[400px] overflow-y-auto">
          {categories.map((category) => (
            <DropdownMenuItem
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="flex items-center cursor-pointer"
            >
              {getCategoryIcon(category.icon)}
              <div className="flex flex-col">
                <span>{category.name}</span>
                <span className="text-xs text-muted-foreground">{category.description}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
