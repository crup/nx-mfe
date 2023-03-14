import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

const B2cHome = React.lazy(() => import('b2c-home/Module'));

const C2bHome = React.lazy(() => import('c2b-home/Module'));

const Cms = React.lazy(() => import('cms/Module'));

const Listing = React.lazy(() => import('listing/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/b2c-home">B2cHome</Link>
        </li>

        <li>
          <Link to="/c2b-home">C2bHome</Link>
        </li>

        <li>
          <Link to="/cms">Cms</Link>
        </li>

        <li>
          <Link to="/listing">Listing</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/b2c-home" element={<B2cHome />} />

        <Route path="/c2b-home" element={<C2bHome />} />

        <Route path="/cms" element={<Cms />} />

        <Route path="/listing" element={<Listing />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
