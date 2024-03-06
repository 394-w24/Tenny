import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { writeToDb } from '../utilities/firebase';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; // For better alignment and padding

function ProfileUpdate() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [recommendations, setRecommendations] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            email,
            password,
            age,
            phoneNumber: phoneNumber || '0000000000', // Use phoneNumber or default value for formData
            recommendations,
        };

        // Use a local variable for operations requiring an immediate value
        const effectivePhoneNumber = phoneNumber || '0000000000';

        const success = await writeToDb(`/users/${effectivePhoneNumber}`, formData);
        if (success) {
            localStorage.setItem('userPhoneNumber', effectivePhoneNumber);
            navigate('/profile');
        } else {
            console.error('Failed to write data to Firebase');
        }
    };

    return (
        <>
            <Container maxWidth="sm" sx={{ mt: 2 }}>
                <Box component="form" sx={{ margin: '25px' }} onSubmit={handleSubmit} noValidate autoComplete="off">
                    <FormGroup>
                        {/* TextFields and FormControlLabel remain unchanged */}
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Age"
                            variant="outlined"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            margin="normal"
                            fullWidth
                        />
                        <FormControlLabel
                            control={<Checkbox checked={recommendations} onChange={(e) => setRecommendations(e.target.checked)} />}
                            label="Send me recommendations on email"
                        />
                        {/* Repeat for other fields */}
                        <Button type="submit" variant="contained" sx={{ mt: 2 }} style={{backgroundColor: '#2a7646ff'}}>
                            Submit
                        </Button>
                    </FormGroup>
                </Box>
            </Container>
        </>
    );
}

export default ProfileUpdate;
