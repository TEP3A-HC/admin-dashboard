import MUIDrawer from "../../components/MUIDrawer";
import MUIDrawerImportantDates from "../../components/MUIDrawerImportantDates";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <div className="flex gap-4">
          <MUIDrawer />
          <MUIDrawerImportantDates />
        </div>
      </div>
    </header>
  );
};

export default Header;
