import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Cars";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicencePlate(licence_plate: string): Promise<Car>;
  findAvailableCars(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]>;
}

export { ICarsRepository };
