import { authApi, publicApi } from '@/shared/api';

import { type Device } from './types';

class DeviceRepository {
  async create(data: any) {
    const { data: deviceData } = await authApi.post('/api/device', data);

    return deviceData;
  }

  async getAll({
    typeId,
    brandId,
    page,
    limit = 1
  }: {
    typeId?: string;
    brandId?: string;
    page?: number;
    limit?: number;
  }): Promise<{ count: number; rows: Device[] }> {
    const { data } = await publicApi.get<{ count: number; rows: Device[] }>(
      '/api/device',
      {
        params: {
          typeId,
          brandId,
          page,
          limit
        }
      }
    );

    return data;
  }

  async getById(deviceId: string): Promise<Device> {
    const { data } = await publicApi.get<Device>(`/api/device/${deviceId}`);

    return data;
  }
}

export const deviceRepository = new DeviceRepository();
