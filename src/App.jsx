import { BrowserRouter, Route, Routes } from "react-router-dom";

import MultiPlayerHeader from "./Components/MultiPlayerHeader";
import Test from "./Components/Test";
import TypingHome from "./Components/TypingHome";
import Abouts from "./Components/Abouts";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>

      <BrowserRouter>
      
        <TypingHome />
        <Routes>
          <Route path="/abouts" element={<Abouts />} />
<Route path="/ContactUs" element={<ContactUs />} />

          <Route index element={<MultiPlayerHeader />} />
          
          <Route
            path="/fast_fingers/:id"
            element={
              <>
                <Test />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
