import "./callRequest.style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Kid from "../images/55166-flying-boy.json";

const defaultSendedMessage = {
  name: "",
  lastName: "",
  email: "",
  message: "",
};

const SignUpForm = () => {
  const [sendedMessage, setSendedMessage] = useState(defaultSendedMessage);

  const onClickHandler = (e) => {
    console.log(sendedMessage);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
      console.log(sendedMessage);
    }

const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSendedMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

    return (
      <div className="request-container">
        <form
          action="mailto:mura.usa11@gmail.com"
          onSubmit={onSubmitHandler}
          className="request-form"
          method="POST"
        >
          <h1 className="request-text">
            Ask your question
            <Player
              src={Kid}
              loop
              autoplay
              style={{ height: "300px", width: "300px" }}
            />
          </h1>
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="name"
            label="Name"
            color="primary"
            focused
            placeholder="John"
            onChange={onChangeHandler}
            value={sendedMessage.name}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="lastName"
            label="Last Name"
            color="primary"
            focused
            placeholder="Smith"
            onChange={onChangeHandler}
            value={sendedMessage.lastName}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="email"
            label="Email"
            type="email"
            color="primary"
            focused
            required
            placeholder="john123@gmail.com"
            onChange={onChangeHandler}
            value={sendedMessage.email}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="message"
            fullWidth
            label="Type your Message"
            placeholder="I have a guestion, example: ..."
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.message}
          />
          <Button
            type="submit"
            sx={{
              marginBottom: "25px",
              fontSize: "2rem",
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            variant="contained"
          >
            Send
          </Button>
        </form>
      </div>
  );
};

export default SignUpForm;
