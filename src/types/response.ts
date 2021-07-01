type DateOfBirthday = {
  age: number;
  date: string;
};

type ID = {
  name: string;
  value: string;
};

type Location = {
  city: string;
  country: string;
  postcode: number;
  state: string;
};

type Name = {
  first: string;
  last: string;
  title: string;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type Response = {
  cell: string;
  dob: DateOfBirthday;
  email: string;
  gender: string;
  id: ID;
  location: Location;
  name: Name;
  phone: string;
  picture: Picture;
};
