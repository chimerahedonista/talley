import React from "react";

export const DataContext = React.createContext([]);

export interface Props {
  data: any;
  children: React.ReactNode;
}

export const DataContextProvider = (props: Props) => {
  const { data } = props;
  return <DataContext.Provider value={data}>{props.children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return React.useContext(DataContext);
};
