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
  setTypes: any;
  setBrands: any;
  setDevices: any;
}

class DeviceStore implements IDeviceStore {
  private _types: { id: number; name: string }[];
  private _brands: { id: number; name: string }[];
  private _devices: Device[];
  _selectedType: { id?: number; name?: string };
  _selectedBrand: { id?: number; name?: string };

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];

    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types: any) {
    this._types = types;
  }

  setBrands(brands: any) {
    this._brands = brands;
  }

  setDevices(devices: any) {
    this._devices = devices;
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
