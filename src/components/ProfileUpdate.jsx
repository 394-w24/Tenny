import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider'; // Import Slider component
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar'; // For user image
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function ProfileUpdate() {
    const navigate = useNavigate();
    const firstName = "Samantha"; 
    const tennyGreen = '#2a7646ff'; // Tenny green color code

    const [budgetRange, setBudgetRange] = useState([0, 50000]);

    const handleBudgetChange = (event, newValue) => {
        setBudgetRange(newValue);
    };

    const [footageRange, setFootageRange] = useState([0, 100000]);

    const handleFootageChange = (event, newValue) => {
        setFootageRange(newValue);
    };

    const [beds, setBeds] = React.useState('');
    const [baths, setBaths] = React.useState('');
    const [pets, setPets] = React.useState([]);

    const handlePets = (event, newPets) => {
        setPets(newPets);
    };
    //handle form submission without the backend code
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic needs to be added here
    };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: tennyGreen }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Tenny
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm" sx={{ mt: 2 }}>
                <Box sx={{ textAlign: 'left', my: 2 }}>
                    <Avatar alt="User's Picture" src="/bot.png" sx={{ width: 56, height: 56, margin: 'auto' }} />
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'black' }}>
                        {firstName}
                    </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                    <FormGroup>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Typography id="range-slider" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                                Budget (Rent)
                            </Typography>
                            <Typography sx={{ minWidth: 80, fontWeight: 'bold', fontSize: '1.25rem', marginRight: 2 }}>
                                ${budgetRange[0]} - ${budgetRange[1]}
                            </Typography>
                        </Box>
                        <Slider
                            aria-labelledby="range-slider"
                            getAriaLabel={() => 'Budget range'}
                            valueLabelDisplay="auto"
                            value = {budgetRange}
                            onChange = {handleBudgetChange}
                            min={0}
                            max={50000}
                            sx={{
                                color: tennyGreen, 
                                '& .MuiSlider-thumb': {
                                    color: tennyGreen,
                                },
                                '& .MuiSlider-track': {
                                    color: 'black', 
                                    height: 2,
                                },
                            }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Typography id="range-slider" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                                Square Footage
                            </Typography>
                            <Typography sx={{ minWidth: 80, fontWeight: 'bold', fontSize: '1.25rem', marginRight: 2 }}>
                                ${footageRange[0]} - ${footageRange[1]}
                            </Typography>
                        </Box>
                        <Slider
                            aria-labelledby="range-slider"
                            getAriaLabel={() => 'Footage range'}
                            valueLabelDisplay="auto"
                            value = {footageRange}
                            onChange = {handleFootageChange}
                            min={0}
                            max={100000}
                            sx={{
                                color: tennyGreen, 
                                '& .MuiSlider-thumb': {
                                    color: tennyGreen,
                                },
                                '& .MuiSlider-track': {
                                    color: 'black', 
                                    height: 2,
                                },
                            }}
                        />
                        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="beds-label">Beds</InputLabel>
                                <Select
                                    labelId="beds-label"
                                    id="beds"
                                    value={beds}
                                    label="Beds"
                                    onChange={e => setBeds(e.target.value)}
                                >
                                    <MenuItem value={0}>0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5+</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="baths-label">Baths</InputLabel>
                                <Select
                                    labelId="baths-label"
                                    id="baths"
                                    value={baths}
                                    label="Baths"
                                    onChange={e => setBaths(e.target.value)}
                                >
                                    <MenuItem value={0}>0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5+</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <Typography id="pets-label" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                                Pets
                            </Typography>
                            <ToggleButtonGroup
                                value={pets}
                                onChange={handlePets}
                                aria-labelledby="pets-label"
                                color="primary"
                                sx={{
                                    '.MuiToggleButtonGroup-grouped': {
                                        border: 0.5,
                                        '&.Mui-disabled': {
                                            border: 0.5,
                                        },
                                        '&.Mui-selected': {
                                            color: 'white',
                                            backgroundColor: 'black', 
                                            '&:hover': {
                                                backgroundColor: 'darkgrey',
                                            },
                                        },
                                    },
                                }}
                            >
                                <ToggleButton value="smallDogs" aria-label="small dogs">
                                    Small Dogs
                                </ToggleButton>
                                <ToggleButton value="cats" aria-label="cats">
                                    Cats
                                </ToggleButton>
                                <ToggleButton value="mediumDogs" aria-label="medium dogs">
                                    Medium Dogs
                                </ToggleButton>
                                <ToggleButton value="largeDogs" aria-label="large dogs">
                                    Large Dogs
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                        <TextField
                            label="Amenities"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                style: { fontWeight: 'bold', fontSize: '1.25rem' },
                            }}
                        />
                        <TextField
                            label="Key Words"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                style: { fontWeight: 'bold', fontSize: '1.25rem' },
                             }}
                        />
                        <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: tennyGreen }}>
                            Submit
                        </Button>
                    </FormGroup>
                </Box>
            </Container>
        </>
    );
}

export default ProfileUpdate;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { writeToDb } from '../utilities/firebase';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import FormGroup from '@mui/material/FormGroup';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container'; // For better alignment and padding

// function ProfileUpdate() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [age, setAge] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [recommendations, setRecommendations] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = {
//             email,
//             password,
//             age,
//             phoneNumber: phoneNumber || '0000000000', // Use phoneNumber or default value for formData
//             recommendations,
//         };

//         // Use a local variable for operations requiring an immediate value
//         const effectivePhoneNumber = phoneNumber || '0000000000';

//         const success = await writeToDb(`/users/${effectivePhoneNumber}`, formData);
//         if (success) {
//             localStorage.setItem('userPhoneNumber', effectivePhoneNumber);
//             navigate('/profile');
//         } else {
//             console.error('Failed to write data to Firebase');
//         }
//     };

//     return (
//         <>
//             <AppBar position="static" style={{backgroundColor: '#2a7646ff'}}>
//                 <Toolbar>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
//                         Sign Up
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Container maxWidth="sm" sx={{ mt: 2 }}>
//                 <Box component="form" sx={{ margin: '25px' }} onSubmit={handleSubmit} noValidate autoComplete="off">
//                     <FormGroup>
//                         {/* TextFields and FormControlLabel remain unchanged */}
//                         <TextField
//                             label="Email Address"
//                             variant="outlined"
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             margin="normal"
//                             fullWidth
//                         />
//                         <TextField
//                             label="Password"
//                             variant="outlined"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             margin="normal"
//                             fullWidth
//                         />
//                         <TextField
//                             label="Age"
//                             variant="outlined"
//                             type="number"
//                             value={age}
//                             onChange={(e) => setAge(e.target.value)}
//                             margin="normal"
//                             fullWidth
//                         />
//                         <TextField
//                             label="Phone Number"
//                             variant="outlined"
//                             type="tel"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             margin="normal"
//                             fullWidth
//                         />
//                         <FormControlLabel
//                             control={<Checkbox checked={recommendations} onChange={(e) => setRecommendations(e.target.checked)} />}
//                             label="Send me recommendations on email"
//                         />
//                         {/* Repeat for other fields */}
//                         <Button type="submit" variant="contained" sx={{ mt: 2 }} style={{backgroundColor: '#2a7646ff'}}>
//                             Submit
//                         </Button>
//                     </FormGroup>
//                 </Box>
//             </Container>
//         </>
//     );
// }

// export default ProfileUpdate;
