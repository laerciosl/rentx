import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
    email,
    password,
    driver_licence,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      password,
      driver_licence,
      avatar,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const emailUser = await this.repository.findOne({ email });

    return emailUser;
  }

  async findById(id: string): Promise<User> {
    const idUser = await this.repository.findOne(id);

    return idUser;
  }
}

export { UsersRepository };
