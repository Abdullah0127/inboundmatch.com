import { BrowserRouter } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}
