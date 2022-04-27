export interface IFilteredBrand {
  brandSelected: string;
  setBrandSelected: (value: string) => void;
}

export interface IUser {
  firstname: string;
  lastname: string;
  age: number;
  phone: string | number;
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
