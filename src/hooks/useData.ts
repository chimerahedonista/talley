import { cloneDeep } from "lodash";
import Data from "../data.json";

export const useData = () => {
  const statuses = ["REVIEW", "PENDING", "LIVE", "PASSED", "FAILED"];
  const stages = ["Review", "Pending", "Live"];

  const populated = Data.proposals.flatMap((x) => Array.from({ length: 10 }).fill(x));

  const data: any = [];
  populated.forEach((x: any) => {
    const y = cloneDeep(x);
    const rand = Math.floor(Math.random() * 3);
    const _for = Math.floor(Math.random() * 100);
    const against = Math.floor(Math.random() * 100);
    const abstain = Math.floor(Math.random() * 100);
    y.id = Math.floor(Math.random() * 100) + 1;
    y.status = statuses[rand];
    y.stage = stages[rand];
    y.votes.for = _for;
    y.votes.against = against;
    y.votes.abstain = abstain;

    console.log(y);
    console.log(y);
    data.push(y);
  });

  console.log(data);
  return data;
};
