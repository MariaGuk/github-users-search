import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { Routes, Route } from 'react-router-dom';

import { ROUTEPATHS } from 'constants/routes';

import MainPageContainer from "pages/MainPage/MainPageContainer";
import PageNotFound from "pages/PageNotFound/PageNotFoundContainer"
import Layout from 'components/Layout';
import AppContext from "AppContext";

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <AppContext>
          <Layout />
          <Routes>
            <Route path={ROUTEPATHS.mainPage} element={<MainPageContainer />} />
            <Route path={ROUTEPATHS.notFound} element={<PageNotFound />} />
          </Routes>
        </AppContext>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export { App, client }
