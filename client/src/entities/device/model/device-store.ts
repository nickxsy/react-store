import { makeAutoObservable } from "mobx";
import { Device } from "./types";

export interface IDeviceStore {
  types: { id: number; name: string }[];
  brands: { id: number; name: string }[];
  devices: Device[];
  selectedType: { id?: number; name?: string };
  selectedBrand: { id?: number; name?: string };
  setSelectedType: (type: any) => void;
  setSelectedBrand: (brand: any) => void;
}

class DeviceStore implements IDeviceStore {
  private _types: { id: number; name: string }[];
  private _brands: { id: number; name: string }[];
  private _devices: Device[];
  _selectedType: { id?: number; name?: string };
  _selectedBrand: { id?: number; name?: string };

  constructor() {
    this._types = [
      { id: 1, name: "Type 1" },
      { id: 2, name: "Type 2" },
      { id: 3, name: "Type 3" },
      { id: 4, name: "Type 4" },
    ];
    this._brands = [
      { id: 1, name: "Brand 1" },
      { id: 2, name: "Brand 2" },
      { id: 3, name: "Brand 3" },
      { id: 4, name: "Brand 4" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Device 1",
        price: 100,
        rating: 4,
        img: "https://via.placeholder.com/150",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 2,
        name: "Device 2",
        price: 100,
        rating: 4,
        img: "https://via.placeholder.com/150",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 3,
        name: "Device 3",
        price: 100,
        rating: 4,
        img: "https://via.placeholder.com/150",
        typeId: 1,
        brandId: 1,
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }

  setSelectedType(type: any) {
    return (this._selectedType = type);
  }

  setSelectedBrand(brand: any) {
    return (this._selectedBrand = brand);
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}

export const deviceStore = new DeviceStore();
