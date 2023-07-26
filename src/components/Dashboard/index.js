import React from "react";
import { Button, Divider, Drawer } from "rsuite";
import { useProfile } from "../../contex/profile.contex";
import { EditableInput } from "../EditableInput";

const Dashboard = ({ SignOut }) => {
  const { profile } = useProfile();
  const Save = async (newData) => {
    console.log(newData);
  };
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <Divider />
        <EditableInput
          name="Nickname"
          initialValue={profile.name}
          onSave={Save}
          label={<h6 className="mb-2">Nickname</h6>}
        />
        <Button color="red" appearance="primary" block onClick={SignOut}>
          Sign Out
        </Button>
      </Drawer.Body>
    </>
  );
};

export default Dashboard;
