import Home from './pages/Home'
import Apps from './pages/Apps';
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
