import React from "react";
import {
  Button,
  Col,
  Container,
  Grid,
  Panel,
  Row,
  Message,
  toaster,
} from "rsuite";
import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";
import GooglePlusCircleIcon from "@rsuite/icons/legacy/GooglePlusCircle";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, database } from "../misc/firebase";
import { ref, serverTimestamp, set } from "firebase/database";

const Signin = () => {
  const signInWithProvider = async (provider) => {
    try {
      const { user } = await signInWithPopup(auth, provider); // Using await directly here to get the user

      if (user.uid !== null) {
        await set(ref(database, `/profiles/${user.uid}`), {
          name: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
        });

        console.log(user);
        toaster.push(
          <Message showIcon type="success">
            Signin Successfully
          </Message>
        );
      }
    } catch (error) {
      // Handle errors
      console.error("Error signing in:", error.message);
      toaster.push(
        <Message showIcon type="error">
          Error in Signin
        </Message>
      );
    }
  };

  const onFacebookSignin = () => {
    const provider = new FacebookAuthProvider();
    signInWithProvider(provider);
  };

  const onGoogleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithProvider(provider);
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button
                  color="blue"
                  appearance="primary"
                  startIcon={<FacebookOfficialIcon />}
                  block
                  onClick={onFacebookSignin}
                >
                  SignIn with Facebook
                </Button>
                <Button
                  color="green"
                  appearance="primary"
                  startIcon={<GooglePlusCircleIcon />}
                  block
                  onClick={onGoogleSignin}
                >
                  SignIn with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
