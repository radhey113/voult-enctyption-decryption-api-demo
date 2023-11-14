import { encriptRoutes } from "./v1/index.js";

/**
 * Initialze routes
 * @param {*} app
 */
const initRoutes = (app) => {
  app.use("/data", encriptRoutes());
};

export default initRoutes;
