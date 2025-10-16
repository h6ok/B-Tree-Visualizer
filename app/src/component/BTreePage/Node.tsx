import type { Node, Key } from "../../types/b-tree";
import "./BTreePage.css";

export default function Node({
  keys,
  next,
  candidate,
  compare,
  compareAt,
  toIndex,
}: Node) {
  const nodeStyle = (i: number) => {
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

  const nextStyle = (i: number) => {
    return {
      position: "absolute",
      top: "10rem",
      right: i < 2 ? `${8 - 10 * i + 4}rem` : `${-12 * (i - 1) + 4}rem`,
    };
  };

  const pathStyle = (i: number) => {
    return {
      position: "absolute",
      top: "3rem",
      right: i < 2 ? `${-10 * i}rem` : `${-16 - 2.8 * (i - 2)}rem`,
    };
  };

  const line = (i: number) => {
    if (i < 2) {
      return `M${260 - 160 * i} 0 L0 112`;
    } else {
      return `M${70 + 160 * (i - 2)} 112 L0 0`;
    }
  };

  const hasEdge = (max: number, i: number): bool => {
    return max - 2 === i;
  };

  return (
    <div className="node">
      {keys.map((key, i) => (
        <div className={`${nodeStyle(i)} key`}>
          <div className="index">{key.index}</div>
          {compareAt === i && (
            <>
              <div className="compare-target">{compare}</div>
              <div className="triangle" />
            </>
          )}
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
          {hasEdge(next.length, i) && (
            <>
              <div style={pathStyle(i + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    id={`path-${i + 1}`}
                    d={line(i + 1)}
                    fill="transparent"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <div style={nextStyle(i + 1)}>
                <Node {...next[i + 1]} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
