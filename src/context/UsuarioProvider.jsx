import React, { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

// const usuario = {
//   nombre: "William Alixandres",
//   tecnologia: "React",
//   email: "devWil@gmail.com",
//   redes: "@Developer_x",
// };

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
