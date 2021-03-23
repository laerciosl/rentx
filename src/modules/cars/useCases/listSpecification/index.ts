import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./listSpecificationController";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

const specificationRepository = SpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationController };
