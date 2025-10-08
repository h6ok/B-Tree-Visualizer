import React from "react";
import type { Node, Key } from "../../types/b-tree";
import "./BTreePage.css";

export default function Node({ keys, next }: Node) {
  return (
    <div className="node">
      {keys.map((key, i) => (
        <>
          <div className="key">{key.index}</div>
          {next[i] && (
            <div className="next">
              <Node {...next[i]} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
