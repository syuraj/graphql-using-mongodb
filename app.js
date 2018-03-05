import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import fs from 'fs';

import resolvers from './src/resolvers';
import mongooseSchema from './src/database/mongooseSchema';

const app = express();
mongoose.connect('mongodb://localhost:27017/graphqldb');

const typeDefs = fs.readFileSync('./src/database/typeDefs.graphql', 'utf8');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: mongooseSchema
}));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});
