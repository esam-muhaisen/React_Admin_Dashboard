import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Team from './Pages/MangeTeam/Team';
import Contacts from './Pages/Contacts/Contacts';
import Invouces from './Pages/Invouces/Invouces';

import Calendar from './Pages/Calendar/Calendar';
import FAQ from './Pages/FAQ/FAQ';
import Bar from './Pages/Bar/Barchart';
import Pie from './Pages/Pie/Pie';
import Line from './Pages/Line/Line';
import Geography from './Pages/Geography/Geography';
import Form from './Pages/Form/Form.jsx';
import ErrorPage from 'ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='/team' element={<Team />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/invoices' element={<Invouces />} />
      <Route path='/form' element={<Form />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/bar' element={<Bar />} />
      <Route path='/pie' element={<Pie />} />
      <Route path='/line' element={<Line />} />
      <Route path='/geography' element={<Geography />} />

    
    
      <Route path='*' element={<ErrorPage />} />
    
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
