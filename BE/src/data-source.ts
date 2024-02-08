import "reflect-metadata";
import { DataSource } from "typeorm";
import { Math } from "./entities/Math";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "viaduct.proxy.rlwy.net",
  port: 54191,
  username: "postgres",
  password: "Ca1eAaD1DBA1CgABfGEGD56cCGe555aa",
  database: "railway",
  synchronize: true,
  logging: false,
  // entities: ["src/entities/*.ts"],
  entities: [Math],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
