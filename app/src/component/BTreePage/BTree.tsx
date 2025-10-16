import React from "react";
import Node from "./Node";

const NodeValue = {
  keys: [
    { index: 1, value: null },
    { index: 2, value: null },
    { index: 3, value: null },
    // { index: 13, value: null },
  ],
  next: [
    {
      keys: [
        { index: 4, value: null },
        { index: 5, value: null },
        { index: 6, value: null },
      ],
      next: [],
    },
    {
      keys: [
        { index: 7, value: null },
        { index: 8, value: null },
        { index: 9, value: null },
      ],
      next: [],
    },
    {
      keys: [
        { index: 10, value: null },
        { index: 11, value: null },
        { index: 11, value: null },
      ],
      next: [],
    },
    {
      keys: [
        { index: 10, value: null },
        { index: 11, value: null },
        { index: 55, value: null },
      ],
      next: [],
    },
  ],
  candidate: { index: 12, value: null },
  compare: 2,
  compareAt: 2,
};
export default function BTree() {
  return <Node {...NodeValue} />;
}
