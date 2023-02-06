import { Store } from './store';

// as a type for demo proposes
export type Category =
  | 'alcoolic-drink'
  | 'beer'
  | 'beverages'
  | 'craft-beer'
  | 'drink'
  | 'food'
  | 'house'
  | 'hygine'
  | 'pet';

export interface Product {
  brand: string;
  category: Category[];
  image: string;
  tags: string[];
  lastUpdate: string;
  lastUpdatedBy: string;
  name: string;
  price: number;
  store: Store;
}
