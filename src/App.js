import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Apps from './pages/Apps';
import Page from './pages/404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apps' element={<Apps />} />
      <Route path='*' element={<Page />} />
    </Routes>
  );
}

export default App;
