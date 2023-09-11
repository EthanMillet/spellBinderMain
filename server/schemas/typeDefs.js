const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    binders: [Binder]
  }

type Binder {
  _id: ID
  name: String
  notes: [Note]
  maps: [Map]
}

type Map {
  _id: ID
  name: String
  imageUrl: String
  tokens: [Token]
}

type Note {
  _id: ID
  title: String
  content: String
}

type Token {
  _id: ID
  position: String
  title: String
  content: String
  tokenImg: String
}

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    binder(_id: ID!): Binder
    binders: [Binders]
    map(_id: ID!): Map
    maps: [Maps]
    note(_id; ID!): Note
    notes: [Note]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBinder(name: String!): Binder
    addMap(name: String!, mapUrl: String!): Map
    addNote(title: String!, content: String!): Note
    addToken(position: String!, title: String!, content: String!, tokenImg: String!): Token
}
`

module.exports = typeDefs;