import { getDbData } from "./firebase"

export const search_zillow_properties_on_location = async (rapidApiKey, location) => {

    var properties = ""

    await fetch(`https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${encodeURI(location)}`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': "zillow-com1.p.rapidapi.com"
        }
    }).then((data) => data.json())
    .then((data) => {
        console.log(data);

        data.props.map((prop, idx) => {
            properties += "Property #"+ idx +" has zpid: "+ prop.zpid + " and " + prop.bathrooms + " bathrooms with a zestimate of " + prop.zestimate + " "
        });
    });

    return properties;
}