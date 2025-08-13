import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import UserContext from "./context/UserContext.jsx";
import ProfileContext from "./context/ProfileContext.jsx";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProfileContext>
        <UserContext>
          <App />
        </UserContext>
      </ProfileContext>

    </BrowserRouter>
  </StrictMode>
)