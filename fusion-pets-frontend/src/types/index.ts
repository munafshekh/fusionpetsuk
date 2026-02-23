export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'bird' | 'other';
  breed: string;
  price: number;
  imageUrl: string;
  description: string;
  isAvailable: boolean;
}

export interface User {
  id: string;
  displayName: string;
  email: string;
  role: 'USER' | 'ADMIN';
}