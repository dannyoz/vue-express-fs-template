import { CorsConfig } from "./cors";

export class GetRoutes {
  cors = CorsConfig.allowedRoutes();
  constructor(public app: any) {}

  home() {
    return this.app.get("/", this.cors, (_req: unknown, res: any) => {
      res.json({
        data: "hello World",
      });
    });
  }

  testRoute() {
    return this.app.get("/test", this.cors, (_req: unknown, res: any) => {
      res.json({
        data: "test",
      });
    });
  }
}
