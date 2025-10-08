import React from "react";
import Node from "./Node";

const NodeValue = {
  keys: [
    { index: 1, value: null },
    { index: 2, value: null },
    { index: 3, value: null },
  ],
  next: [
    {
      keys: [
        { index: 4, value: null },
        { index: 5, value: null },
        { index: 6, value: null },
      ],
      next: [null],
    },
  ],
};
export default function BTree() {
  return <Node {...NodeValue} />;
}
