import { queryType, stringArg, makeSchema } from "nexus";
import { GraphQLServer } from "graphql-yoga";

const Query = queryType({
    definition(t) {
        t.string("hello", {
            args: {
                name: stringArg({
                    description: "This is the name of the user",
                    nullable: false
                })
            },
            resolve: (parent, args) => {
                return `Hello ${args.name || "World"}!`
            }
        },
    });
},
});

const schema = makeSchema({
    types: [Query],
    outputs: {
        schema: __dirname + "/generated/schema.graphql",
        typegen: __dirname + "/generated/typings.ts",
    },
});

const server = new GraphQLServer({
    schema,
});

server.start(() => `Server is running on http://localhost:4000`);