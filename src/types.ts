export interface IFilteredBrand {
  brandSelected: string;
  setBrandSelected: (value: string) => void;
}

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
}

export interface AccordionProps {
  usersData: IUser[];
}

export interface ICar {
  brand: string;
  model: string;
  price: number;
}

export interface TableProps {
  carsData: ICar[];
}
