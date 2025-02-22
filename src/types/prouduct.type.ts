export type TProduct = {
    name: string;
    brand: string;
    model: string;
    image: string;
    price: number;
    tag?: string;
    type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
    description: string;
    quantity: number;
    inStock: boolean;
    colors: string[];
  };
  