import "./reset.css";
import GlobalStates from "globalStates";
import Header from "pages/Header";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Gallery = lazy(() => import("pages/Gallery"));

function App() {
  return (
    <>
      <GlobalStates>
        <Header />
        <BrowserRouter basename="/">
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/gallery/*" element={<Gallery />} />
              <Route path="" element={<Navigate to="/gallery" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </GlobalStates>
    </>
  );
}

export default App;
