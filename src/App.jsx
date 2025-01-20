import { Route, Routes, useLocation } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import MerchantPage from "./pages/MerchantPage";
import AcquirerPage from "./pages/AcquirerPage";
import PaymentOptionPage from "./pages/PaymentOptionPage";
import DPMaxPage from "./pages/DPMaxPage";
import ConsumerPage from "./pages/ConsumerPage";
import SignInPage from "./pages/SignInPage";
import UserManagementPage from "./pages/UserManagementPage";

import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";

function App() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {location.pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/merchant" element={<MerchantPage />} />
        <Route path="/acquirer" element={<AcquirerPage />} />
        <Route path="/paymentoption" element={<PaymentOptionPage />} />
        <Route path="/dpmax" element={<DPMaxPage />} />
        <Route path="/consumer" element={<ConsumerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/userManagementPage" element={<UserManagementPage />} />
      </Routes>
    </div>
  );
}

export default App;
