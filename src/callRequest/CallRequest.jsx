import "./callRequest.style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const defaultSendedMessage = {
    name: "",
    lastName: "",
    email: "",
    message: "",
}

const SignUpForm = () => {

    const [sendedMessage, setSendedMessage] = useState(defaultSendedMessage);

    const onClickHandler = (e) => {
        console.log(sendedMessage);
    }

const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSendedMessage((prevMessage) => ({
        ...prevMessage,
        [name]: value,
    }));
    }

    return (
      <div className="container">
        <div className="request-app">
          <h1 className="request-text">Ask your question</h1>
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
            placeholder="Name"
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
            placeholder="Last Name"
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
            color="primary"
            focused
            placeholder="Email"
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
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.message}
          />
          <Button
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            variant="contained"
            onClick={onClickHandler}
          >
            Send
          </Button>
        </div>
      </div>
    );
}

export default SignUpForm;  