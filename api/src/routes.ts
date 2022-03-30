import { CorsConfig } from "./cors";

export class GetRoutes {
  constructor(public app: any) {}

  testRoute() {
    return this.app.get(
      "/test",
      CorsConfig.allowedRoutes(),
      (_req: unknown, res: any) => {
        res.json({
          data: "test",
        });
      }
    );
  }
}
