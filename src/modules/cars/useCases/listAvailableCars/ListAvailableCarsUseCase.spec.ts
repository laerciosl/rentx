import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 140.0,
      licence_plate: "DEF-1234",
      fine_amount: 100,
      brand: "Car_Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by Brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car Description",
      daily_rate: 140.0,
      licence_plate: "DEF-5678",
      fine_amount: 100,
      brand: "Car_Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by Name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car Description",
      daily_rate: 140.0,
      licence_plate: "DEF-0910",
      fine_amount: 100,
      brand: "Car_Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by Brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car Description",
      daily_rate: 140.0,
      licence_plate: "DEF-5678",
      fine_amount: 100,
      brand: "Car_Brand",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
