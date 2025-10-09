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
    return "";
  };

  const nextStyle = (i) => {
    return {
      position: "absolute",
      top: "10rem",
      right: `${10 - 8 * i}rem`,
    };
  };

  const pathStyle = (i) => {
    return {
      position: "absolute",
      top: "3rem",
      right: i < 2 ? `${-5 - 8 * i}rem` : "",
    };
  };

  const line = (i) => {
    if (i < 2) {
      return `M${180 - 128 * i} 0 L0 112`;
    } else {
      return "M100 112 L0 0";
    }
  };

  return (
    <div className="node">
      {keys.map((key, i) => (
        <div className={`${nodeStyle(i)} key`}>
          <div className="index">{key.index}</div>
          {next[i] && (
            <>
              <div style={pathStyle(i)}>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    id={`path-${i}`}
                    d={line(i)}
                    fill="transparent"
                    stroke="black"
                    strokeWidth="1"
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
