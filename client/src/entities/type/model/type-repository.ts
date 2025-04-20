import { authApi, publicApi } from "@/shared/api";

class TypeRepository {
  async create(name: string) {
    const { data } = await authApi.post("/api/type", {
      name,
    });

    return data;
  }

  async getAll() {
    const { data } = await publicApi.get("/api/type");

    return data;
  }
}

export const typeRepository = new TypeRepository();
