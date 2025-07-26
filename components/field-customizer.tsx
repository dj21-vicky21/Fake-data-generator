"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Plus, Link as LinkIcon, X, Pencil, Check } from "lucide-react";
import { Field, DataType } from "@/lib/types";
import { getAvailableCategories, getAvailableMethods } from "@/lib/faker-utils";

interface FieldCustomizerProps {
  fields: Field[];
  onFieldsChange: (fields: Field[]) => void;
}

export function FieldCustomizer({ fields, onFieldsChange }: FieldCustomizerProps) {
  const [editingFieldIndex, setEditingFieldIndex] = useState<number | null>(null);
  const [editingFieldName, setEditingFieldName] = useState<string>("");
  const [showAddFieldForm, setShowAddFieldForm] = useState(false);
  const [newField, setNewField] = useState<Field>({
    name: "",
    dataType: "string",
    connection: {
      category: "person",
      fakerMethod: "firstName",
      description: ""
    }
  });

  const dataTypes: DataType[] = ["string", "number", "boolean", "date", "array", "uuid", "image"];
  const badgeColors: Record<DataType, string> = {
    string: "bg-green-300 text-green-800 dark:bg-green-700 dark:text-green-200",
    number: "bg-blue-300 text-blue-800 dark:bg-blue-700 dark:text-blue-200",
    boolean: "bg-purple-300 text-purple-800 dark:bg-purple-700 dark:text-purple-200",
    date: "bg-orange-300 text-orange-800 dark:bg-orange-700 dark:text-orange-200",
    array: "bg-red-300 text-red-800 dark:bg-red-700 dark:text-red-200",
    uuid: "bg-indigo-300 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200",
    image: "bg-pink-300 text-pink-800 dark:bg-pink-700 dark:text-pink-200"
  };

  const handleDeleteField = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    onFieldsChange(newFields);
  };

  const handleAddField = () => {
    if (newField.name.trim() === "") return;

    onFieldsChange([...fields, newField]);
    setNewField({
      name: "",
      dataType: "string",
      connection: {
        category: "person",
        fakerMethod: "firstName",
        description: ""
      }
    });
    setShowAddFieldForm(false);
  };

  const handleChangeDataType = (index: number, dataType: DataType) => {
    const newFields = [...fields];
    newFields[index] = {
      ...newFields[index],
      dataType
    };
    onFieldsChange(newFields);
  };

  const handleChangeConnection = (index: number, category: string, method: string) => {
    const newFields = [...fields];
    newFields[index] = {
      ...newFields[index],
      connection: {
        category,
        fakerMethod: method,
        description: `${category}.${method}`
      }
    };
    onFieldsChange(newFields);
  };

  const startEditingField = (index: number) => {
    setEditingFieldIndex(index);
    setEditingFieldName(fields[index].name);
  };

  const saveEditingField = () => {
    if (editingFieldIndex === null) return;
    if (editingFieldName.trim() === "") return;

    const newFields = [...fields];
    newFields[editingFieldIndex] = {
      ...newFields[editingFieldIndex],
      name: editingFieldName
    };
    onFieldsChange(newFields);
    setEditingFieldIndex(null);
  };

  const cancelEditingField = () => {
    setEditingFieldIndex(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Customize Fields
          </label>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAddFieldForm(true)}
          className={showAddFieldForm ? "hidden" : "flex"}
        >
          <Plus className="h-4 w-4 mr-1" /> Add Field
        </Button>
      </div>

      <div className="container mx-auto rounded-md border">
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Data Type</TableHead>
                <TableHead>Connection</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field, index) => (
                <TableRow key={`field-${index}-${field.name}`}>
                  <TableCell className="font-medium">
                    {editingFieldIndex === index ? (
                      <div className="flex items-center gap-2">
                        <Input
                          value={editingFieldName}
                          onChange={(e) => setEditingFieldName(e.target.value)}
                          className="h-8 py-1"
                          autoFocus
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={saveEditingField}
                          className="h-8 w-8 p-0"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={cancelEditingField}
                          className="h-8 w-8 p-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="flex items-center gap-2 cursor-pointer hover:text-primary"
                        onClick={() => startEditingField(index)}
                      >
                        {field.name}
                        <Pencil className="h-3 w-3 opacity-50" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Badge className={`cursor-pointer ${badgeColors[field.dataType]}`}>
                          {field.dataType.charAt(0).toUpperCase() + field.dataType.slice(1)}
                        </Badge>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {dataTypes.map((type) => (
                          <DropdownMenuItem key={type} onClick={() => handleChangeDataType(index, type)}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex items-center cursor-pointer hover:text-primary">
                          <LinkIcon className="h-4 w-4 mr-1" />
                          <span className="truncate max-w-[150px]">
                            {`${field.connection.category}.${field.connection.fakerMethod}`}
                          </span>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 max-h-[300px] overflow-y-auto" align="start">
                        {getAvailableCategories().map((category) => (
                          <DropdownMenuSub key={category}>
                            <DropdownMenuSubTrigger>
                              <span>{category}</span>
                              <span className="ml-2 text-xs text-muted-foreground">
                                ({getAvailableMethods(category).length})
                              </span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="max-h-[300px] overflow-y-auto">
                                {getAvailableMethods(category).map((method) => (
                                  <DropdownMenuItem
                                    key={method}
                                    onClick={() => handleChangeConnection(index, category, method)}
                                  >
                                    {method}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => startEditingField(index)}
                          className="cursor-pointer"
                        >
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit Name
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 cursor-pointer"
                          onClick={() => handleDeleteField(index)}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}

              {showAddFieldForm && (
                <TableRow>
                  <TableCell>
                    <Input
                      placeholder="Field name"
                      value={newField.name}
                      onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                    />
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Badge className={`cursor-pointer ${badgeColors[newField.dataType]}`}>
                          {newField.dataType.charAt(0).toUpperCase() + newField.dataType.slice(1)}
                        </Badge>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {dataTypes.map((type) => (
                          <DropdownMenuItem
                            key={type}
                            onClick={() => setNewField({ ...newField, dataType: type })}
                          >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex items-center cursor-pointer hover:text-primary">
                          <LinkIcon className="h-4 w-4 mr-1" />
                          <span className="truncate max-w-[150px]">
                            {`${newField.connection.category}.${newField.connection.fakerMethod}`}
                          </span>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 max-h-[300px] overflow-y-auto" align="start">
                        {getAvailableCategories().map((category) => (
                          <DropdownMenuSub key={category}>
                            <DropdownMenuSubTrigger>
                              <span>{category}</span>
                              <span className="ml-2 text-xs text-muted-foreground">
                                ({getAvailableMethods(category).length})
                              </span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="max-h-[300px] overflow-y-auto">
                                {getAvailableMethods(category).map((method) => (
                                  <DropdownMenuItem
                                    key={method}
                                    onClick={() => setNewField({
                                      ...newField,
                                      connection: {
                                        category,
                                        fakerMethod: method,
                                        description: `${category}.${method}`
                                      }
                                    })}
                                  >
                                    {method}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setShowAddFieldForm(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                      <Button variant="default" size="sm" onClick={handleAddField}>
                        Add
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
