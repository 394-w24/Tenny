import React from 'react';
import ServiceCard from "./ServiceCard";
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './ServicePage.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const data = [
  {
      serviceName : "Alumni Connect",
      pictureUrl: "https://sites.disney.com/app/uploads/sites/57/2023/03/FinalBow_06-1024x853.png",
      serviceDescription : "Click through our list of verified alumni to get personalized guidance on anything related to life as an international student.",
  },
  {
      serviceName : "Virtual Tour Guide",
      pictureUrl: "https://i.insider.com/5e87416715ea4b25b70db86a?width=700",
      serviceDescription : "Need to tour your apartment choices remotely? \nNo problem with our virtual tour-guide, just select your desired apartment listings.",
  },
  {
      serviceName : "Neighborhood Check",
      pictureUrl: "https://www.safewise.com/app/uploads/facebook-how-safe-is-your-neighborhood.jpg",
      serviceDescription : "Want to know more about your new neighborhood? \nType in your new address and select from the list of culturally relevant neighborhood reports to learn about customs, safety, local groceries, and more!",
  },
  {
      serviceName : "Leasing Application",
      pictureUrl: "https://draperandkramer.com/wp-content/uploads/2020/08/insights-the-rental-application-process-what-to-expect-when-applying-draperandkramer_20200819_header-image.png",
      serviceDescription : "Getting stuck on the leasing application process? \nIt’s no problem with Tenny! \nClick the link to be connected with a Tenny team member who will help you.",
  },
  {
      serviceName : "Move In",
      pictureUrl: "https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/02/moving-boxes-crosscountry.jpg?fit=400%2C684&ssl=1",
      serviceDescription : "Feeling lost about the big move-in day? \nClick over to be connected with a Tenny team member who will give you personalized guidance, mover recommendations, and furniture resources.",
  },
  {
    serviceName : "Move Out",
    pictureUrl: "https://c8.alamy.com/comp/2C3FR5Y/young-family-offering-house-for-sale-and-moving-out-2C3FR5Y.jpg",
    serviceDescription : "",
  },
  {
    serviceName : "Personal Concierge",
    pictureUrl: "https://premierconcierge.net/wp-content/uploads/2021/01/Moving-a-house-with-masks-scaled.jpg",
    serviceDescription : "",
  },
  {
    serviceName : "Banking set-up assistance",
    pictureUrl: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2022/04/GettyImages-1450376769.jpg?w=889",
    serviceDescription : "",
  },

]

const ServicePage = () => {
  return (
    <>
    <div className ='center-heading'>
      <h1 style={{marginTop: '20px', marginBottom: '10px'}}>I need help with...</h1>
    </div>
    <Box sx={{ flexGrow: 1 }} style={{color: '#2a7646ff', marginBottom: '40px'}} >
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'#2a7646ff'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Tenny
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 16px' }} style={{marginBottom: '80px'}}> {/* Adjust spacing as needed */}
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={data[0].serviceName} pictureUrl={data[0].pictureUrl} serviceDescription ={data[0].serviceDescription}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={2} serviceName={data[1].serviceName} pictureUrl={data[1].pictureUrl} serviceDescription ={data[1].serviceDescription}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={3} serviceName={data[2].serviceName} pictureUrl={data[2].pictureUrl} serviceDescription ={data[2].serviceDescription}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={4} serviceName={data[3].serviceName} pictureUrl={data[3].pictureUrl} serviceDescription ={data[3].serviceDescription}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={5} serviceName={data[4].serviceName} pictureUrl={data[4].pictureUrl} serviceDescription ={data[4].serviceDescription}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={5} serviceName={data[5].serviceName} pictureUrl={data[5].pictureUrl} serviceDescription ={data[5].serviceDescription}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={5} serviceName={data[6].serviceName} pictureUrl={data[6].pictureUrl} serviceDescription ={data[6].serviceDescription}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={5} serviceName={data[7].serviceName} pictureUrl={data[7].pictureUrl} serviceDescription ={data[7].serviceDescription}/>
      </Grid>
    </Grid>
    </>
  );
}

export default ServicePage;
