import React from "react";
import { Button, Drawer } from "rsuite";
import DashboardIcon from "@rsuite/icons/Dashboard";
import { useModalState } from "../../misc/custom-hooks";
import Dashboard from ".";
const DashboardToggle = () => {
  const { isShow, hide, show } = useModalState();
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
      <Drawer onOpen={isShow} onClose={hide} placement="left">
        <Dashboard />
      </Drawer>
    </div>
  );
};

export default DashboardToggle;
