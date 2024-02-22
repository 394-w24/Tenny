import React from 'react';
import ServiceCard from "./ServiceCard";
import Grid from '@mui/material/Grid';
import './ServicePage.css'

const data = [
  {
      serviceName : "Alumni Connect",
      pictureUrl: "https://alumni.wharton.upenn.edu/wp-content/uploads/2019/02/Untitled-1.png",
      serviceDescription : "Click through our list of verified alumni to get personalized guidance on anything related to life as an international student.",
  },
  {
      serviceName : "Virtual Tour Guide",
      pictureUrl: "https://reslife.media.uconn.edu/wp-content/uploads/sites/3384/2022/12/virtual-tour-icon.png",
      serviceDescription : "Need to tour your apartment choices remotely? \nNo problem with our virtual tour-guide, just select your desired apartment listings.",
  },
  {
      serviceName : "Neighborhood Check",
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVRZXTiWex0tHo21eZ0z54M98erYJcp0omA&usqp=CAU",
      serviceDescription : "Want to know more about your new neighborhood? \nType in your new address and select from the list of culturally relevant neighborhood reports to learn about customs, safety, local groceries, and more!",
  },
  {
      serviceName : "Leasing Application",
      pictureUrl: "https://static.thenounproject.com/png/3605911-200.png",
      serviceDescription : "Getting stuck on the leasing application process? \nIt’s no problem with Tenny! \nClick the link to be connected with a Tenny team member who will help you.",
  },
  {
      serviceName : "Move In",
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzkZQCQKf4Lc06wvPqoJnGa6-iL847pmgcg&usqp=CAU",
      serviceDescription : "Feeling lost about the big move-in day? \nClick over to be connected with a Tenny team member who will give you personalized guidance, mover recommendations, and furniture resources.",
  },
  {
    serviceName : "Move Out",
    pictureUrl: "https://static.thenounproject.com/png/1809950-200.png",
    serviceDescription : "",
  },
  {
    serviceName : "Personal Concierge",
    pictureUrl: "https://cdn4.vectorstock.com/i/1000x1000/34/83/bellboy-concierge-hotel-reception-icon-simple-vector-33563483.jpg",
    serviceDescription : "",
  },
  {
    serviceName : "Banking set-up assistance",
    pictureUrl: "https://static.vecteezy.com/system/resources/previews/020/716/209/original/flat-icon-bank-bank-icon-where-to-keep-money-illustration-of-saving-in-the-bank-free-png.png",
    serviceDescription : "",
  },
  {
    serviceName : "Utility application Assistance",
    pictureUrl: "https://cdn5.vectorstock.com/i/1000x1000/58/94/set-4-utilities-icons-in-home-symbols-power-vector-25235894.jpg",
    serviceDescription : "",
  }
]

const ServicePage = () => {
  return (
    <>
    <div className ='center-heading'>
      <h1 style={{marginTop: '20px', marginBottom: '10px'}}>Services</h1>
    </div>
    <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 16px' }}> {/* Adjust spacing as needed */}
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
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={5} serviceName={data[8].serviceName} pictureUrl={data[8].pictureUrl} serviceDescription ={data[8].serviceDescription}/>
      </Grid>
    </Grid>
    </>
  );
}

export default ServicePage;
