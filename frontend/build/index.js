var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/ashik/Personal/hackathon/polkadot-staking-dashboard/frontend/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_remix2 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-HUNEOKVS.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-6BS6Y2E4.css";

// node_modules/antd/dist/antd.css
var antd_default = "/build/_assets/antd-UOZEVVMX.css";

// route-module:/Users/ashik/Personal/hackathon/polkadot-staking-dashboard/frontend/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: antd_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "app"
  }, children);
}

// route-module:/Users/ashik/Personal/hackathon/polkadot-staking-dashboard/frontend/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});

// app/hooks/useRankingData.tsx
var import_jotai = __toModule(require("jotai"));
var import_react = __toModule(require("react"));

// app/data/rankingData.tsx
var import_api = __toModule(require("@polkadot/api"));
var import_rpc_provider = __toModule(require("@polkadot/rpc-provider"));
var import_graphql_request2 = __toModule(require("graphql-request"));

// app/data/handlers/identity.ts
var import_util = __toModule(require("@polkadot/util"));
var getIdentityParent = (identityOfOpt, superOfOpt, api) => {
  if (identityOfOpt == null ? void 0 : identityOfOpt.isSome) {
    return [identityOfOpt, void 0];
  } else if (superOfOpt == null ? void 0 : superOfOpt.isSome) {
    const superOf = superOfOpt.unwrap();
    return [api.query.identity.identityOf(superOf[0]), superOf];
  }
  return [void 0, void 0];
};
var dataAsString = (data) => {
  if (!data) {
    return "";
  }
  return (data == null ? void 0 : data.isRaw) ? (0, import_util.u8aToString)(data.asRaw.toU8a(true)) : data.isNone ? void 0 : data.toHex();
};
var extractOther = (additional) => {
  return additional.reduce((other, [_key, _value]) => {
    const key = dataAsString(_key);
    const value = dataAsString(_value);
    if (key && value) {
      other[key] = value;
    }
    return other;
  }, {});
};
var UNDEF_HEX = { toHex: () => void 0 };
var extractIdentity = (identityOfOpt, superOf) => {
  if (!(identityOfOpt == null ? void 0 : identityOfOpt.isSome)) {
    return { judgements: [] };
  }
  const { info, judgements } = identityOfOpt.unwrap();
  const topDisplay = dataAsString(info.display);
  return {
    display: superOf && dataAsString(superOf[1]) || topDisplay,
    displayParent: superOf && topDisplay,
    email: dataAsString(info.email),
    image: dataAsString(info.image),
    judgements,
    legal: dataAsString(info.legal),
    other: extractOther(info.additional),
    parent: superOf && superOf[0],
    pgp: info.pgpFingerprint.unwrapOr(UNDEF_HEX).toHex(),
    riot: dataAsString(info.riot),
    twitter: dataAsString(info.twitter),
    web: dataAsString(info.web)
  };
};
var getIdentity = async (accountId, api) => {
  const [identityOfOpt, superOfOpt] = await api.queryMulti([
    [api.query.identity.identityOf, accountId],
    [api.query.identity.superOf, accountId]
  ]);
  const parent = getIdentityParent(identityOfOpt, superOfOpt, api);
  const identityInfo = extractIdentity(parent[0], parent[1]);
  return identityInfo;
};
var getValidatorsWithIdentity = async (api, validatorAddresses) => {
  const validatorsWithIdentity = validatorAddresses.map(async (validatorAddresses2) => {
    try {
      const identity = await getIdentity(validatorAddresses2, api);
      return {
        identity
      };
    } catch (err) {
      return {};
    }
  });
  return Promise.all(validatorsWithIdentity);
};

