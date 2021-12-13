import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getRankingData, Status } from "~/data/rankingData";
import { RankingData } from "~/data/types";
// @ts-expect-error
import { data } from './data';
const rankingDataAtom = atom<RankingData[]>([]);

export function useRankingData() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [rankingData, setRankingData] = useAtom(rankingDataAtom);

  console.log(status);

  async function fetchRankingData() {
    setLoading(true);
    const validatorRankingData = await getRankingData(setStatus);
    setRankingData(validatorRankingData);
    setLoading(false);
  }

  useEffect(() => {
    if (!rankingData.length) {
      fetchRankingData();
    }
  }, []);

  return {
    rankingData,
    loading,
  };
}
