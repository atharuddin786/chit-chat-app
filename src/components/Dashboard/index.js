import React from "react";
import { Button, Drawer } from "rsuite";
import { useProfile } from "../../contex/profile.contex";

const Dashboard = ({ SignOut }) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <Button color="red" appearance="primary" block onClick={SignOut}>
          Sign Out
        </Button>
      </Drawer.Body>
    </>
  );
};

export default Dashboard;
