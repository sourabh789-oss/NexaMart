import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import UserContext from "./context/UserContext.jsx";
import ProfileContext from "./context/ProfileContext.jsx";
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
   defaultOptions:{
     queries:{
       refetchOnWindowFocus:false,//prevents unnecessary api calls when user switches tabs
       retry:1,//retry one time on error when data fetch of any api 

     }
   }
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
          <QueryClientProvider client={queryClient}>
      <ProfileContext>
        <UserContext>
            <App />
        </UserContext>
      </ProfileContext>
          </QueryClientProvider>

    </BrowserRouter>
  </StrictMode>
)