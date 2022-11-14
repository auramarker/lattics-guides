import React from "react";

type Props = {
  children: any;
  color: string;
};

const LatticsColors = [
  {
    name: "Yellow",
    value: "rgba(255, 195, 0, 0.2)",
  },
  {
    name: "Red",
    value: "rgba(255, 90, 90, 0.18)",
  },
  {
    name: "Purple",
    value: "rgba(166, 125, 255, 0.15)",
  },
  {
    name: "Green",
    value: "rgba(158, 255, 0, 0.2)",
  },
  {
    name: "Blue",
    value: "rgba(52, 226, 216, 0.2)",
  },
  {
    name: "Orange",
    value: "rgba(255, 154, 61, 0.15)",
  },
  {
    name: "Grey",
    value: "rgba(135, 135, 135, 0.2)",
  },
];

export default function ({ children, color }: Props) {
  const bgColor =
    LatticsColors.find((item) => item.name === color)?.value || color;
  return <span style={{ backgroundColor: bgColor }}>{children}</span>;
}
