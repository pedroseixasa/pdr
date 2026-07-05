import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Landing from "./routes/index"; // ajusta para o caminho real do teu componente Landing

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
);
