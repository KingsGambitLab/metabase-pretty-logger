import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@vectord/styles';

import '@vectord/styles/main.css';
import '@vectord/components/main.css';
import '@vectord/icons/main.css';

import AppRoutes from 'AppRoutes';
import DEFAULT_THEME from 'data/defaultTheme';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ThemeProvider theme={DEFAULT_THEME}>
          <RouterProvider router={AppRoutes} />
        </ThemeProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
