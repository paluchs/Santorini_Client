import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { Button } from "../../views/design/Button";
import { withRouter } from "react-router-dom";
import UserOverview from "../../views/UserOverview";

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Users = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Title = styled.h2`
  color: black;
`;



const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6px 0;
  width: 280px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid rgba(135,135,135,0.15);
`;

const Information = styled.div`
  font-weight: bold;
  color: #7ccfff;
  margin-left: 5px;
`;

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
        };
    }

    editButton() {
        if (localStorage.getItem("token") === this.props.user.token) {
            return (
                <ButtonContainer>
                    <Button
                        width="50%"
                        onClick={() => {
                            this.edit();
                        }}
                    >
                        Edit profile
                    </Button>
                </ButtonContainer>
            )
        }
    }

    edit() {
        this.props.history.push("/edit");
    }

    back() {
        this.props.history.push("/game")
    }

    render() {
        return (
            <Container>
                <UserOverview user={this.props.user} />
                {this.editButton()}
                <ButtonContainer>
                <Button
                    width="50%"
                    onClick={() => {
                        this.back();
                    }}
                >
                    Back to profiles
                </Button>
                </ButtonContainer>
            </Container>
        );
    }
}

export default withRouter(Profile);
