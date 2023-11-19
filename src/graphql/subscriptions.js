/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegistration = /* GraphQL */ `
  subscription OnCreateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onCreateRegistration(filter: $filter) {
      id
      dateCreation
      dateStart
      dateEnd
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
export const onUpdateRegistration = /* GraphQL */ `
  subscription OnUpdateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onUpdateRegistration(filter: $filter) {
      id
      dateCreation
      dateStart
      dateEnd
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
export const onDeleteRegistration = /* GraphQL */ `
  subscription OnDeleteRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onDeleteRegistration(filter: $filter) {
      id
      dateCreation
      dateStart
      dateEnd
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
