import React from "react";
import { Button, Drawer } from "rsuite";
import DashboardIcon from "@rsuite/icons/Dashboard";
import { useMediaQuery, useModalState } from "../../misc/custom-hooks";
import Dashboard from ".";

const DashboardToggle = () => {
  const { isShow, hide, show } = useModalState();
  const isMobile = useMediaQuery("(max-width: 992px)");

  // Conditionally set the size for mobile and non-mobile devices
  const drawerSize = isMobile ? "xs" : "full";

  return (
    <div>
      <Button
        color="blue"
        appearance="primary"
        startIcon={<DashboardIcon />}
        block
        onClick={show}
      >
        Dashboard
      </Button>
      <Drawer size={drawerSize} open={isShow} onClose={hide} placement="left">
        <Dashboard />
      </Drawer>
    </div>
  );
};

export default DashboardToggle;
