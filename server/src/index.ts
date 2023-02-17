import {MikroORM} from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";
import {Post} from "./entities/Post";
import express from "express";


const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const app = express()
app.get("/", (_, res)=>{
    res.send("hello")
})
    app.listen(4000, ()=>{
        console.log("server started on localhost:4000")
    })

    // const post = orm.em
    //   .fork({})
    //   .create(Post, { title: "My second post" } as RequiredEntityData<Post>);
    // await orm.em.persistAndFlush(post);
    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
};

main().catch((err) => {
    console.error(err);
});