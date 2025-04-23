import { makeAutoObservable, set } from 'mobx';

import { Device } from './types';

export interface IDeviceStore {
  types: { id: string; name: string }[];
  brands: { id: string; name: string }[];
  devices: Device[];
  selectedType: { id?: string; name?: string };
  selectedBrand: { id?: string; name?: string };
  setSelectedType: (type: any) => void;
  setSelectedBrand: (brand: any) => void;
  setTypes: any;
  setBrands: any;
  setDevices: any;
  page: number;
  limit: number;
  totalCount: number;
  setPage: any;
  setLimit: any;
  setTotalCount: any;
}

class DeviceStore implements IDeviceStore {
  private _types: { id: string; name: string }[];
  private _brands: { id: string; name: string }[];
  private _devices: Device[];
  _selectedType: { id?: string; name?: string };
  _selectedBrand: { id?: string; name?: string };
  _page: number;
  _limit: number;
  _totalCount: number;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];

    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 1;
    this._limit = 1;

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
    this.setPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand: any) {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setPage(page: number) {
    this._page = page;
  }

  setLimit(limit: number) {
    this._limit = limit;
  }

  setTotalCount(count: number) {
    this._totalCount = count;
  }

  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }

  get totalCount() {
    return this._totalCount;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}

export const deviceStore = new DeviceStore();
