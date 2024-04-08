import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './pages/public/PublicRouter';
import PrivateRouter from './pages/private/PrivateRouter';
import Gardien from './_helpers/Gardien';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/tresor/*" element={<Gardien><PrivateRouter /></Gardien>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
