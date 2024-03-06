import React from "react";
import { createRoot } from "react-dom/client";
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css' rel='stylesheet' />
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);




root.render(
        <React.StrictMode>
            <GoogleOAuthProvider clientId={"291759158182-5e197e02fjl498hf85t64rq54ido4hq0.apps.googleusercontent.com"}>
                
                    <App />
               
            </GoogleOAuthProvider>        
    </React.StrictMode>
);
