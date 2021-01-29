export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    country: String
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    email: String!
    name: String!
    country: String
  }

  input UpdateUserInput {
    email: String
    name: String
    country: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
