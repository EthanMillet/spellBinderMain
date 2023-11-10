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
  binderID: Binder
}

type Note {
  _id: ID
  title: String
  content: String
  binderID: Binder
}

type Token {
  _id: ID
  position: String
  title: String
  content: String
  tokenImg: String
  mapID: Map
}

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    binder(_id: ID!): Binder
    map(_id: ID!): Map
    note(_id: ID!): Note
    notes: [Note]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBinder(name: String!): Binder
    addMap(name: String!, imageUrl: String!, binderID: String!): Map
    addNote(title: String!, content: String!, binderID: String!): Note
    addToken(position: String!, title: String!, content: String!, tokenImg: String!, mapID: String!): Token
    deleteBinder(id: ID!): Binder
    deleteMap(id: ID!): Map
    deleteNote(id: ID!): Note
    deleteToken(id: ID!): Token
}
`

module.exports = typeDefs;