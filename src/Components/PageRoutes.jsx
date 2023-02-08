import React from "react";
import { Routes, Route } from "react-router-dom";

import  { Results } from  './Results';

export default function PageRoutes() {
  return (
    <div className="p-4">
      
      <Routes>
        <Route path="/" element={<Results />}>
          <Route index element={<Results />} />
          <Route path="news" element={<Results />} />
          <Route path="videos" element={<Results />} />
          <Route path="images" element={<Results />} />
          <Route path="search" element={<Results />} />
        </Route>
      </Routes>
    </div>
  );
}
