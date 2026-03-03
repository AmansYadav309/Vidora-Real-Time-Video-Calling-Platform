    import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Add the '2' at the end
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/Authcontex';
import { Snackbar } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setPassword("")
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            const errMsg = err.response?.data?.message || "An error occurred";
            setError(errMsg);;
        }
    }

    const images = [ 
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
        "https://images.pexels.com/photos/4064696/pexels-photo-4064696.jpeg",
        "https://images.pexels.com/photos/4144288/pexels-photo-4144288.jpeg",
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg",
        "https://images.pexels.com/photos/6147390/pexels-photo-6147390.jpeg",
        "https://images.pexels.com/photos/21405533/pexels-photo-21405533.jpeg",
        "https://images.pexels.com/photos/4443189/pexels-photo-4443189.jpeg",
        "https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg",
        "https://images.pexels.com/photos/6930263/pexels-photo-6930263.jpeg",
        "https://images.pexels.com/photos/6267023/pexels-photo-6267023.jpeg",
        "https://images.pexels.com/photos/6585963/pexels-photo-6585963.jpeg/",
        "https://images.pexels.com/photos/5970813/pexels-photo-5970813.jpeg"
    ]

const randomImage =images[Math.floor(Math.random()*images.length)];

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    size={{ xs: false, sm: 4, md: 7 }}
                    sx={{
                        backgroundImage: `url(${randomImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                       height:"100vh",
                       aspectRatio:"16 / 9"
                    }}
                />
                <Grid  size={{ xs: 12, sm: 8, md: 5 }} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>


                        <div>
                            <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
                                Sign In
                            </Button>
                            <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
                                Sign Up
                            </Button>
                        </div>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {formState === 1 ? <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Full Name"
                                name="username"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            /> : <></>}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}

                                id="password"
                            />

                            <p style={{ color: "red" }}>{error}</p>

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login " : "Register"}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar

                open={open}
                autoHideDuration={4000}
                message={message}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

            />

        </ThemeProvider>
    );
}


