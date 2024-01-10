import React from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import styles from './signup.module.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import amazonLogo from "../../Assets/images/amazonLogoBlack.png";
import {setSignedIn} from '../../Reducers/SignedInReducer'
import {setUser} from '../../Reducers/setUserReducer'

function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (username.trim() === '') {
      newErrors.username = 'Name is required';
      isValid = false;
    }

   
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
 const createNewAccount=(e)=>{
    e.preventDefault()
    if (validate()) {
      console.log('Form submitted successfully');
    }
    let user={displayName:username,email}
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(setUser(user));
    dispatch(setSignedIn(true));
    navigate('/')
  }
  return (
    <div className={styles.main}>
      <div className={styles.upperDiv}>
        <Link to="/">
          <img src={amazonLogo} alt="" className={styles.image} />
        </Link>
        <div className={styles.formDiv}>
          <Typography className={styles.heading}>Sign up</Typography>
          <form id="form" onSubmit={createNewAccount}>
            <Typography className={styles.label}>Display Name</Typography>
            <input
              id="name"
              type="text"
              maxLength="10"
              className={styles.input}
              required
              placeholder="Enter your name ( Max length is 10 characters )"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {errors.username && <p className="errorMessage">{errors.username}</p>}

            <Typography className={styles.label}>
              Email
            </Typography>
            <input
              type="email"
              id="email"
              className={styles.input}
              required
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email && <p className="errorMessage">{errors.email}</p>}

            <Typography className={styles.label}>Password</Typography>
            <input
              type="password"
              id="password"
              required
              className={styles.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password && <p className="errorMessage">{errors.password}</p>}

            <button
              type="submit"
              className={styles.submitBtn}
            >
              Create your Amazon account
            </button>
          </form>
          <Typography className={styles.conditions}>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
              target="blank"
              className={styles.link}
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
              target="blank"
              className={styles.link}
            >
              Privacy Notice
            </a>
            .
          </Typography>
        </div>
        <Divider
          className={styles.divider}
          textAlign="center"
          sx={{ borderBottomWidth: "50px" }}
        >
          Already a Member?
        </Divider>
        <Link to="/Login">
          <button className={styles.createNewAccountbutton}>Sign In</button>
        </Link>
      </div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Oops😢 an Error Occured"}</DialogTitle>
        {/* <DialogContent>
          <Typography style={{ whiteSpace: "pre-line" }}>{error}</Typography>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
      <div className={styles.lowerDiv}>
        <div className={styles.footerConditionsDiv}>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
            target="blank"
            className={styles.link}
          >
            Conditions of Use
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
            target="blank"
            className={styles.link}
          >
            Privacy Notice
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
            target="blank"
            className={styles.link}
          >
            Help
          </a>
        </div>
        <Typography className={styles.copyright}>
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </Typography>
      </div>
    </div>
  );
}

export default SignUp;
