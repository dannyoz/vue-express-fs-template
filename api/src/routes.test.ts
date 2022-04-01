import { server } from "./index";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

describe("Endpoints", () => {
  it("GET / should return hello world", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("data");
  });
});
