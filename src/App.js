import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Apps from './pages/Apps';
import Page from './pages/404';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apps' element={<Apps />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='*' element={<Page />} />
    </Routes>
  );
}

export default App;
