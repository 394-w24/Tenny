import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDbData, writeToDb } from '../utilities/firebase'; // Ensure correct path
import { AppBar, Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, TextField, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';

function ProfilePage() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('userPhoneNumber'));
  const [profileData, setProfileData] = useState({});
  const [budgetRange, setBudgetRange] = useState([0, 50000]);
  const [footageRange, setFootageRange] = useState([0, 50000]);
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [pets, setPets] = useState([]);
  const [amenities, setAmenities] = useState('');
  const [keywords, setKeywords] = useState('');

  // tennyGreen and firstName definitions
  const tennyGreen = '#2a7646ff'; // Tenny green color code
  const firstName = profileData?.email || 'Loading...'; // Assuming 'email' is a field in profileData

  useEffect(() => {
    const fetchProfileData = async () => {
      if (phoneNumber) {
        const data = await getDbData(`/users/${phoneNumber}`);
        if (data) {
          setProfileData(data);
          // Initialize component state with fetched data
          setBudgetRange(data.budgetRange || [0, 50000]);
          setFootageRange(data.footageRange || [0, 50000]);
          setBeds(data.beds || '');
          setBaths(data.baths || '');
          setPets(data.pets || []);
          setAmenities(data.amenities || '');
          setKeywords(data.keywords || '');
        }
      }
    };
    fetchProfileData();
  }, [phoneNumber]);


  // Update change handlers to only set local state, removing async and await writeToDb calls
  const handleAmenitiesChange = (event) => {
    const value = event.target.value;
    setAmenities(value); // Directly update the amenities state
  };

  const handleKeywordsChange = (event) => {
      const value = event.target.value;
      setKeywords(value); // Directly update the keywords state
  };

  const handleBudgetChange = (event, newValue) => {
    setBudgetRange(newValue);
    // Update local state to reflect new budget range
    setProfileData(prevState => ({ ...prevState, budgetRange: newValue }));
  };

  const handleFootageChange = (event, newValue) => {
    setFootageRange(newValue);
    // Update local state to reflect new footage range
    setProfileData(prevState => ({ ...prevState, footageRange: newValue }));
  };

  const handlePetsChange = (event, newPets) => {
    setPets(newPets);
    // Update local state to reflect new pets selection
    setProfileData(prevState => ({ ...prevState, pets: newPets }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Update Firebase with the latest profile data when the form is submitted
    await writeToDb(`/users/${phoneNumber}`, {
      ...profileData,
      budgetRange,
      footageRange,
      beds,
      baths,
      pets,
      amenities,
      keywords
    });
    navigate('/profile'); // Navigate after successful submission
  };


    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#2a7646ff' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Profile Settings
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
                            <Typography id="budget-slider" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                                Budget (Rent)
                            </Typography>
                            <Typography sx={{ minWidth: 80, fontWeight: 'bold', fontSize: '1.25rem', marginRight: 2 }}>
                                ${budgetRange[0]} - ${budgetRange[1]}
                            </Typography>
                        </Box>
                        <Slider
                            aria-labelledby="budget-slider"
                            getAriaLabel={() => 'Budget range'}
                            valueLabelDisplay="auto"
                            value={budgetRange}
                            onChange={handleBudgetChange}
                            min={0}
                            max={10000}
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
                            valueLabelFormat={value => `$${value}`}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Typography id="footage-slider" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                                Square Footage
                            </Typography>
                            <Typography sx={{ minWidth: 80, fontWeight: 'bold', fontSize: '1.25rem', marginRight: 2 }}>
                                {footageRange[0]} - {footageRange[1]} sqft
                            </Typography>
                        </Box>
                        <Slider
                            aria-labelledby="footage-slider"
                            getAriaLabel={() => 'Footage range'}
                            valueLabelDisplay="auto"
                            value={footageRange}
                            onChange={handleFootageChange}
                            min={0}
                            max={10000}
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
                            valueLabelFormat={value => `${value} sqft`}
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
                                onChange={handlePetsChange}
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
                            value={amenities}
                            onChange={handleAmenitiesChange} // Use the direct state update function
                            InputLabelProps={{
                                style: { fontWeight: 'bold', fontSize: '1.25rem' },
                            }}
                        />

                        <TextField
                            label="Key Words"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={keywords}
                            onChange={handleKeywordsChange} // Use the direct state update function
                            InputLabelProps={{
                                style: { fontWeight: 'bold', fontSize: '1.25rem' },
                            }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            mt: 2, // Top margin, already exists in your code
                            backgroundColor: tennyGreen,
                            mb: 10, // Add bottom margin for space below the button
                          }}
                        >
                          Submit
                        </Button>
                    </FormGroup>
                </Box>
            </Container>
        </>
    );
}

export default ProfilePage;
