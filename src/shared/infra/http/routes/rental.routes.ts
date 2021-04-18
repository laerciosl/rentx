import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/useCases/CreateRentalsController";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const rentalsRoutes = Router();

const createRentalsController = new CreateRentalsController();

rentalsRoutes.post("/", ensureAuthenticate, createRentalsController.handle);

export { rentalsRoutes };
