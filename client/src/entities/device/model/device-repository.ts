import { authApi, publicApi } from "@/shared/api";

class DeviceRepository {
  async create() {
    const { data } = await authApi.get("/api/device");

    return data;
  }

  async getAll() {
    const data = await publicApi.get("/api/device");

    return data;
  }

  async getById(deviceId: string) {
    const data = await publicApi.get(`/api/device/${deviceId}`);

    return data;
  }
}

export const deviceRepository = new DeviceRepository();
