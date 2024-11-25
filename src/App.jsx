import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import PageNotFound from "./components/pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* 404-sida */}
        <Route path="*" element={<PageNotFound />} /> 

      </Routes>
    </BrowserRouter>
  );
};

export default App;
