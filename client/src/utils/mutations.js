import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
    }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BINDER = gql`
    mutation addBinder($name: String!) {
        addBinder(name: $name) {
            _id
            name
        }
    }
`

export const ADD_MAP = gql`
    mutation addMap($name: String!, $imageUrl: String!, $binderID: String!) {
        addMap(name: $name, imageUrl: $imageUrl, binderID: $binderID) {
            _id
            name
            imageUrl
            binderID {
              _id
            }
        }
    }
`

export const ADD_NOTE = gql`
    mutation addNote($title: String!, $content: String!, $binderID: String!) {
        addNote(title: $title, content: $content, binderID: $binderID) {
            _id
            title
            content
            binderID {
              _id
            }
        }
    }
`

export const ADD_TOKEN = gql`
    mutation addToken($position: String!, $title: String!, $content: String!, $tokenImg: String!, $mapID: String!) {
        addToken(position: $position, title: $title, content: $content, tokenImg: $tokenImg, mapID: $mapID) {
            _id
            position
            title
            content
            tokenImg
            mapID {
              _id
            }
        }
    }
`