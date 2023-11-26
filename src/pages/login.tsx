import type { NextPage } from "next";
import styles from "../styles/login.module.css";
import { useState } from "react";
import Router from "next/router";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import { authenticate } from "../services/authService";

const Login: NextPage = () => {

    // Avaiable Pages are:   Selection, Login, SignUp, CoachLogin
    const [currentPage, setCurrentPage] = useState("Selection")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);

    function changePage(page: string) {
        setCurrentPage(page)
    }

    const handleInputData = (event: any) => {
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
        if (event.target.name === "email") {
            setEmail(event.target.value);
        }
    };

    function handleLogin() {
        console.log("Logindata:", email, password)
        authenticate(email, password).then((success) => {
        if (success) {

            console.log("Authentication successful");

            const userString = localStorage.getItem('user');
            const user = userString ? JSON.parse(userString) : null;

            console.log(user.isCoach)

            if(user?.isCoach) {
                window.open("http://localhost:3001/login", "_blank");
            } else {
                Router.push("/my-account")
            }
        } else {
            console.log("Authentication failed");
            // Display an error message or take action for failed authentication
        }
        })
        .catch((error) => {
            console.error("Error during authentication:", error);
            // Handle other potential errors during the authentication process
        });

    }

    const handleClose = (event: any, reason: any) => {
        if (reason === 'clickaway') {
          return;
        }
        setError(null);
    };

    return (
        <div className={styles.page}>
            <img className={styles.image} 
                alt="Man holding baby" 
                src='/loginImage.png' 
            />
            {(currentPage === "Selection") && 
                <div className={styles.form}>
                    <img className={styles.logo} 
                        alt="Logo" 
                        src='/BetterParentLogo.png' 
                    />
                    <Button 
                        variant="contained" 
                        className={styles.button}
                        onClick={() => changePage("Login")}
                    >Anmelden</Button>
                    <Button 
                        variant="contained"
                        className={styles.button}
                        onClick={() => changePage("SignUp")}
                        >Neuen Account erstellen
                    </Button>
                    <Button 
                        variant="text"
                        className={styles.button}
                        onClick={() => window.open("http://localhost:3001/login", "_blank")}
                        >Als Coach anmelden
                    </Button>
                </div>
            }
            {(currentPage === "Login") && 
                <form className={styles.form}>
                    <img className={styles.logo} 
                        alt="Logo" 
                        src='/BetterParentLogo.png' 
                    />
                    <Typography 
                        className={styles.label}
                        variant="h5"
                        >Bei BetterParent anmelden
                    </Typography>
                    <TextField
                        className={styles.formElements}
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleInputData}
                        label="E-Mail"
                    />
                    <TextField
                        className={styles.formElements}
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleInputData}
                        label="Passwort"
                    />

                    <Button 
                        variant="contained"
                        className={styles.button}
                        onClick={() => handleLogin()}
                        >Anmelden
                    </Button>
                    <Button 
                        variant="outlined"
                        className={styles.button}
                        onClick={() => changePage("SignUp")}
                        >Neuen Account erstellen
                    </Button>
                </form>
            }
            {(currentPage === "SignUp") && 
                <form className={styles.form}>
                    <img className={styles.logo} 
                        alt="Logo" 
                        src='/BetterParentLogo.png' 
                    />
                    <Typography 
                        className={styles.label}
                        variant="h5"
                        >Neuen Account erstellen
                    </Typography>
                    <TextField
                        className={styles.formElements}
                        label="Dein Ansprechname"
                    />
                    <TextField
                        className={styles.formElements}
                        label="E-Mail"
                    />
                    <TextField
                        className={styles.formElements}
                        name="password"
                        value={password}
                        onChange={handleInputData}
                        label="Passwort"
                    />
                    <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={() => handleClose} severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
                    </Snackbar>
                    <Button 
                        variant="contained"
                        className={styles.button}
                        >Account erstellen
                    </Button>
                    <Button 
                        variant="outlined"
                        className={styles.button}
                        onClick={() => Router.push("/my-account")}
                        >Mit Google anmelden
                    </Button>
                </form>
            }
            {(currentPage === "CoachLogin") && 
                <form className={styles.form}>
                    <img className={styles.logo} 
                        alt="Logo" 
                        src='/BetterParentLogo.png' 
                    />
                    <Typography 
                        className={styles.label}
                        variant="h5"
                        >Als Coach anmelden
                    </Typography>
                    <TextField
                        className={styles.formElements}
                        label="E-Mail"
                    />
                    <TextField
                        className={styles.formElements}
                        label="Passwort"
                    />
                    <Button 
                        variant="contained"
                        className={styles.button}
                        >Anmelden
                    </Button>
                </form>
            }
        </div>
    );
};

export default Login;




