import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import allToolList from './allToolList';

function App(): JSX.Element {
  return (
    <Routes>
      {allToolList.map(({ route, page }) => (
        <Route key={route} path={`/text-tools/${route}`} element={page} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
