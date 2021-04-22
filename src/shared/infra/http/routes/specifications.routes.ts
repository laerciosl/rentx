import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/creteSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecification/listSpecificationController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRoutes.get("/", listSpecificationController.handle);

specificationsRoutes.use(ensureAuthenticate);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
