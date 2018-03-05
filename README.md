
**Assumptions**
1. Mongodb running at **mongodb://localhost:27017/graphqldb**


## Steps to run

1. npm install && npm start
2. Go to http://localhost:3000/graphiql to run GraphQL queries
![Alt text](graphql-query-screenshot.png?raw=true "GraphQL-Query-screenshot")


##  Key points

1. Uses mongoose as ORM for mongodb
2. GraphQL schema at /src/database/typeDefs.graphql
3. Mongoose schema at /src/database/mongooseSchema.js
4. Reosolvers (at /src/resolvers.js) includes GraphQL Queries and Mutations
5. `makeExecutableSchema` from Apollo `graph-tools` combines GraphQL schema and resolvers to create executable schema

[Note: There have been attempts to auto-generate GraphQL type from Mongoose Schema. https://www.npmjs.com/search?q=mongoose%20to%20graphql&page=1&ranking=optimal. It solves the problem of needing to write similar schema at 2 places.]

