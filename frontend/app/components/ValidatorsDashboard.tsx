/** @jsx jsx */
import { useRankingData } from "~/hooks/useRankingData";
import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { css, jsx } from "@emotion/react";
import { ValidatorsTable } from "./ValidatorsTable";

const headerStyle = css`
  display: flex;
  alignitems: center;
  justify-content: center;
  padding: 20px 0px;
`;

const headerTitleStyle = css`
  text-align: center;
`;

const containerStyle = css`
  padding: 0 50px;
`;

export function ValidatorsDashboard() {
  const { rankingData, loading } = useRankingData();
  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div css={containerStyle}>
      <div css={headerStyle} className="header">
        <h3 css={headerTitleStyle}>PolkStakes</h3>
      </div>
      <div>
        <ValidatorsTable rankingData={rankingData} />
      </div>
    </div>
  );
}
