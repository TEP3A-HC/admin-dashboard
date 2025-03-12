import { Route, Routes, useLocation } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import MerchantPage from "./pages/MerchantPage";
import AcquirerPage from "./pages/AcquirerPage";
import PaymentOptionPage from "./pages/PaymentOptionPage";
import DPMaxPage from "./pages/DPMaxPage";
import ConsumerPage from "./pages/ConsumerPage";
import SignInPage from "./pages/SignInPage";
import UserManagementPage from "./pages/UserManagementPage";
import ProtectedRoute from "./components/ProtectedRoute";

import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";

function App() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {location.pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route
          path="/overview"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "viewer"]}>
              <OverviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/merchant"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "viewer"]}>
              <MerchantPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/acquirer"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "viewer"]}>
              <AcquirerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/paymentoption"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "viewer"]}>
              <PaymentOptionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dpmax"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "viewer"]}>
              <DPMaxPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "viewer"]}>
              <ConsumerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "viewer"]}>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userManagement"
          element={
            <ProtectedRoute requiredRoles={["super_admin", "admin"]}>
              <UserManagementPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
