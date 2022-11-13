import React from "react";

type Props = {
  children: any;
  color: string;
};

export default function ({ children, color }: Props) {
  return <span style={{ color }}>{children}</span>;
}
