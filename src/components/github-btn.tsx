import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components"
import { auth } from "../firevase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider; // 제공자
      await signInWithPopup(auth, provider); //signInWithRedirect 이것도 가능
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button onClick={onClick}>
      <Logo src="github-logo.svg" />
      Continue with Github
    </Button>
  );
}