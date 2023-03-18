import React from 'react';
import About from './components/About';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Main from './components/Main';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </React.Fragment>
  )
);

const App = () => {
  
    return <RouterProvider router={router} />;
}

export default App;