// app/data/handlers/session.ts
function parse([
  currentIndex,
  activeEra,
  activeEraStart,
  currentEra,
  validatorCount
]) {
  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    validatorCount
  };
}
async function queryStaking(api) {
  const [currentIndex, activeOpt, currentEra, validatorCount] = await api.queryMulti([
    api.query.session.currentIndex,
    api.query.staking.activeEra,
    api.query.staking.currentEra,
    api.query.staking.validatorCount
  ]);
  const { index, start } = activeOpt.unwrapOrDefault();
  return parse([
    currentIndex,
    index,
    start,
    currentEra.unwrapOrDefault(),
    validatorCount
  ]);
}
async function querySession(api) {
  const currentIndex = await api.query.session.currentIndex();
  const eraIndex = await api.registry.createType("EraIndex");
  const option = await api.registry.createType("Option<Moment>");
  const u32option = await api.registry.createType("u32");
  return parse([currentIndex, eraIndex, option, eraIndex, u32option]);
}
async function empty(api) {
  return parse([
    await api.registry.createType("SessionIndex", 1),
    await api.registry.createType("EraIndex"),
    await api.registry.createType("Option<Moment>"),
    await api.registry.createType("EraIndex"),
    await api.registry.createType("u32")
  ]);
}
async function getSessionIndexes(api) {
  if (api.query.session) {
    if (api.query.staking) {
      return queryStaking(api);
    }
    return querySession(api);
  }
  return empty(api);
}

// app/data/handlers/query.ts
function parseDetails(stashId, controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure, stakingLedgerOpt) {
  return {
    accountId: stashId,
    controllerId: controllerIdOpt && controllerIdOpt.unwrapOr(null),
    exposure,
    nominators: nominatorsOpt.isSome ? nominatorsOpt.unwrap().targets : [],
    rewardDestination,
    stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
    stashId,
    validatorPrefs
  };
}
async function getLedgers(api, optIds, { withLedger = false }) {
  const ids = optIds.filter((opt) => withLedger && !!opt && opt.isSome).map((opt) => opt.unwrap());
  const emptyLed = api.registry.createType("Option<StakingLedger>");
  let optLedgers = [];
  if (ids.length) {
    optLedgers = await api.query.staking.ledger.multi(ids);
  }
  let offset = -1;
  return optIds.map((opt) => opt && opt.isSome ? optLedgers[++offset] || emptyLed : emptyLed);
}
async function getStashInfo(api, stashIds, activeEra, {
  withController,
  withDestination,
  withExposure,
  withLedger,
  withNominations,
  withPrefs
}) {
  const emptyNoms = await api.registry.createType("Option<Nominations>");
  const emptyRewa = await api.registry.createType("RewardDestination");
  const emptyExpo = await api.registry.createType("Exposure");
  const emptyPrefs = await api.registry.createType("ValidatorPrefs");
  const bonded = withController || withLedger ? await api.query.staking.bonded.multi(stashIds) : stashIds.map(() => null);
  const nominators = withNominations ? await api.query.staking.nominators.multi(stashIds) : stashIds.map(() => emptyNoms);
  const payee = withDestination ? await api.query.staking.payee.multi(stashIds) : stashIds.map(() => emptyRewa);
  const validators = withPrefs ? await api.query.staking.validators.multi(stashIds) : stashIds.map(() => emptyPrefs);
  const erasStakers = withExposure ? await api.query.staking.erasStakers.multi(stashIds.map((stashId) => [activeEra, stashId])) : stashIds.map(() => emptyExpo);
  return [bonded, nominators, payee, validators, erasStakers];
}
async function getBatch(api, activeEra, stashIds, flags) {
  const [
    controllerIdOpt,
    nominatorsOpt,
    rewardDestination,
    validatorPrefs,
    exposure
  ] = await getStashInfo(api, stashIds, activeEra, flags);
  const stakingLedgerOpts = await getLedgers(api, controllerIdOpt, flags);
  const parsedDetails = stashIds.map(async (stashId, index) => await parseDetails(stashId, controllerIdOpt[index], nominatorsOpt[index], rewardDestination[index], validatorPrefs[index], exposure[index], stakingLedgerOpts[index]));
  return Promise.all(parsedDetails);
}
async function accountQuery(accountId, flags, api) {
  const [first] = await accountQueryMulti([accountId], flags, api);
  return first;
}
async function accountQueryMulti(accountIds, flags, api) {
  if (accountIds.length) {
    const { activeEra } = await getSessionIndexes(api);
    const stashIds = await Promise.all(accountIds.map(async (accountId) => await api.registry.createType("AccountId", accountId)));
    return await getBatch(api, activeEra, stashIds, flags);
  }
  return [];
}

