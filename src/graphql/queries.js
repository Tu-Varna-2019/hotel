/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
      id
      dateCreation
      dateStart
      dateEnd
      registrationNumber
      untitledfield
      FKClients {
        items {
          id
          name
          ssn
          address
          passport
          PKRegistration
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      FKRooms {
        items {
          id
          roomNumber
          category
          floor
          beds
          price
          PKRegistration
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
        registrationNumber
        untitledfield
        FKClients {
          nextToken
          __typename
        }
        FKRooms {
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
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      roomNumber
      category
      floor
      beds
      price
      PKRegistration
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
        PKRegistration
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const roomsByPKRegistration = /* GraphQL */ `
  query RoomsByPKRegistration(
    $PKRegistration: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roomsByPKRegistration(
      PKRegistration: $PKRegistration
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomNumber
        category
        floor
        beds
        price
        PKRegistration
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
      PKRegistration
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
        PKRegistration
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const clientsByPKRegistration = /* GraphQL */ `
  query ClientsByPKRegistration(
    $PKRegistration: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientsByPKRegistration(
      PKRegistration: $PKRegistration
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        ssn
        address
        passport
        PKRegistration
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
