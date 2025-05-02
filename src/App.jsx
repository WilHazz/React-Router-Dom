import { Navigate, Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { HomeScreen } from "./routers/HomeScreen";
import { AboutScreen } from "./routers/AboutScreen";
import { ContactScreen } from "./routers/ContactScreen";
import { UsuarioProvider } from "./context/UsuarioProvider";
import { LoginScreen } from "./routers/LoginScreen";

const App = () => {
  return (
    <UsuarioProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="Login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="About" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="Contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </UsuarioProvider>
  );
};

export default App;
