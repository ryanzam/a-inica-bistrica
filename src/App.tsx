import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Toaster } from "sonner"

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
