import { atomFamily } from "recoil";

type Count = number;
type TodoId = string;

export const countEachState = atomFamily<Count, TodoId>({
  key: "countEachState",
  default: 1,
});