// app/data/rankingData.tsx
var import_bignumber2 = __toModule(require("bignumber.js"));

// app/data/handlers/utils.ts
var import_bignumber = __toModule(require("bignumber.js"));
var getPayoutRating = (payoutHistory) => {
  const pendingEras = payoutHistory.filter((era) => era.status === "pending").length;
  if (pendingEras <= 1) {
    return 3;
  }
  if (pendingEras <= 3 * 1) {
    return 2;
  }
  if (pendingEras < 7 * 1) {
    return 1;
  }
  return 0;
};
var isIdentityVerified = (identity) => {
  var _a;
  if (((_a = identity.judgements) == null ? void 0 : _a.length) === 0) {
    return false;
  }
  if (!identity.judgements) {
    return false;
  }
  return identity.judgements.filter(([, judgement]) => !judgement.isFeePaid).some(([, judgement]) => judgement.isKnownGood || judgement.isReasonable);
};
var subIdentity = (identity) => {
  if (identity.displayParent && identity.displayParent !== "" && identity.display && identity.display !== "") {
    return true;
  }
  return false;
};
var getName = (identity) => {
  if (identity.displayParent && identity.displayParent !== "" && identity.display && identity.display !== "") {
    return `${identity.displayParent}/${identity.display}`;
  }
  return identity.display || "";
};
var getIdentityRating = (name, verifiedIdentity, hasAllFields) => {
  if (verifiedIdentity && hasAllFields) {
    return 3;
  }
  if (verifiedIdentity && !hasAllFields) {
    return 2;
  }
  if (name !== "") {
    return 1;
  }
  return 0;
};
var parseIdentity = (identities) => {
  if (identities.length === 0) {
    return {};
  }
  const { identity } = identities[0];
  const verifiedIdentity = isIdentityVerified(identity);
  const hasSubIdentity = subIdentity(identity);
  const name = getName(identity);
  const hasAllFields = identity.display && identity.legal && identity.web && identity.email && identity.twitter && identity.riot;
  const identityRating = getIdentityRating(name, verifiedIdentity, hasAllFields);
  return {
    verifiedIdentity,
    hasSubIdentity,
    name,
    identityRating
  };
};
var getCommissionHistory = (accountId, erasPreferences) => {
  const commissionHistory = [];
  erasPreferences.forEach(({ id, validators }) => {
    if (validators[accountId]) {
      commissionHistory.push({
        era: new import_bignumber.BigNumber(id.toString()).toString(10),
        commission: (validators[accountId].commission / 1e7).toFixed(2)
      });
    } else {
      commissionHistory.push({
        era: new import_bignumber.BigNumber(id.toString()).toString(10),
        commission: null
      });
    }
  });
  return commissionHistory;
};
var getCommissionRating = (commission, commissions) => {
  const commissionHistory = commissions.map(({ commission: commission2 }) => {
    if (!commission2) {
      return 0;
    }
    return parseInt(commission2, 10);
  });
  if (commission !== 100 && commission !== 0) {
    if (commission > 10) {
      return 1;
    }
    if (commission >= 5) {
      if (commissionHistory.length > 1 && commissionHistory[0].commission > commissionHistory[commissionHistory.length - 1].commission) {
        return 3;
      }
      return 2;
    }
    if (commission < 5) {
      return 3;
    }
  }
  return 0;
};
var getClusterName = (identity) => identity.displayParent || "";
var getClusterInfo = (hasSubIdentity, validators, validatorIdentities) => {
  const validatorIdentity = validatorIdentities.length > 0 ? validatorIdentities[0].identity : {};
  if (!hasSubIdentity) {
    if (validatorIdentity.display) {
      const stringSize = 6;
      const clusterMembers2 = validators.filter(({ identity }) => (identity.display || "").substring(0, stringSize) === validatorIdentity.display.substring(0, stringSize)).length;
      const clusterName2 = validatorIdentity.display.replace(/\d{1,2}$/g, "").replace(/-$/g, "").replace(/_$/g, "");
      return {
        clusterName: clusterName2,
        clusterMembers: clusterMembers2
      };
    }
    return {
      clusterName: "",
      clusterMembers: 0
    };
  }
  const clusterMembers = validators.filter(({ identity: identities }) => {
    const identity = identities.length > 0 ? identities[0].identity : {};
    return identity.displayParent === validatorIdentity.displayParent;
  }).length;
  const clusterName = getClusterName(validatorIdentity);
  return {
    clusterName,
    clusterMembers
  };
};

