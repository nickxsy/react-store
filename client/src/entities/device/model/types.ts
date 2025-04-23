export type Device = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  typeId: number;
  brandId: number;
};

export type CreateDeviceData = {
  brand: string;
  name: string;
  price: number;
  type: string;
};
