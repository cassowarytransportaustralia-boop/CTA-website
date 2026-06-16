import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import NexusHome from "@/pages/NexusHome";

function App() {
  return (
    <div className="App" data-testid="nexus-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NexusHome />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: 0,
            border: "1px solid #0b3b24",
            background: "#0b3b24",
            color: "#fff",
            fontFamily: "IBM Plex Sans, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
