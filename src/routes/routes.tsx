import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/navbar";

// Componentes preguiçosos
const Home = lazy(() => import("../screens/Home/index"));
const Mapa = lazy(() => import("../screens/Mapa/index"));

const AnimatedRoutes = () => {
  const location = useLocation();

  const PageWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Suspense fallback={<div>Carregando...</div>}>
                  <Home />
                </Suspense>
              </PageWrapper>
            }
          />
          <Route
            path="/mapa"
            element={
              <PageWrapper>
                <Suspense fallback={<div>Carregando...</div>}>
                  <Mapa />
                </Suspense>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};

const App = () => (
  <HashRouter>
    <Navbar />
    <AnimatedRoutes />
  </HashRouter>
);

export default App;
