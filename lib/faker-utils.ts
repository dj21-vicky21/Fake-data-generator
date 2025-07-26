import { faker } from '@faker-js/faker';
import { Field, GeneratedData } from './types';

// Map to faker functions based on category and method
const fakerFunctions: Record<string, Record<string, () => string | number | boolean>> = {
  person: {
    firstName: () => faker.person.firstName(),
    lastName: () => faker.person.lastName(),
    fullName: () => faker.person.fullName(),
    gender: () => faker.person.sex(),
    jobTitle: () => faker.person.jobTitle(),
    jobArea: () => faker.person.jobArea(),
    bio: () => faker.person.bio(),
  },
  internet: {
    email: () => faker.internet.email(),
    userName: () => faker.internet.userName(),
    password: () => faker.internet.password(),
    avatar: () => faker.image.avatar(),
    url: () => faker.internet.url(),
    domainName: () => faker.internet.domainName(),
    ipv4: () => faker.internet.ipv4(),
    ipv6: () => faker.internet.ipv6(),
    userAgent: () => faker.internet.userAgent(),
  },
  location: {
    country: () => faker.location.country(),
    countryCode: () => faker.location.countryCode(),
    city: () => faker.location.city(),
    state: () => faker.location.state(),
    streetAddress: () => faker.location.streetAddress(),
    zipCode: () => faker.location.zipCode(),
    latitude: () => faker.location.latitude(),
    longitude: () => faker.location.longitude(),
    timeZone: () => faker.location.timeZone(),
  },
  finance: {
    accountNumber: () => faker.finance.accountNumber(),
    accountName: () => faker.finance.accountName(),
    amount: () => faker.finance.amount(),
    creditCardNumber: () => faker.finance.creditCardNumber(),
    creditCardCVV: () => faker.finance.creditCardCVV(),
    bitcoinAddress: () => faker.finance.bitcoinAddress(),
    currencyCode: () => faker.finance.currencyCode(),
    transactionType: () => faker.finance.transactionType(),
  },
  date: {
    past: () => faker.date.past().toISOString(),
    future: () => faker.date.future().toISOString(),
    recent: () => faker.date.recent().toISOString(),
    weekday: () => faker.date.weekday(),
    month: () => faker.date.month(),
  },
  system: {
    fileName: () => faker.system.fileName(),
    filePath: () => faker.system.filePath(),
    directoryPath: () => faker.system.directoryPath(),
    mimeType: () => faker.system.mimeType(),
    fileExt: () => faker.system.fileExt(),
    semver: () => faker.system.semver(),
  },
  vehicle: {
    vehicle: () => faker.vehicle.vehicle(),
    manufacturer: () => faker.vehicle.manufacturer(),
    model: () => faker.vehicle.model(),
    type: () => faker.vehicle.type(),
    fuel: () => faker.vehicle.fuel(),
    vin: () => faker.vehicle.vin(),
    color: () => faker.vehicle.color(),
  },
  database: {
    collation: () => faker.database.collation(),
    column: () => faker.database.column(),
    engine: () => faker.database.engine(),
    type: () => faker.database.type(),
    mongodbObjectId: () => faker.database.mongodbObjectId(),
  },
  commerce: {
    productName: () => faker.commerce.productName(),
    productDescription: () => faker.commerce.productDescription(),
    price: () => faker.commerce.price(),
    department: () => faker.commerce.department(),
    product: () => faker.commerce.product(),
    productAdjective: () => faker.commerce.productAdjective(),
    productMaterial: () => faker.commerce.productMaterial(),
  },
  company: {
    name: () => faker.company.name(),
    catchPhrase: () => faker.company.catchPhrase(),
    bs: () => faker.company.buzzPhrase(),
    suffixes: () => faker.company.suffixes().join(', '),
    buzzVerb: () => faker.company.buzzVerb(),
    buzzAdjective: () => faker.company.buzzAdjective(),
    buzzNoun: () => faker.company.buzzNoun(),
  },
  id: {
    uuid: () => faker.string.uuid(),
    nanoid: () => faker.string.nanoid(),
    numeric: () => faker.number.int({ min: 10000, max: 99999 }).toString(),
  },
  image: {
    url: () => faker.image.url(),
    avatar: () => faker.image.avatar(),
    dataUri: () => faker.image.dataUri(),
  },
  string: {
    alphanumeric: () => faker.string.alphanumeric(10),
    alpha: () => faker.string.alpha(10),
    numeric: () => faker.string.numeric(10),
    sample: () => faker.string.sample(),
  },
  number: {
    int: () => faker.number.int({ min: 1, max: 1000 }),
    float: () => faker.number.float({ min: 1, max: 1000, precision: 0.01 }),
    binary: () => faker.number.binary(8),
    octal: () => faker.number.octal(8),
    hex: () => faker.number.hex(8),
  },
  phone: {
    number: () => faker.phone.number(),
    imei: () => faker.phone.imei(),
  },
  color: {
    rgb: () => faker.color.rgb(),
    hex: () => faker.color.rgb({ format: 'hex', casing: 'lower' }),
    human: () => faker.color.human(),
  },
  word: {
    adjective: () => faker.word.adjective(),
    adverb: () => faker.word.adverb(),
    conjunction: () => faker.word.conjunction(),
    interjection: () => faker.word.interjection(),
    noun: () => faker.word.noun(),
    preposition: () => faker.word.preposition(),
    verb: () => faker.word.verb(),
  },
  lorem: {
    word: () => faker.lorem.word(),
    words: () => faker.lorem.words(),
    sentence: () => faker.lorem.sentence(),
    paragraph: () => faker.lorem.paragraph(),
  }
};

// Generate a value based on the field definition
export function generateValue(field: Field): string | number | boolean | Array<string | number> {
  const { dataType, connection } = field;

  try {
    // Get the faker function
    const categoryFunctions = fakerFunctions[connection.category];
    if (!categoryFunctions) return `Unknown category: ${connection.category}`;

    const fakerFunction = categoryFunctions[connection.fakerMethod];
    if (!fakerFunction) return `Unknown method: ${connection.fakerMethod}`;

    // Generate the value
    const generatedValue = fakerFunction();

    // Handle array types - generate an array of 3-5 items
    if (dataType === 'array') {
      const count = Math.floor(Math.random() * 3) + 3; // 3-5 items
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(fakerFunction());
      }
      return arr;
    }

    return generatedValue;
  } catch (error) {
    console.error('Error generating fake data:', error);
    return `Error generating ${dataType}`;
  }
}

// Generate data based on the fields
export function generateData(fields: Field[], count: number): GeneratedData {
  const data: GeneratedData = [];

  for (let i = 0; i < count; i++) {
    const item: Record<string, string | number | boolean | Array<string | number>> = {};

    for (const field of fields) {
      item[field.name] = generateValue(field);
    }

    data.push(item);
  }

  return data;
}

export function getAvailableCategories(): string[] {
  return Object.keys(fakerFunctions);
}

export function getAvailableMethods(category: string): string[] {
  return Object.keys(fakerFunctions[category] || {});
}
