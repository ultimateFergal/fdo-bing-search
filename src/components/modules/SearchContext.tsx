import React from "react";
import { PropsWithChildren } from "react";

export interface SearchContextType {
    searchTerm: string;
    searchResults: any[];
  }
  
// initialize with default values
export const NFTListingsContext = React.createContext<SearchContextType>({
    searchTerm: '',
    searchResults: []
  });

export function NFTListingsContextProvider(
    props: PropsWithChildren<any>
  ) {
  }