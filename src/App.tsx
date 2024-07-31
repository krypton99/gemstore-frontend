import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoute from "./authenticate/PrivateRoute";
import AuthProvider from "./authenticate/AuthProvider";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route element={<PrivateRoute />}>
                  <Route path={route.path} element={<Page />} />
                </Route>
              );
            })}
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
