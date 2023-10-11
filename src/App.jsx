import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Options from "./Components/Options";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-700 p-4 flex flex-col justify-start items-center gap-8">
      <Header />
      <Options />
      <Outlet />
    </div>
  );
}

export default App;
