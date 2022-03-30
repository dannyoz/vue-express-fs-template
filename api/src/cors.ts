import cors from "cors";

export class CorsConfig {
  public static allowedRoutes() {
    return cors({
      origin: "http://localhost:8080",
      optionsSuccessStatus: 200,
    });
  }
}
