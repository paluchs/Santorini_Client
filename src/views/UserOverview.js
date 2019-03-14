import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 6px 0;
  width: 280px;
  padding: 10px;
  border-radius: 6px;
  display: table-row;
  align-items: normal;
  border: 1px solid rgba(135,135,135,0.15);
`;

const UserName = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #7ccfff;
  margin-left: 5px;
`;

const Status = styled.div`
  font-weight: lighter;
  margin-left: 5px;
  color: #373737;
`;

const General = styled.div`
  font-weight: lighter;
  margin-left: 5px;
  color: #373737;
`;


/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const UserOverview = ({ user }) => {
    return (
        <Container>
            <UserName>{user.username}</UserName>
            <General>Name: {user.name}</General>
            <Status>Status: {user.status}</Status>
            <General>Birthday: {user.birthdayDate}</General>
            <General>Creation date: {user.creationDate}</General>

        </Container>
    );
};

export default UserOverview;