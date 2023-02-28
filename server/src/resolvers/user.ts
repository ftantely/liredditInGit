import { Resolver, Mutation, InputType, Field, Arg, Ctx } from "type-graphql";
import { MyContext } from "../types";
import { User } from "../entities/User";
import { RequiredEntityData } from "@mikro-orm/core";
import argon2 from "argon2";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
  ) {
    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
    } as RequiredEntityData<User>);
    await em.persistAndFlush(user);
    return user;
  }
}