// app/data/queries.ts
var import_graphql_request = __toModule(require("graphql-request"));
var GetValidatorAddresses = import_graphql_request.gql`
  query GetValidators($after: Cursor) {
    validatorsInfos(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
      }
    }
  }
`;
var GetEraSalashes = import_graphql_request.gql`
  query GetEraSalashes($after: Cursor) {
    eraSlashes(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        validators
      }
    }
  }
`;
var GetEraPreferences = import_graphql_request.gql`
  query GetEraPreferences($after: Cursor) {
    eraPreferences(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        validators
      }
    }
  }
`;
var GetProposals = import_graphql_request.gql`
  query GetProposals($after: Cursor) {
    proposals(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        proposer
        seconds
      }
    }
  }
`;
var GetMaxNominatorRewardedPerValidator = import_graphql_request.gql`
  query {
    maxNominatorRewardedPerValidator(id: "1") {
      maxNominatorRewardedPerValidator
    }
  }
`;
var GetCouncilVotes = import_graphql_request.gql`
  query GetCouncilVotes($after: Cursor) {
    councilVotes(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        stake
        votes
      }
    }
  }
`;
var GetEraPoints = import_graphql_request.gql`
  query GetEraPoints($after: Cursor) {
    eraPoints(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        eraPoints
        validators
      }
    }
  }
`;
var GetNomination = import_graphql_request.gql`
  query GetNomination($after: Cursor) {
    nominations(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        nominator
        targets
      }
    }
  }
`;
var GetReferendums = import_graphql_request.gql`
  query GetReferendums($after: Cursor) {
    referendums(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        votes
      }
    }
  }
`;

