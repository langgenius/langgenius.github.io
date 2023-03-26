import { Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './pages/home';
import Privacy from './pages/privacy';
import Service from './pages/service';
import Creators from './pages/creators';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Creators />} />
        <Route path="terms-of-service" element={<Service />} />
        <Route path="privacy-policy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default App;
