import React from "react";
import { Button, Divider, Drawer, Message, toaster } from "rsuite";
import { useProfile } from "../../contex/profile.contex";
import { EditableInput } from "../EditableInput";
import { child, ref, set, update } from "firebase/database";
import { database } from "../../misc/firebase";

const Dashboard = ({ SignOut }) => {
  const { profile } = useProfile();

  const Save = async (newData) => {
    const userNickNameRef = ref(database, `/profiles/${profile.uid}/name`);
    try {
      await set(userNickNameRef, newData);
      toaster.push(
        <Message showIcon type="success">
          Nick name has been updated successfully
        </Message>
      );
    } catch (error) {
      <Message showIcon type="error">
        {error}
      </Message>;
    }
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
