import React from "react";

type Props = {
  children: any;
  color: string;
};

const LatticsColors = [
  {
    name: "Black",
    value: "#1D1D1F",
  },
  {
    name: "Grey",
    value: "#6E6E73",
  },
  {
    name: "Light Grey",
    value: "#ACACB4",
  },
  {
    name: "Deep Blue",
    value: "#283592",
  },
  {
    name: "Blue",
    value: "#0066CC",
  },
  {
    name: "Green",
    value: "#00AB44",
  },
  {
    name: "Mars Green",
    value: "#00918B",
  },
  {
    name: "Dark Green",
    value: "#38571A",
  },
  {
    name: "Orange",
    value: "#F46524",
  },
  {
    name: "Brown",
    value: "#864D01",
  },
  {
    name: "Purple",
    value: "#6D64E8",
  },
  {
    name: "Red",
    value: "#D81E00",
  },
];

export default function ({ children, color }: Props) {
  const fontColor =
    LatticsColors.find((item) => item.name === color)?.value || color;
  return <span style={{ color: fontColor }}>{children}</span>;
}
