import { gql } from "graphql-request";

export const GetValidatorAddresses = gql`
  query {
    validatorsInfos(first: 500) {
      nodes {
        id
      }
    }
  }
`;

export const GetEraSalashes = gql`
  query {
    eraSlashes(first: 500) {
      nodes {
        id
        validators
      }
    }
  }
`;

export const GetEraPreferences = gql`
  query {
    eraPreferences(first: 500) {
      nodes {
        id
        validators
      }
    }
  }
`;

export const GetProposals = gql`
  query {
    proposals(first: 500) {
      nodes {
        id
        proposer
        seconds
      }
    }
  }
`;

export const GetMaxNominatorRewardedPerValidator = gql`
  query {
    maxNominatorRewardedPerValidator(id: "1") {
      maxNominatorRewardedPerValidator
    }
  }
`;

export const GetCouncilVotes = gql`
  query {
    councilVotes(first: 500) {
      nodes {
        id
        stake
        votes
      }
    }
  }
`;


export const GetEraPoints = gql`
  query {
    eraPoints(first: 500) {
      nodes {
        id
        eraPoints
        validators
      }
    }
  }
`;

export const GetNomination = gql`
  query {
    nominations(first: 500) {
      nodes {
        id
        nominator
        targets
      }
    }
  }
`;

export const GetReferendums = gql`
  query {
    referendums(first: 500) {
      nodes {
        id
        votes
      }
    }
  }
`;