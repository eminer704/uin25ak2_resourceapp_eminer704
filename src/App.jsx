import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/html" />} />

        <Route
          path="/html"
          element={
            <Layout title="HTML Resources">
              <Resources category="html" />
            </Layout>
          }
        />
        <Route
          path="/css"
          element={
            <Layout title="CSS Resources">
              <Resources category="css" />
            </Layout>
          }
        />
        <Route
          path="/javascript"
          element={
            <Layout title="JavaScript Resources">
              <Resources category="javascript" />
            </Layout>
          }
        />
        <Route
          path="/react"
          element={
            <Layout title="React Resources">
              <Resources category="react" />
            </Layout>
          }
        />
        <Route
          path="/sanity"
          element={
            <Layout title="Sanity Resources">
              <Resources category="headless-cms" />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
