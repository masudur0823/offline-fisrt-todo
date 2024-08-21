"use client";

import React, { createContext, useState } from "react";

const ModeContext = createContext({});

export const ModeProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);
  return (
    <ModeContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
