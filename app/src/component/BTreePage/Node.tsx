import React from "react";
import type { Node, Key } from "../../types/b-tree";
import "./BTreePage.css";

export default function Node({
  keys,
  next,
  candidate,
  compare,
  toIndex,
}: Node) {
  const nodeStyle = (i) => {
    if (candidate && !compare) {
      return "hasCandidate";
    }
    if (candidate && compare === i && !toIndex) {
      return "compare";
    }
    if (candidate && toIndex === i) {
      return "next";
    }
    return "key";
  };

  const nextStyle = (i) => {
    return {
      position: "absolute",
      top: "10rem",
      right: `${10 - 8 * i}rem`,
    };
  };

  return (
    <div className="node">
      {keys.map((key, i) => (
        <div className={`${nodeStyle(i)} key`}>
          <div>{key.index}</div>
          {next[i] && (
            <>
              <div className="path">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10rem"
                  height="10rem"
                >
                  <path
                    id={`path-${i}`}
                    d="M10 180 L10 30"
                    fill="transparent"
                    stroke="black"
                  />
                </svg>
              </div>
              <div style={nextStyle(i)}>
                <Node {...next[i]} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
