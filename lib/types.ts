export type DataType = 'string' | 'number' | 'boolean' | 'date' | 'array' | 'uuid' | 'image';

export type FieldConnection = {
  category: string;
  fakerMethod: string;
  description: string;
};

export type Field = {
  name: string;
  dataType: DataType;
  connection: FieldConnection;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
  defaultFields: Field[];
};

export type GeneratedData = Array<Record<string, string | number | boolean | Array<string | number>>>;
