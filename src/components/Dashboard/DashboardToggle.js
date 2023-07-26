import React, { useCallback } from "react";
import { Button, Drawer, Message, toaster } from "rsuite";
import DashboardIcon from "@rsuite/icons/Dashboard";
import { useMediaQuery, useModalState } from "../../misc/custom-hooks";
import Dashboard from ".";
import { signOut } from "firebase/auth";
import { auth } from "../../misc/firebase";

const DashboardToggle = () => {
  const { isShow, hide, show } = useModalState();
  const isMobile = useMediaQuery("(max-width: 992px)");

  // Conditionally set the size for mobile and non-mobile devices
  const drawerSize = isMobile ? "xs" : "md";
  const onSignOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        toaster.push(
          <Message showIcon type="info">
            Sign out successfully
          </Message>
        );
      })
      .catch((error) => {
        console.log(error);
        toaster.push(
          <Message showIcon type="error">
            {error}
          </Message>
        );
      });

    hide();
  }, [hide]);
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
        <Dashboard SignOut={onSignOut} />
      </Drawer>
    </div>
  );
};

export default DashboardToggle;
