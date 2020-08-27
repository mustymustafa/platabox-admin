import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/core";
import { useAuth } from "../Context/auth";
import axios from "axios";
import { adminsignin } from "../environment";
import { useHistory } from "react-router-dom";

export default function Index() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { isAuth, setisAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      history.push("/users");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setMessage("");
    const payload = {
      email,
      password,
    };
    try {
      const res = await axios.post(adminsignin, payload);
      if (res.data.token) {
        setEmail("");
        setPassword("");
        setMessage("Sign In successful");
        setLoading(false);
        setisAuth(res.data.token);
        history.push("/users");
        return true;
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      if (err.message === "Request failed with status code 401") {
        setMessage("Wrong Credentials");
      }
      console.log(err.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>{message}</p>
        <h2>LogIn </h2>

        <FormControl isRequired>
          <div>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="email-helper-text"
              placeholder="email@example.com"
              isInvalid={error}
              errorBorderColor="red.300"
            />
          </div>

          <div>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                isInvalid={error}
                errorBorderColor="red.300"
              />
              <InputRightElement width="4.5rem">
                <Button
                  variantColor="green"
                  h="1.75rem"
                  size="sm"
                  style={{ marginTop: "-15px" }}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
        </FormControl>

        <Button
          isDisabled={Loading}
          variantColor="green"
          type="submit"
          isLoading={Loading}
        >
          Log in
        </Button>
      </form>
    </div>
  );
}
