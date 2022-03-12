import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
// eslint-disable-next-line max-len
import InlineStyle2ReactStyle from './pages/inlineStyle2ReactStyle/InlineStyle2ReactStyle';
import Nl2Br from './pages/nl2br/Nl2Br';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/text-tools/nl2br" element={<Nl2Br />} />
      <Route
        path="/text-tools/inlineStyle2ReactStyle"
        element={<InlineStyle2ReactStyle />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
