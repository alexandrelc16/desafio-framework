export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UsersAddress;
  phone: string;
  website: string;
  company: UsersCompany;
}

export interface UsersAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UsersAddressGeo;
}

export interface UsersAddressGeo {
  lat: string;
  lng: string;
}

export interface UsersCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}