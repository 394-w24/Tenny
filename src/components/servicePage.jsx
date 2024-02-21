import ServiceCard from "./ServiceCard.jsx";
import { Link } from "react-router-dom";
import "./ServicePage.css";

const ServicePage = () =>{
    
    return (
        <div>
            <div className="serviceCardList">
                <ServiceCard serviceId = {1} serviceName = "Fix the Faucet" pictureUrl = "https://media.istockphoto.com/id/970156662/photo/repairing-a-faucet.jpg?s=612x612&w=0&k=20&c=7WXMG0FS1IUuq8eKTTqKkmIkwujPM9pDGombmP71_EE="/>
                <ServiceCard serviceId = {2} serviceName = "Virtual Tour guide" pictureUrl = "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-02/woman%20using%20vr%20headset%20for%20virtual%20tourism.jpg?h=140710cd&itok=ucZbNBiP"/>
                <ServiceCard serviceId = {3} serviceName = "Leasing application assistance" pictureUrl = "https://files.consumerfinance.gov/f/images/rental_assistance.width-800.jpg"/>
                <ServiceCard serviceId = {4} serviceName = "Move in assistance" pictureUrl = "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Low%20Income%20Moving%20Assistance/low-income-moving-assistance-hero.jpg"/>
                <ServiceCard serviceId = {5} serviceName = "Neighborhood watchout" pictureUrl = "https://static.wikia.nocookie.net/firemansam/images/9/98/N.W.TitleCard.jpeg/revision/latest?cb=20160902203143"/>
            </div>
        </div>
    );
    
}

export default ServicePage;