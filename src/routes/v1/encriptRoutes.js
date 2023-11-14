import { Router } from "express";
import { encryptData, decryptData } from "../../services/common.js";
const route = Router();

/**
 * Routes Listing
 */
const encriptRoutes = () => {
  route.get("/encrypt_value", (req, res) => {
    const value = encryptData(req.query.t);
    res.jsonp({ value });
  });

  route.get("/decrypt_value", (req, res) => {
    const value = JSON.parse(decryptData(req.query.t));
    res.jsonp({ value });
  });
  return route;
};

export default encriptRoutes;
