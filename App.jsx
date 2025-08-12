import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { css, createGlobalStyle } from "@acab/ecsstatic";

createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    overflow: hidden;
    background: linear-gradient(90deg, #b993d6, #8ca6db);
  }
  @keyframes up_and_down {
    0%, 100% {
      transform: translateZ(-100px);
    }
    50% {
      transform: translateZ(100px);
    }
  }
`;

const containerLoader = css`
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(60deg);
  @media (width <= 1111px) {
    zoom: 0.7;
  }
`;

const aro = css`
  position: absolute;
  inset: calc(var(--s) * 10px);
  border: 3px solid white;
  border-radius: 50%;
  animation: up_and_down 3s infinite ease-in-out both;
  animation-delay: calc(var(--s) * -0.1s);
`;

function App() {
  return (
    <aside className={containerLoader}>
      {Array.from({ length: 15 }, (_, i) => (
        <div key={i} className={aro} style={{ "--s": i }} />
      ))}
    </aside>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
