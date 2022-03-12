import { ReactElement } from 'react';

import Custom from './pages/custom/Custom';
// eslint-disable-next-line max-len
import InlineStyle2ReactStyle from './pages/inlineStyle2ReactStyle/InlineStyle2ReactStyle';
import Nl2Br from './pages/nl2br/Nl2Br';

interface ToolConfig {
  route: string;
  title: string;
  page: ReactElement;
}

const allToolList: ToolConfig[] = [
  {
    route: 'nl2br',
    title: 'nl2br',
    page: <Nl2Br />,
  },
  {
    route: 'inlineStyle2ReactStyle',
    title: 'inlineStyle2ReactStyle',
    page: <InlineStyle2ReactStyle />,
  },
  {
    route: 'custom',
    title: 'custom',
    page: <Custom />,
  },
];

export default allToolList;
