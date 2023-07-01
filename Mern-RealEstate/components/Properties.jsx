import React,{useState,useEffect} from "react";
import axios from "axios";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  


const properties = () => {

    const [properties, setProperties] = useState([]);


    useEffect(() => {

        const fetchProperties = async () => {
    
            const res = await axios.get('http://localhost:5090/properties');
            console.log(res);
            setProperties(res.data)
            
    
        };
        fetchProperties();
    }, []);

    console.log(properties)

    return(
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}> 
            {properties.map(property => (
                <MDBCard key={property.id}  style={{width:"max-content", display:"flex", flexDirection:"row", maxWidth:"500px", margin:"10px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                    
                        <p></p>
                        
                        <MDBCardImage  src={property.image} width={"250px"} />
                        
                        <MDBCardBody>
                                <MDBCardTitle>{property.title}</MDBCardTitle>
                                <MDBCardTitle>{property.owner}</MDBCardTitle>
                                <MDBCardTitle>Price:{property.price}</MDBCardTitle>
                                <MDBCardTitle>Rooms:{property.bedrooms}</MDBCardTitle>
                                <MDBBtn href='#'>See More</MDBBtn>
                        </MDBCardBody>
                    
                </MDBCard>
            ))}
        </div>
    )
};





export default properties