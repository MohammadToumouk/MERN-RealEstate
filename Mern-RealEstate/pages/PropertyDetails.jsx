import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';



const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState([]);

    useEffect(() => {

        const fetchProperty = async() => {

            const res = await axios.get(`http://localhost:5090/properties/${id}`);
            setProperty(res.data);
            
        };
        fetchProperty();
    }, [id]);
    console.log(property);
    return(
        <>
         <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
         <MDBCard  style={{width:"max-content", display:"flex", flexDirection:"row", maxWidth:"500px", margin:"10px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}> 
        <MDBCardImage  src={property.image} width={"250px"} />
                    
            <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardTitle>{property.owner}</MDBCardTitle>
                <MDBCardTitle>Price:{property.price}</MDBCardTitle>
                <MDBCardTitle>Rooms:{property.bedrooms}</MDBCardTitle>
                
                
            </MDBCardBody>

            </MDBCard>
            </div>
        </>

    )

}

export default PropertyDetails;