import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
import Player from "../../views/Player";
import { Spinner } from "../../views/design/Spinner";
import { Button } from "../../views/design/Button";
import { withRouter } from "react-router-dom";
import Profile from "../profile/Profile";



const Container = styled(BaseContainer)`
  color: #373737;
  text-align: center;
`;

const Users = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      users1: null,
        profileUser: null
    };
  }

  logout(id) {
    fetch(`${getDomain()}/login/${id}`, {
        method: "POST"
      }).catch(err => {
        console.log(err);
        alert("Something went wrong logging out: " + err);
    });
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }

  componentDidMount() {
    fetch(`${getDomain()}/users`, {
      method: "GET"
    })
        .then(response => response.json())
        .then(async users => {
          console.log(users);
          const userList1 = users._embedded.userList;

          this.setState({ users1: userList1 });
        })
        .catch(err => {
          console.log(err);
          alert("Something went wrong fetching the users: " + err);
        });
  }

  render() {
      if (this.state.profileUser !== null) {
        return <Profile user={this.state.profileUser}/>;
      }
      return (
        <Container>
          <h2>Welcome! </h2>
          <p>Click on a user to see his/her profile.</p>
          {!this.state.users1 ? (
              <Spinner />
          ) : (
              <div>
                <Users>
                  {this.state.users1.map(user => {
                    return (
                        <PlayerContainer key={user.id} onClick={() => {
                          this.setState({profileUser: user});}
                        }>
                          <Player user={user} />
                        </PlayerContainer>

                    );
                  })}
                </Users>
                <Button
                    width="100%"
                    onClick={() => {
                      this.logout(localStorage.getItem("id"));
                    }}
                >
                  Logout
                </Button>
              </div>
          )}
        </Container>
    );
  }
}

export default withRouter(Game);
