import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./compnents/Layout";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Setting";
import Support from "./Pages/Support";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
