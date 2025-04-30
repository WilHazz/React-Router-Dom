import React from "react";
import { UsuarioContext } from "./UsuarioContext";

const usuario = {
  nombre: "William Alixandres",
  tecnologia: "React",
  mail: "devWil@gmail.com",
  redes: "@Developer_x",
};

export const UsuarioProvider = ({ children }) => {
  return (
    <UsuarioContext.Provider value={{ usuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
