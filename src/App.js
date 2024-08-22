import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import Team from "./pages/dashboard/team";
import Mission from "./pages/dashboard/mission";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route
                path="/"
                exact
                element={<Navigate to={"/dashboard/dashboard"} />}
              />
              <Route
                path="/dashboard/*"
                exact
                element={
                  <Layout>
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="team" element={<Team />} />
                      <Route path="mission" element={<Mission />} />
                    </Routes>
                  </Layout>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
