import { authApi, publicApi } from "@/shared/api";
import { jwtDecode } from "jwt-decode";

class UserRepository {
  async registration(email: string, password: string) {
    const { data } = await publicApi.post("/api/user/registration", {
      email,
      password,
      role: "USER",
    });

    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
  }

  async login(email: string, password: string) {
    const { data } = await publicApi.post("/api/user/login", {
      email,
      password,
    });

    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
  }
  async auth() {
    const { data } = await authApi.get("/api/user/auth");
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
  }
}

export const userRepository = new UserRepository();