// app/data/rankingData.tsx
var provider = new import_rpc_provider.WsProvider("wss://polkadot.api.onfinality.io/public-ws");
var stakingQueryFlags = {
  withDestination: false,
  withExposure: true,
  withLedger: true,
  withNominations: false,
  withPrefs: true
};
async function fetchAll(query, key) {
  const subquery = new import_graphql_request2.GraphQLClient("https://api.subquery.network/sq/ashikmeerankutty/staking-subquery");
  let hasNext = true;
  let data = [];
  let cursor = "";
  while (hasNext) {
    const gqlData = await subquery.request(query, {
      after: cursor
    });
    if (gqlData[key]) {
      data = [...data, ...gqlData[key].nodes];
    }
    hasNext = gqlData[key].pageInfo.hasNextPage;
    cursor = gqlData[key].pageInfo.endCursor;
  }
  console.log(data);
  return data;
}
async function getRankingData() {
  const api = await import_api.ApiPromise.create({ provider });
  const validatorsInfos = await fetchAll(GetValidatorAddresses, "validatorsInfos");
  const validatorsInfo = await Promise.all(validatorsInfos.map(async (authority) => {
    const accountId = authority.id;
    const accountInfo = await accountQuery(accountId, stakingQueryFlags, api);
    const identity = await getValidatorsWithIdentity(api, [accountId]);
    return __spreadProps(__spreadValues({}, accountInfo), {
      identity,
      active: true
    });
  }));
  const subquery = new import_graphql_request2.GraphQLClient("https://api.subquery.network/sq/ashikmeerankutty/staking-subquery");
  const referendums = await fetchAll(GetReferendums, "referendums");
  const nominations = await fetchAll(GetNomination, "nominations");
  const proposals = await fetchAll(GetProposals, "proposals");
  const councilVotes = await fetchAll(GetCouncilVotes, "councilVotes");
  const eraSlashes = await fetchAll(GetEraSalashes, "eraSlashes");
  const eraPreferences = await fetchAll(GetEraPreferences, "eraPreferences");
  const eraPoints = await fetchAll(GetEraPoints, "eraPoints");
  const { maxNominatorRewardedPerValidator } = await subquery.request(GetMaxNominatorRewardedPerValidator);
  const participateInGovernance = [];
  proposals.forEach(({ seconds, proposer }) => {
    participateInGovernance.push(proposer.toString());
    seconds.forEach((accountId) => participateInGovernance.push(accountId.toString()));
  });
  referendums.forEach(({ votes }) => {
    votes.forEach(({ accountId }) => participateInGovernance.push(accountId.toString()));
  });
  const clusters = [];
  const rankingData = validatorsInfo.map((validator) => {
    var _a, _b;
    const { active } = validator;
    const activeRating = active ? 2 : 0;
    const stashAddress = validator.stashId.toString();
    const controllerAddress = validator.controllerId.toString();
    const {
      verifiedIdentity,
      hasSubIdentity,
      name,
      identityRating = 0
    } = parseIdentity(validator.identity);
    const identity = JSON.parse(JSON.stringify(validator.identity));
    const { clusterMembers, clusterName } = getClusterInfo(hasSubIdentity, validatorsInfo, validator.identity);
    if (clusterName && !clusters.includes(clusterName)) {
      clusters.push(clusterName);
    }
    const partOfCluster = clusterMembers > 1;
    const subAccountsRating = hasSubIdentity ? 2 : 0;
    const nominators = active ? validator.exposure.others : nominations.filter((nomination) => nomination.targets.some((target) => target === validator.accountId.toString())).length;
    console.log(maxNominatorRewardedPerValidator.maxNominatorRewardedPerValidator);
    const nominatorsRating = nominators > 0 && nominators <= maxNominatorRewardedPerValidator.maxNominatorRewardedPerValidator.toNumber() ? 2 : 0;
    const slashes = eraSlashes.filter(({ validators }) => {
      const parsedValidators = JSON.parse(validators);
      return parsedValidators[validator.accountId.toString()];
    }) || [];
    const slashed = slashes.length > 0;
    const slashRating = slashed ? 0 : 2;
    const commission = parseInt(validator.validatorPrefs.commission.toString(), 10) / 1e7;
    const commissionHistory = getCommissionHistory(validator.accountId, eraPreferences.map((pref) => {
      return __spreadProps(__spreadValues({}, pref), {
        validators: JSON.parse(pref.validators)
      });
    }));
    const commissionRating = getCommissionRating(commission, commissionHistory);
    const eraPointsHistory = [];
    const payoutHistory = [];
    const stakeHistory = [];
    let activeEras = 0;
    let performance = 0;
    eraPoints.forEach((eraPoints2) => {
      const { id } = eraPoints2;
      let eraPayoutState = "inactive";
      let eraPerformance = 0;
      const validators = JSON.parse(eraPoints2.validators);
      if (validators[stashAddress]) {
        activeEras += 1;
        const points = parseInt(validators[stashAddress].toString(), 10);
        eraPointsHistory.push({
          era: new import_bignumber2.BigNumber(id.toString()).toString(10),
          points
        });
        if (validator.stakingLedger.claimedRewards.includes(id)) {
          eraPayoutState = "paid";
        } else {
          eraPayoutState = "pending";
        }
      } else {
        eraPointsHistory.push({
          era: new import_bignumber2.BigNumber(id.toString()).toString(10),
          points: 0
        });
        stakeHistory.push({
          era: new import_bignumber2.BigNumber(id.toString()).toString(10),
          self: 0,
          others: 0,
          total: 0
        });
      }
      payoutHistory.push({
        era: new import_bignumber2.BigNumber(id.toString()).toString(10),
        status: eraPayoutState
      });
      performance += eraPerformance;
    });
    const eraPointsHistoryValidator = eraPointsHistory.reduce((total, era) => total + era.points, 0);
    const eraPointsHistoryTotals = [];
    eraPoints.forEach(({ eraPoints: eraPoints2 }) => {
      eraPointsHistoryTotals.push(parseInt(eraPoints2.toString(), 10));
    });
    const eraPointsHistoryTotalsSum = eraPointsHistoryTotals.reduce((total, num) => total + num, 0);
    const numActiveValidators = validatorsInfo.length;
    const eraPointsAverage = eraPointsHistoryTotalsSum / numActiveValidators;
    const eraPointsPercent = eraPointsHistoryValidator * 100 / eraPointsHistoryTotalsSum;
    const eraPointsRating = eraPointsHistoryValidator > eraPointsAverage ? 2 : 0;
    const payoutRating = getPayoutRating(payoutHistory);
    const councilBacking = ((_a = validator.identity) == null ? void 0 : _a.parent) ? councilVotes.some((vote) => vote.id.toString() === validator.accountId.toString()) || councilVotes.some((vote) => vote.id.toString() === validator.identity.parent.toString()) : councilVotes.some((vote) => vote.id.toString() === validator.accountId.toString());
    const activeInGovernance = ((_b = validator.identity) == null ? void 0 : _b.parent) ? participateInGovernance.includes(validator.accountId.toString()) || participateInGovernance.includes(validator.identity.parent.toString()) : participateInGovernance.includes(validator.accountId.toString());
    let governanceRating = 0;
    if (councilBacking && activeInGovernance) {
      governanceRating = 3;
    } else if (councilBacking || activeInGovernance) {
      governanceRating = 2;
    }
    const selfStake = active ? new import_bignumber2.BigNumber(validator.exposure.own.toString()) : new import_bignumber2.BigNumber(validator.stakingLedger.total.toString());
    const totalStake = active ? new import_bignumber2.BigNumber(validator.exposure.total.toString()) : selfStake;
    const otherStake = active ? totalStake.minus(selfStake) : new import_bignumber2.BigNumber(0);
    const showClusterMember = true;
    const totalRating = activeRating + identityRating + subAccountsRating + nominatorsRating + commissionRating + slashRating + governanceRating + eraPointsRating + payoutRating;
    return {
      accountId: validator.accountId,
      active,
      activeRating,
      name,
      identity,
      hasSubIdentity,
      subAccountsRating,
      verifiedIdentity,
      identityRating,
      stashAddress: stashAddress.toString(),
      controllerAddress,
      partOfCluster,
      clusterName,
      clusterMembers,
      showClusterMember,
      nominators,
      nominatorsRating,
      commission,
      commissionHistory,
      commissionRating,
      performance,
      slashed,
      slashRating,
      slashes,
      councilBacking,
      activeInGovernance,
      governanceRating,
      selfStake,
      otherStake,
      totalStake,
      totalRating,
      activeEras,
      eraPointsPercent
    };
  });
  return rankingData.sort((a, b) => a.totalRating < b.totalRating ? 1 : -1);
}

