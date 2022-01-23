import { ApolloServer } from "apollo-server"

const typeDefs = `
    type greeting {
        message : String
    }

    type Query {
        greeting : greeting
    }

    type Mutation {
        greetMe(name : String) : greeting
    }
`

const resolvers = {
    Query: {
        greeting() {
            return { message: "Welcome to Monark Angola" };
        }
    },
    Mutation: {
        greetMe(_: any, {name} : any) {
            return { message: `Hello ${name}` };

        }
    }
}


const server = new ApolloServer({ typeDefs, resolvers })


server.listen(); 