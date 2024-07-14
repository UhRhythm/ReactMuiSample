import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Typography } from "@mui/material";
const Star = ({ selected = false, onSelect = (f: any) => f }) => (
  <FaStar color={selected ? "#FF0000" : "#000000"} onClick={onSelect} />
);
export default function StarRaitng({ totalStars = 15 }) {
  const [selectedStars, selected] = useState(3);
  return (
    <>
      <Typography variant="h1">STAR</Typography>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => selected(i + 1)}
        />
      ))}{" "}
      <p>Selectef stars of {totalStars} stars</p>
    </>
  );
}
