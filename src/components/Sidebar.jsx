import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoneyBillTransfer,
  faUserTie,
  faHandshake,
  faWallet,
  faUserSecret,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faIdeal } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Transactions Overview",
    icon: faMoneyBillTransfer,
    color: "#6366f1",
    href: "/overview",
  },
  {
    name: "Merchant",
    icon: faUserTie,
    color: "#8B5CF6",
    href: "/merchant",
  },
  { name: "Acquirer", icon: faHandshake, color: "#EC4899", href: "/acquirer" },
  {
    name: "Payment Option",
    icon: faIdeal,
    color: "#10B981",
    href: "/paymentoption",
  },
  { name: "DPMax", icon: faWallet, color: "#F59E0B", href: "/dpmax" },
  { name: "Consumer", icon: faUserSecret, color: "#3B82F6", href: "/consumer" },
  { name: "About", icon: faCircleInfo, color: "#6EE7B7", href: "/about" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whiletop={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="xl"
                  style={{ color: item.color, minWidth: 20 }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
