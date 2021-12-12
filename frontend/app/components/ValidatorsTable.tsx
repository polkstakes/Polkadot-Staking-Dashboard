import { Table, Tag, Space } from "antd";
import BigNumber from "bignumber.js";
import { RankingData } from "~/data/types";

const toMDOT = (value: BigNumber) => {
    return `${value.dividedBy(new BigNumber(10000000000000000)).toFixed(4)}MDOT`
}

const toDOT = (value: BigNumber) => {
    return `${value.dividedBy(new BigNumber(10000000000)).toFixed(4)}DOT`
}



const columns = [
  {
    title: "Name / Account Id",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Commission",
    dataIndex: "commission",
    key: "commission",
  },
  {
    title: "Total Rating",
    dataIndex: "totalRating",
    key: "totalRating",
  },
  {
    title: "Total Stake",
    dataIndex: "totalStake",
    key: "totalStake",
  },
  {
    title: "Own Stake",
    dataIndex: "ownStake",
    key: "ownStake",
  },
  {
    title: "Others Stake",
    dataIndex: "othersStake",
    key: "othersStake",
  },
  {
    title: "Active Eras",
    dataIndex: "activeEras",
    key: "activeEras",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text: string, record: any) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

interface ValidatorsTableProps {
  rankingData: RankingData[];
}

const getTags = (data: RankingData) => {
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

export const ValidatorsTable: React.FC<ValidatorsTableProps> = ({
  rankingData = [],
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
      tags: getTags(data),
    };
  });

  return <Table columns={columns} dataSource={tableData} />;
};
