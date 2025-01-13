import { useState } from "react";
import { Drawer, Button, Box } from "@mui/material";
import ImportantDates from "../components/settings/CriticalDatesTable";

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
        Important Dates
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 600, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ImportantDates />
        </Box>
      </Drawer>
    </div>
  );
};

export default MUIDrawerExample;
