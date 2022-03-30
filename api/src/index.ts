import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GetRoutes } from "./routes";
import { CorsConfig } from "./cors";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 5000);

app.get("/", CorsConfig.allowedRoutes(), (_req: unknown, res: any) => {
  res.json({
    data: "hello World",
  });
});

new GetRoutes(app).testRoute();

app.listen(app.get("port"), () => {
  // tslint:disable-next-line
  console.log("Express api is running on port", app.get("port"));
});
