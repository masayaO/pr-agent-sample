import React from "react";

type Props = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ label, onClick }: Props) => {
  return <button onClick={onClick}>{label}</button>;
};
