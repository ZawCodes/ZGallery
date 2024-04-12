import "./reset.css";
import Header from "pages/Header";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Gallery = lazy(() => import("pages/Gallery"));

function App() {
  return (
    <>
      <Header />
      <BrowserRouter basename="/">
        <Suspense fallback={<>Loading</>}>
          <Routes>
            <Route path="/gallery/*" element={<Gallery />} />
            <Route path="" element={<Navigate to="/gallery" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
