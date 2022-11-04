const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        _id: ID!
        title: String!
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
    }

    input savedBook {
        description: String
        title: String
        bookId: String
        image: String
        link: String
        authors: [String]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!) : Auth
        login()
        saveBook(input: savedBook!): User
        removeBook(bookId: ID!): User
    }
`;