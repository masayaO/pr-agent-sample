import React from "react";

type Props = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ label, onClick }: Props) => {
  return <button onClick={onClick}>{label}</button>;
};
