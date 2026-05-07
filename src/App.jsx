import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import StaticBackground from './components/StaticBackground';
import ScrollToTop from './components/ScrollToTop';

const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));

/** Redirect from old /service/:id to new /services/:id URL structure */
function ServiceRedirect() {
  const { id } = useParams();
  return <Navigate to={`/services/${id}`} replace />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StaticBackground />
      <SmoothScroll>
        <div className="page-container">
          <Navbar />
          <React.Suspense fallback={<div style={{ height: '100vh', backgroundColor: '#000' }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Clean URL structure: /services/website-development */}
              <Route path="/services/:id" element={<ServicePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              {/* Redirect old /service/:id URLs to /services/:id for SEO */}
              <Route path="/service/:id" element={<ServiceRedirect />} />
            </Routes>
          </React.Suspense>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
