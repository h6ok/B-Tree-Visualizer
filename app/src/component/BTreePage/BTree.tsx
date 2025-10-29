import React from "react";
import { Box, Slider } from "@mui/material";
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
  const [scale, setScale] = React.useState<number | undefined>();
  return (
    <>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ height: "50px", borderBottom: 1, borderColor: "divider" }}
        >
          <Box ml={5} sx={{ width: "20%" }}>
            <Slider
              sx={{ marginTop: "20px" }}
              step={5}
              value={scale}
              min={0}
              max={100}
              onChange={(_: Event, value: number) => setScale(value)}
            />
          </Box>
        </Box>
      </Box>
      <Box
        className="box"
        sx={{ height: "500px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Node {...NodeValue} />
      </Box>
    </>
  );
}
