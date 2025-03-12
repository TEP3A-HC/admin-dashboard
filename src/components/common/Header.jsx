import MUIDrawer from "../../components/MUIDrawer";
import MUIDrawerImportantDates from "../../components/MUIDrawerImportantDates";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ title }) => {
  const navigate = useNavigate();

  // Sign Out function
  const handleSignOut = () => {
    Cookies.remove("auth_token"); // Remove auth token
    Cookies.remove("user_role"); // Remove user role
    console.log("User signed out, cookies removed.");

    navigate("/"); // Redirect to SignIn page
  };

  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <div className="flex gap-4">
          <MUIDrawer />
          <MUIDrawerImportantDates />
          {/* Vertical Divider */}
          <div className="h-8 w-px bg-gray-600"></div>
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
