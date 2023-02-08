import React from "react";
import { Routes, Route } from "react-router-dom";

import Result from "./Results";

export default function PageRoutes() {
  return (
    <div className="p-4">
      
      <Routes>
        <Route path="/" element={<Result />}>
          <Route index element={<Result />} />
          <Route path="news" element={<Result />} />
          <Route path="videos" element={<Result />} />
          <Route path="images" element={<Result />} />
          <Route path="search" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}
