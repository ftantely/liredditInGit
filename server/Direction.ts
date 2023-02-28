/*
0_Initialize and Install package JSON
 npm init -y
 copy and paste the package JSON
 npm install
 yarn install
 create gitignore
 npx tsconfig.json
 go to Javascript and select prettier
How to undo git: rm -rf .git/

 0_MikroOrmSetup
 npx mikro-orm migration:create
 yarn watch
 yarn dev

  5_Create_a_Post
  added "as RequiredEntityData<Post>"on const post = em.create(Post, {title} as RequiredEntityData<Post>
  8_Create_User_Entity
  No other user can have the same username of a user(It's unique)
  @Field()
  @Property({ type: "text", unique: true })
  username!: string;


*/
