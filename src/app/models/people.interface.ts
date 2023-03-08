export interface Patient {
  resourceType: string;
  type: string;
  timestamp: string;
  meta: Meta;
  entry: EntryEntity[] ;
  total: number;
  link: LinkEntity[] ;
  id: string;
}
export interface Meta {
  lastUpdated: string;
  versionId: string;
}
export interface EntryEntity {
  fullUrl: string;
  search: Search; 
  resource: Resource;
}
export interface Search {
  mode: string;
}
export interface Resource {
  resourceType: string;
  text: Text;
  identifier: (IdentifierEntity)[] | null;
  active?: boolean | null;
  name: NameEntity[];
  telecom?: (TelecomEntity)[] | null;
  gender: string;
  birthDate: string;
  deceasedBoolean?: boolean | null;
  address: AddressEntity[] | null;
  maritalStatus?: LanguageOrMaritalStatus | null;
  multipleBirthBoolean?: boolean | null;
  contact?: (ContactEntity)[] | null;
  communication?: (CommunicationEntity)[] | null;
  managingOrganization?: ManagingOrganization | null;
  id: string;
  meta: Meta1;
  extension?: (ExtensionEntity)[] | null;
}
export interface Text {
  status: string;
  div: string;
}
export interface IdentifierEntity {
  use?: string | null;
  system: string;
  value?: string | null;
  type?: TypeOrMaritalStatus | null;
}
export interface TypeOrMaritalStatus {
  text: string;
}
export interface NameEntity {
  use?: string | null;
  family: string;
  given: string[];
  suffix?: (string)[] | null;
  prefix?: (string)[] | null;
  text?: string | null;
}
export interface TelecomEntity {
  use: string;
  system: string;
  value: string;
}
export interface AddressEntity {
  use?: string | null;
  line: [] ;
  city: string;
  postalCode: string;
  country?: string | null;
  district?: string | null;
  state?: string | null;
  period?: Period | null;
}
export interface Period {
  start: string;
}
export interface LanguageOrMaritalStatus {
  coding?: (CodingEntityOrSecurityEntity)[] | null;
  text: string;
}
export interface CodingEntityOrSecurityEntity {
  system: string;
  code: string;
  display: string;
}
export interface ContactEntity {
  relationship?: (RelationshipEntity)[] | null;
  name: Name;
  telecom?: (TelecomEntity)[] | null;
}
export interface RelationshipEntity {
  coding?: (CodingEntityOrTagEntity)[] | null;
}
export interface CodingEntityOrTagEntity {
  system: string;
  code: string;
}
export interface Name {
  use: string;
  family: string;
  given?: (string)[] | null;
}
export interface CommunicationEntity {
  language: Language;
  preferred?: boolean | null;
}
export interface Language {
  coding?: (CodingEntityOrSecurityEntity)[] | null;
  text?: string | null;
}
export interface ManagingOrganization {
  reference: string;
  display?: string | null;
}
export interface Meta1 {
  tag?: (CodingEntityOrTagEntity)[] | null;
  versionId: string;
  lastUpdated: string;
  security?: (CodingEntityOrSecurityEntity)[] | null;
}
export interface ExtensionEntity {
  url: string;
  valueAddress?: ValueAddress | null;
  valueCodeableConcept?: ValueCodeableConceptOrLanguage | null;
}
export interface ValueAddress {
  city: string;
  country: string;
}
export interface ValueCodeableConceptOrLanguage {
  coding?: (CodingEntityOrSecurityEntity)[] | null;
}
export interface LinkEntity {
  relation: string;
  url: string;
}


export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface PeopleResponse {
  count: number;
  next: string;
  previous?: any;
  results: Person[];
}

