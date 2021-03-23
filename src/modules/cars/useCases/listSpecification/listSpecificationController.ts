import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./listSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(requeste: Request, response: Reponse): Response {
    const all = this.listSpecificationUseCase.execute();

    return response.json(all);
  }
}

export { ListSpecificationController };
