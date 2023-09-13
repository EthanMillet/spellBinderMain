import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser {
        user {
            _id
            username
            email
            binders {
                _id
                name
            }
        }
    }
`;

export const GET_BINDER = gql`
    query getBinder($_id: ID!) {
        binder(_id: $_id) {
            _id
            name
            notes {
                _id
                title
            }
            maps {
                _id
                name
                imageUrl
            }
        }
    }
`

export const GET_MAP = gql`
    query getMap($_id: ID!) {
        map(_id: $_id) {
            _id
            name
            imageUrl
            tokens {
                _id
                position
                title
                content
                tokenImg
            }
        }
    }
`

export const GET_NOTE = gql`
    query getNote($_id: ID!) {
        note(_id: $_id) {
            _id
            title
            content
        }
    }
`