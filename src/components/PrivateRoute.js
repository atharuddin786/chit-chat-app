// Assuming you have a ProfileContextProvider that wraps the application or relevant parts.
// Make sure the ProfileContextProvider provides the 'profile' and 'isLoading' values correctly.

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useProfile } from "../contex/profile.contex";
import { Container, Loader } from "rsuite";

const PrivateRoute = ({ children, ...routeprops }) => {
  const { profile, isLoading } = useProfile();
  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }
  if (!profile && !isLoading) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeprops}>{children}</Route>;
};

export default PrivateRoute;
