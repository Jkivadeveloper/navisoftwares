import React, { useState } from "react";
import { Card, Button, Input } from "antd";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        window.alert("Sign up successful");
      })
      .catch((error) => {
        console.log("Sign up error:", error.message);
        if (error.code === "auth/email-already-in-use") {
          window.alert("Sign up failed: Email already exists");
        } else {
          window.alert("Sign up failed: " + error.message);
        }
      });
  };

  const handleLogin = () => {
    if ((email === "navibackend@gmail.com" || email === "adminchloemall@gmail.com") && password === "navisoftware2023") {
      
      navigate('/orders');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User logged in:", user);
          setUser(user); 
          window.alert("Login successful");
          navigate('/cart'); 
        })
        .catch((error) => {
          console.log("Login error:", error.message);
          window.alert("Login failed: " + error.message);
        });
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); 
        window.alert("Sign out successful");
      })
      .catch((error) => {
        console.log("Sign out error:", error.message);
        window.alert("Sign out failed: " + error.message);
      });
  };

  return (
    <Card title="Login" style={{ margin: 20 }}>
      <Input
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        style={{ marginBottom: 10 }}
      />
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={handleSignUp} style={{ marginRight: 10 }}>
        Sign Up
      </Button>
      <Button type="primary" onClick={handleSignOut} style={{ marginRight: 10, backgroundColor: 'red' }}>
        Sign Out
      </Button>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </Card>
  );
};

export default Login;
