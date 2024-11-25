import { BrowserRouter, Routes } from "react-router-dom";
import appRoutes from "./routes/AppRoutes"; // Import appRoutes

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{AppRoutes}</Routes>
    </BrowserRouter>
  );
};

export default App;