// app/hooks/useRankingData.tsx
var rankingDataAtom = (0, import_jotai.atom)([]);
function useRankingData() {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [rankingData, setRankingData] = (0, import_jotai.useAtom)(rankingDataAtom);
  async function fetchRankingData() {
    setLoading(true);
    const validatorRankingData = await getRankingData();
    setRankingData(validatorRankingData);
    setLoading(false);
  }
  (0, import_react.useEffect)(() => {
    if (!rankingData.length) {
      fetchRankingData();
    }
  }, []);
  return {
    rankingData,
    loading
  };
}

// app/components/ValidatorsDashboard.tsx
var import_react2 = __toModule(require("@emotion/react"));

// app/components/ValidatorsTable.tsx
var import_antd2 = __toModule(require("antd"));
var import_bignumber3 = __toModule(require("bignumber.js"));
var toMDOT = (value) => {
  return `${value.dividedBy(new import_bignumber3.default(1e16)).toFixed(4)}MDOT`;
};
var toDOT = (value) => {
  return `${value.dividedBy(new import_bignumber3.default(1e10)).toFixed(4)}DOT`;
};
var columns = [
  {
    title: "Name / Account Id",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Commission",
    dataIndex: "commission",
    key: "commission"
  },
  {
    title: "Total Rating",
    dataIndex: "totalRating",
    key: "totalRating"
  },
  {
    title: "Total Stake",
    dataIndex: "totalStake",
    key: "totalStake"
  },
  {
    title: "Own Stake",
    dataIndex: "ownStake",
    key: "ownStake"
  },
  {
    title: "Others Stake",
    dataIndex: "othersStake",
    key: "othersStake"
  },
  {
    title: "Active Eras",
    dataIndex: "activeEras",
    key: "activeEras"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => /* @__PURE__ */ React.createElement(React.Fragment, null, tags.map((tag) => {
      let color = tag.length > 5 ? "geekblue" : "green";
      if (tag === "loser") {
        color = "volcano";
      }
      return /* @__PURE__ */ React.createElement(import_antd2.Tag, {
        color,
        key: tag
      }, tag.toUpperCase());
    }))
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => /* @__PURE__ */ React.createElement(import_antd2.Space, {
      size: "middle"
    }, /* @__PURE__ */ React.createElement("a", null, "Delete"))
  }
];
var getTags = (data) => {
  const tags = [];
  if (data.verifiedIdentity) {
    tags.push("Verified Identity");
  }
  if (data.councilBacking) {
    tags.push("Council Backing");
  }
  if (data.activeInGovernance) {
    tags.push("Active In Governance");
  }
  if (data.partOfCluster) {
    tags.push("Part of cluster");
  }
  if (data.slashed) {
    tags.push("Slashed");
  }
  return tags;
};
var ValidatorsTable = ({
  rankingData = []
}) => {
  const tableData = rankingData.map((data) => {
    return {
      key: data.accountId,
      name: data.name || data.accountId.toString(),
      commission: `${data.commission.toFixed(2).toString()}%`,
      totalRating: data.totalRating.toString(),
      totalStake: toMDOT(data.totalStake),
      othersStake: toMDOT(data.otherStake),
      ownStake: toDOT(data.selfStake),
      activeEras: data.activeEras,
      tags: getTags(data)
    };
  });
  return /* @__PURE__ */ React.createElement(import_antd2.Table, {
    columns,
    dataSource: tableData
  });
};

// app/components/ValidatorsDashboard.tsx
var headerStyle = import_react2.css`
  display: flex;
  alignitems: center;
  justify-content: center;
  padding: 20px 0px;
`;
var headerTitleStyle = import_react2.css`
  text-align: center;
`;
var containerStyle = import_react2.css`
  padding: 0 50px;
`;
function ValidatorsDashboard() {
  const { rankingData, loading } = useRankingData();
  if (loading) {
    return /* @__PURE__ */ (0, import_react2.jsx)("div", null, "loading");
  }
  return /* @__PURE__ */ (0, import_react2.jsx)("div", {
    css: containerStyle
  }, /* @__PURE__ */ (0, import_react2.jsx)("div", {
    css: headerStyle,
    className: "header"
  }, /* @__PURE__ */ (0, import_react2.jsx)("h3", {
    css: headerTitleStyle
  }, "PolkStakes")), /* @__PURE__ */ (0, import_react2.jsx)("div", null, /* @__PURE__ */ (0, import_react2.jsx)(ValidatorsTable, {
    rankingData
  })));
}

// route-module:/Users/ashik/Personal/hackathon/polkadot-staking-dashboard/frontend/app/routes/index.tsx
var meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement(ValidatorsDashboard, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
