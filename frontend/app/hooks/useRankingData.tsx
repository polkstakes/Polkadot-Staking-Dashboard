import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getRankingData } from "~/data/rankingData";
import { RankingData } from "~/data/types";
const rankingDataAtom = atom<RankingData[]>([]);

export function useRankingData() {
  const [loading, setLoading] = useState(false);
  const [rankingData, setRankingData] = useAtom(rankingDataAtom);

  async function fetchRankingData() {
    setLoading(true);
    const validatorRankingData = await getRankingData();
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
