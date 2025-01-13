import { useState } from "react";
import { Drawer, Button, Box } from "@mui/material";
import JobsTable from "../components/settings/JobsTable";

const MUIDrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Scheduled Jobs
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 700, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <JobsTable />
        </Box>
      </Drawer>
    </div>
  );
};

export default MUIDrawerExample;
