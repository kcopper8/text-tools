import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Nl2Br from './pages/nl2br/Nl2Br';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nl2br" element={<Nl2Br />} />
    </Routes>
  );
}

export default App;
