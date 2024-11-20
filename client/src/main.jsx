import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import FirebaseProvider from "./providers/FirebaseProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
      <Toaster />
    </FirebaseProvider>
  </StrictMode>
);
