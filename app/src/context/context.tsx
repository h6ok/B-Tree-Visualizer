import React, { createContext } from "react";
import type { Node } from "../types/b-tree";

type BtreeState = {
  node: Node | null;
  setNode: (node: Node) => void;
  result: Node[] | null;
  setResult: (result: Node[]) => void;
};

const BtreeContext = createContext<BtreeState | null>(null);

function BtreeProvider(props: { children: React.ReactNode }) {
  const [node, setNode] = React.useState<Node | null>(null);
  const [result, setResult] = React.useState<Node[] | null>(null);

  const context: BtreeState = {
    node,
    setNode,
    result,
    setResult,
  };

  return (
    <BtreeContext.Provider value={context}>
      {props.children}
    </BtreeContext.Provider>
  );
}

export { BtreeContext, BtreeProvider };
