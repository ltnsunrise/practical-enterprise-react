import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { useTranslation } from 'react-i18next';
import NavigationBar from './components/navigation-bar';
import RootRoutes from './routes';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <NavigationBar />
      <RootRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
