// export interface IUser {
//   name: string;
//   phone: string;
//   email: string;
//   gender: string;
//   city: string;
//   birth: string;
//   nationality: string;
// }

export interface IUser {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  },
  location: {
    street: {
      number: number,
      name: string,
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
      latitude: number,
      longitude: number
    },
    timezone: {
      offset: string | number,
      description: string
    }
  },
  email: string,
  login: {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
  },
  dob: {
    date: string,
    age: number | string
  },
  registered: {
    date: number | string,
    age: number | string
  },
  phone: number | string,
  cell: number | string,
  id: {
    name: number | string,
    value: number | string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  nat: string
}