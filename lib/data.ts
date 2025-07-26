import { Category } from './types';

export const categories: Category[] = [
  {
    id: 'user',
    name: 'User',
    icon: 'user',
    description: 'Generate fake user data with names, emails, and more',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'User ID'
        }
      },
      {
        name: 'name',
        dataType: 'string',
        connection: {
          category: 'person',
          fakerMethod: 'fullName',
          description: 'Full name'
        }
      },
      {
        name: 'email',
        dataType: 'string',
        connection: {
          category: 'internet',
          fakerMethod: 'email',
          description: 'Email address'
        }
      },
      {
        name: 'password',
        dataType: 'string',
        connection: {
          category: 'internet',
          fakerMethod: 'password',
          description: 'Password'
        }
      }
    ]
  },
  {
    id: 'car',
    name: 'Car',
    icon: 'car',
    description: 'Generate fake vehicle data with makes, models, and properties',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Car ID'
        }
      },
      {
        name: 'make',
        dataType: 'string',
        connection: {
          category: 'vehicle',
          fakerMethod: 'manufacturer',
          description: 'Car manufacturer'
        }
      },
      {
        name: 'model',
        dataType: 'string',
        connection: {
          category: 'vehicle',
          fakerMethod: 'model',
          description: 'Car model'
        }
      },
      {
        name: 'type',
        dataType: 'string',
        connection: {
          category: 'vehicle',
          fakerMethod: 'type',
          description: 'Car type'
        }
      },
      {
        name: 'color',
        dataType: 'string',
        connection: {
          category: 'vehicle',
          fakerMethod: 'color',
          description: 'Car color'
        }
      },
      {
        name: 'vin',
        dataType: 'string',
        connection: {
          category: 'vehicle',
          fakerMethod: 'vin',
          description: 'Car VIN'
        }
      }
    ]
  },
  {
    id: 'location',
    name: 'Location',
    icon: 'map-pin',
    description: 'Generate fake location data with addresses, cities, and coordinates',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Location ID'
        }
      },
      {
        name: 'address',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'streetAddress',
          description: 'Street address'
        }
      },
      {
        name: 'city',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'city',
          description: 'City'
        }
      },
      {
        name: 'state',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'state',
          description: 'State'
        }
      },
      {
        name: 'country',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'country',
          description: 'Country'
        }
      },
      {
        name: 'zipCode',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'zipCode',
          description: 'Zip code'
        }
      },
      {
        name: 'latitude',
        dataType: 'number',
        connection: {
          category: 'location',
          fakerMethod: 'latitude',
          description: 'Latitude'
        }
      },
      {
        name: 'longitude',
        dataType: 'number',
        connection: {
          category: 'location',
          fakerMethod: 'longitude',
          description: 'Longitude'
        }
      }
    ]
  },
  {
    id: 'product',
    name: 'Product',
    icon: 'shopping-bag',
    description: 'Generate fake product data with names, prices, and descriptions',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Product ID'
        }
      },
      {
        name: 'name',
        dataType: 'string',
        connection: {
          category: 'commerce',
          fakerMethod: 'productName',
          description: 'Product name'
        }
      },
      {
        name: 'description',
        dataType: 'string',
        connection: {
          category: 'commerce',
          fakerMethod: 'productDescription',
          description: 'Product description'
        }
      },
      {
        name: 'price',
        dataType: 'string',
        connection: {
          category: 'commerce',
          fakerMethod: 'price',
          description: 'Product price'
        }
      },
      {
        name: 'department',
        dataType: 'string',
        connection: {
          category: 'commerce',
          fakerMethod: 'department',
          description: 'Product department'
        }
      },
      {
        name: 'material',
        dataType: 'string',
        connection: {
          category: 'commerce',
          fakerMethod: 'productMaterial',
          description: 'Product material'
        }
      }
    ]
  },
  {
    id: 'company',
    name: 'Company',
    icon: 'building',
    description: 'Generate fake company data with names, slogans, and addresses',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Company ID'
        }
      },
      {
        name: 'name',
        dataType: 'string',
        connection: {
          category: 'company',
          fakerMethod: 'name',
          description: 'Company name'
        }
      },
      {
        name: 'catchPhrase',
        dataType: 'string',
        connection: {
          category: 'company',
          fakerMethod: 'catchPhrase',
          description: 'Company catch phrase'
        }
      },
      {
        name: 'buzzPhrase',
        dataType: 'string',
        connection: {
          category: 'company',
          fakerMethod: 'bs',
          description: 'Company buzzword phrase'
        }
      },
      {
        name: 'address',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'streetAddress',
          description: 'Company address'
        }
      },
      {
        name: 'city',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'city',
          description: 'Company city'
        }
      },
      {
        name: 'country',
        dataType: 'string',
        connection: {
          category: 'location',
          fakerMethod: 'country',
          description: 'Company country'
        }
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: 'credit-card',
    description: 'Generate fake financial data with accounts, transactions, and credit cards',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Transaction ID'
        }
      },
      {
        name: 'accountName',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'accountName',
          description: 'Account name'
        }
      },
      {
        name: 'accountNumber',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'accountNumber',
          description: 'Account number'
        }
      },
      {
        name: 'amount',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'amount',
          description: 'Transaction amount'
        }
      },
      {
        name: 'transactionType',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'transactionType',
          description: 'Transaction type'
        }
      },
      {
        name: 'currencyCode',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'currencyCode',
          description: 'Currency code'
        }
      },
      {
        name: 'creditCardNumber',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'creditCardNumber',
          description: 'Credit card number'
        }
      },
      {
        name: 'creditCardCVV',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'creditCardCVV',
          description: 'Credit card CVV'
        }
      }
    ]
  },
  {
    id: 'social-media',
    name: 'Social Media',
    icon: 'share-2',
    description: 'Generate fake social media profiles, posts, and engagement metrics',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Post ID'
        }
      },
      {
        name: 'username',
        dataType: 'string',
        connection: {
          category: 'internet',
          fakerMethod: 'userName',
          description: 'Username'
        }
      },
      {
        name: 'avatar',
        dataType: 'string',
        connection: {
          category: 'internet',
          fakerMethod: 'avatar',
          description: 'Avatar URL'
        }
      },
      {
        name: 'content',
        dataType: 'string',
        connection: {
          category: 'lorem',
          fakerMethod: 'paragraph',
          description: 'Post content'
        }
      },
      {
        name: 'hashtags',
        dataType: 'array',
        connection: {
          category: 'word',
          fakerMethod: 'noun',
          description: 'Hashtags'
        }
      },
      {
        name: 'likes',
        dataType: 'number',
        connection: {
          category: 'number',
          fakerMethod: 'int',
          description: 'Like count'
        }
      },
      {
        name: 'comments',
        dataType: 'number',
        connection: {
          category: 'number',
          fakerMethod: 'int',
          description: 'Comment count'
        }
      },
      {
        name: 'shares',
        dataType: 'number',
        connection: {
          category: 'number',
          fakerMethod: 'int',
          description: 'Share count'
        }
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: 'heart-pulse',
    description: 'Generate fake medical data with patient records, treatments, and diagnoses',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Patient ID'
        }
      },
      {
        name: 'name',
        dataType: 'string',
        connection: {
          category: 'person',
          fakerMethod: 'fullName',
          description: 'Patient name'
        }
      },
      {
        name: 'gender',
        dataType: 'string',
        connection: {
          category: 'person',
          fakerMethod: 'gender',
          description: 'Patient gender'
        }
      },
      {
        name: 'bloodGroup',
        dataType: 'string',
        connection: {
          category: 'string',
          fakerMethod: 'sample',
          description: 'Blood group'
        }
      },
      {
        name: 'height',
        dataType: 'number',
        connection: {
          category: 'number',
          fakerMethod: 'int',
          description: 'Height in cm'
        }
      },
      {
        name: 'weight',
        dataType: 'number',
        connection: {
          category: 'number',
          fakerMethod: 'int',
          description: 'Weight in kg'
        }
      },
      {
        name: 'diagnosis',
        dataType: 'string',
        connection: {
          category: 'lorem',
          fakerMethod: 'sentence',
          description: 'Medical diagnosis'
        }
      },
      {
        name: 'medications',
        dataType: 'array',
        connection: {
          category: 'word',
          fakerMethod: 'noun',
          description: 'Medications'
        }
      }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'graduation-cap',
    description: 'Generate fake educational data with schools, courses, and student information',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Student ID'
        }
      },
      {
        name: 'name',
        dataType: 'string',
        connection: {
          category: 'person',
          fakerMethod: 'fullName',
          description: 'Student name'
        }
      },
      {
        name: 'school',
        dataType: 'string',
        connection: {
          category: 'company',
          fakerMethod: 'name',
          description: 'School name'
        }
      },
      {
        name: 'major',
        dataType: 'string',
        connection: {
          category: 'person',
          fakerMethod: 'jobArea',
          description: 'Major field of study'
        }
      },
      {
        name: 'gpa',
        dataType: 'number',
        connection: {
          category: 'number',
          fakerMethod: 'float',
          description: 'Grade point average'
        }
      },
      {
        name: 'graduationYear',
        dataType: 'number',
        connection: {
          category: 'date',
          fakerMethod: 'future',
          description: 'Graduation year'
        }
      },
      {
        name: 'courses',
        dataType: 'array',
        connection: {
          category: 'word',
          fakerMethod: 'noun',
          description: 'Course list'
        }
      }
    ]
  },
  {
    id: 'invoice',
    name: 'Invoice',
    icon: 'receipt',
    description: 'Generate fake invoice data with items, amounts, and payment details',
    defaultFields: [
      {
        name: 'id',
        dataType: 'number',
        connection: {
          category: 'id',
          fakerMethod: 'numeric',
          description: 'Invoice ID'
        }
      },
      {
        name: 'invoiceNumber',
        dataType: 'string',
        connection: {
          category: 'string',
          fakerMethod: 'alphanumeric',
          description: 'Invoice number'
        }
      },
      {
        name: 'date',
        dataType: 'date',
        connection: {
          category: 'date',
          fakerMethod: 'recent',
          description: 'Invoice date'
        }
      },
      {
        name: 'dueDate',
        dataType: 'date',
        connection: {
          category: 'date',
          fakerMethod: 'future',
          description: 'Due date'
        }
      },
      {
        name: 'customerName',
        dataType: 'string',
        connection: {
          category: 'person',
          fakerMethod: 'fullName',
          description: 'Customer name'
        }
      },
      {
        name: 'customerEmail',
        dataType: 'string',
        connection: {
          category: 'internet',
          fakerMethod: 'email',
          description: 'Customer email'
        }
      },
      {
        name: 'items',
        dataType: 'array',
        connection: {
          category: 'commerce',
          fakerMethod: 'productName',
          description: 'Invoice items'
        }
      },
      {
        name: 'amount',
        dataType: 'string',
        connection: {
          category: 'finance',
          fakerMethod: 'amount',
          description: 'Total amount'
        }
      },
      {
        name: 'status',
        dataType: 'string',
        connection: {
          category: 'string',
          fakerMethod: 'sample',
          description: 'Payment status'
        }
      }
    ]
  }
];
