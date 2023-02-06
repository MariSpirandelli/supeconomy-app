export interface Location {
  lat: number;
  long: number;
}

export interface Store {
  address?: string;
  image: string;
  location?: Location;
  name: string;
}
