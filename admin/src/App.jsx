import { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppContext from './context/AppContext';

import Add from './pages/Add';
import Home from './pages/Home';
import List from './pages/List';
import Order from './pages/Order';
import DashboardLayout from './components/DashBoardLayout';
import Login from './pages/Login';

function App() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        {isLoggedIn ? (
          <Route path="/" element={<DashboardLayout />}>
            <Route path="add" element={<Add />} />
            <Route path="list" element={<List />} />
            <Route path="order" element={<Order />} />
          </Route>
        ) : (
          // Redirect to login if not logged in
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </>
  );
}

export default App;
