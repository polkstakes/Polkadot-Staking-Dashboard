import { isFunction } from "@polkadot/util";
import type { Balance } from "@polkadot/types/interfaces";

const constructProposal = async (
  api: any,
  [bytes, proposer, balance, at]: any
) => {
  let proposal;

  try {
    proposal = await api.registry.createType("Proposal", bytes.toU8a(true));
  } catch (error) {
    console.error(error);
  }

  return { at, balance, proposal, proposer };
};

const isCurrentPreimage = async (api: any, imageOpt: any) => {
  return !!imageOpt && (await !api.query.democracy.dispatchQueue);
};

export const parseImage = async (api: any, imageOpt: any) => {
  if (imageOpt.isNone) {
    return;
  }

  const currenPreImage = await isCurrentPreimage(api, imageOpt);

  if (currenPreImage) {
    const status = imageOpt.unwrap();

    if (status.isMissing) {
      return;
    }

    const { data, deposit, provider, since } = status.asAvailable;

    return constructProposal(api, [data, provider, deposit, since]);
  }

  return constructProposal(api, imageOpt.unwrap());
};

export const getPreImages = async (hashes: any, api: any) => {
  const images = await api.query.democracy.preimages.multi(hashes);
  // @ts-ignore
  const preImages = images.map((imageOpt) => parseImage(api, imageOpt));
  return Promise.all(preImages);
};

function isNewDepositors(depositors: any) {
  // Detect balance...
  // eslint-disable-next-line @typescript-eslint/unbound-method
  return isFunction((depositors[1] as Balance).mul);
}

// @ts-ignore
function parse([proposals, images, optDepositors]) {
  return (
    proposals
      .filter(
        // @ts-ignore
        ([, , proposer], index): boolean =>
          !!optDepositors[index]?.isSome && !proposer.isEmpty
      )
      // @ts-ignore
      .map(([index, imageHash, proposer], proposalIndex) => {
        const depositors = optDepositors[proposalIndex].unwrap();

        return {
          ...(isNewDepositors(depositors)
            ? { balance: depositors[1], seconds: depositors[0] }
            : { balance: depositors[0], seconds: depositors[1] }),
          image: images[proposalIndex],
          imageHash,
          index,
          proposer,
        };
      })
  );
}

export const getProposals = async (api: any) => {
  const proposals = await api.query.democracy.publicProps();

  if (proposals.length) {
    const preImages = await getPreImages(
      // @ts-ignore
      proposals.map(([, hash]) => hash),
      api
    );
    const depositOf = await api.query.democracy.depositOf.multi(
      // @ts-ignore
      proposals.map(([index]) => index)
    );
    return parse([proposals, preImages, depositOf]);
  }

  return [];
};
