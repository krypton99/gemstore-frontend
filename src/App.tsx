import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoute from "./authenticate/PrivateRoute";
import AuthProvider from "./authenticate/AuthProvider";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";
import Navbar from "./layouts/components/DashboardNavbar";
import CssBaseline from '@mui/material/CssBaseline';
const App: React.FC = () => {
  const [theme, colorMode] = useMode();

  return (
    <Router>
      <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme = {theme}>
        <CssBaseline/>
          <div className="App">
            <AuthProvider>
              <Routes>
                {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  const Layout = route.layout;
                  return (
                    Layout 
                    ? 
                    <Route key={index} path={route.path} element={<Layout><Page /></Layout>} /> 
                    :
                    <Route key={index} path={route.path} element={<Page />} />
                  );
                })}
                {privateRoutes.map((route, index) => {
                  const Page = route.component;
                  const Layout = route.layout;
                  return (
                    Layout 
                    ? 
                    <Route element={<PrivateRoute />}>
                        <Route path={route.path} element={<Layout><Page /></Layout>} />
                    </Route>
                    :
                    <Route element={<PrivateRoute />}>
                      <Route path={route.path} element={<Page />} />
                    </Route>
                  );
                })}
              </Routes>
            </AuthProvider>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
};

export default App;
