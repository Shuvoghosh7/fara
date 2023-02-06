import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes/Routes";

function App() {
  return (
    <div>
        <RouterProvider router={routers} />
    </div>
  );
}

export default App;
