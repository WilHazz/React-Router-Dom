import { Navigate, Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { HomeScreen } from "./routers/HomeScreen";
import { AboutScreen } from "./routers/AboutScreen";
import { ContactScreen } from "./routers/ContactScreen";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="About" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="Contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};

export default App;
