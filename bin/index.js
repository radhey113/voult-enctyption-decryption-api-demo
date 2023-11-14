import express from "express";
import routes from "../src/routes/index.js";
import { encryptData, decryptData } from "../src/services/common.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.Router());
routes(app);

/**
 * CORS Setup
 */
app.all("/*", (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Content-Type, api_key, Authorization, x-requested-with, Total-Count, Total-Pages, Error-Message"
  );
  response.header(
    "Access-Control-Allow-Methods",
    "POST, GET, DELETE, PUT, OPTIONS"
  );
  response.header("Access-Control-Max-Age", 1800);
  next();
});

/**
 * Start node server
 * @returns
 */
export const startNodeserver = () => {
  return new Promise((resolve) => {
    app.listen("3000", (err) => {
      if (err) {
        console.error({ err: "es" });
        process.exit(0);
      }
      console.log("Server is running on 3000");
      resolve();
    });
  });
};
