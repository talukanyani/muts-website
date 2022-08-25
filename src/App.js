import Home from './pages/home/Home'
import Apps from './pages/apps/Apps';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apps' element={<Apps />} />
    </Routes>
  );
}

export default App;
