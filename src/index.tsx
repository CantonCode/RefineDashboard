import React from "react";
import { createRoot } from "react-dom/client";
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css' rel='stylesheet' />



import App from "./App";


const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);




root.render(
        <React.StrictMode>
            
                <App />
            
    </React.StrictMode>
);
