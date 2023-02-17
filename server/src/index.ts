import {MikroORM, RequiredEntityData} from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";
import {Post} from "./entities/Post";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const post = orm.em
      .fork({})
      .create(Post, { title: "My first post" } as RequiredEntityData<Post>);
    await orm.em.persistAndFlush(post);
    const posts = await orm.em.find(Post, {});
    console.log(posts);
};

main().catch((err) => {
    console.error(err);
});