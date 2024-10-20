import React from "react";

type Props = {
  title: string;
};

export const PageTitle = ({ title }: Props): React.JSX.Element => {
  return <h1>{title}</h1>;
};
