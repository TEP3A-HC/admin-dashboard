import Header from "../components/common/Header";
import { motion } from "framer-motion";
import DefaultAccordion from "../components/settings/DefaultAccordion";

const AboutPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="About" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className=" py-6 px-4 ">
          <DefaultAccordion />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
