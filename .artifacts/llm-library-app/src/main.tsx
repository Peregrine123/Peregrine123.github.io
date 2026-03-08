import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("llm-library-root");

if (container) {
  const dataUrl = container.getAttribute("data-source") ?? "/assets/json/llm-library-data.json";

  createRoot(container).render(
    <StrictMode>
      <App dataUrl={dataUrl} />
    </StrictMode>
  );
}
