/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
      id
      dateCreation
      dateStart
      dateEnd
      PKClient
      PKRoom
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRegistrations = /* GraphQL */ `
  query ListRegistrations(
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateCreation
        dateStart
        dateEnd
        PKClient
        PKRoom
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const registrationsByPKClient = /* GraphQL */ `
  query RegistrationsByPKClient(
    $PKClient: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrationsByPKClient(
      PKClient: $PKClient
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateCreation
        dateStart
        dateEnd
        PKClient
        PKRoom
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const registrationsByPKRoom = /* GraphQL */ `
  query RegistrationsByPKRoom(
    $PKRoom: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrationsByPKRoom(
      PKRoom: $PKRoom
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateCreation
        dateStart
        dateEnd
        PKClient
        PKRoom
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      roomNumber
      category
      floor
      beds
      price
      FKRegistrations {
        items {
          id
          dateCreation
          dateStart
          dateEnd
          PKClient
          PKRoom
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roomNumber
        category
        floor
        beds
        price
        FKRegistrations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      ssn
      address
      passport
      FKRegistrations {
        items {
          id
          dateCreation
          dateStart
          dateEnd
          PKClient
          PKRoom
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ssn
        address
        passport
        FKRegistrations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
