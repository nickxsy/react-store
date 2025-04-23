import { authApi, publicApi } from '@/shared/api';

class BrandRepository {
  async create(name: string) {
    const { data } = await authApi.post('/api/brand', {
      name
    });

    return data;
  }

  async getAll() {
    const { data } = await publicApi.get('/api/brand');

    return data;
  }
}

export const brandRepository = new BrandRepository();
