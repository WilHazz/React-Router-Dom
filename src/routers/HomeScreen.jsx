import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnologia</th>
            <th scope="col">Email</th>
            <th scope="col">Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Diego Martinez</th>
            <td>.Net8</td>
            <td>Diegito8@gmail.com</td>
            <td>@DiegoMartinez</td>
          </tr>
          <tr>
            <th scope="row">Mario Gonzales</th>
            <td>Springboot</td>
            <td>MarioGz@gmail.com</td>
            <td>@MarioGon</td>
          </tr>
          <tr>
            <th scope="row">{usuario.nombre}</th>
            <td>{usuario.tecnologia}</td>
            <td>{usuario.email}</td>
            <td>{usuario.redes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
