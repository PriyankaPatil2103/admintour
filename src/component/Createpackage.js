import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form} from 'react-bootstrap'
import '../AllCss/CreatePackage.css';
function Createpackage() {
    const [PackageName,setPackagename]=useState("");
    const [PackageType,setPackagetype]=useState("");
    const [PackageLocation,setPackagelocation]=useState("");
    const [PackagePrice,setPackageprice]=useState("");
    const [PackageFeatures,setPackagefeatures]=useState("");
    const [PackageDetails,setPackagedetails]=useState("");
    const [PackageImage,setPackageimg]=useState("");
    
    const addPackage=()=>{
        const pkg={
            PackageName:PackageName,
            PackageType:PackageType,
            PackageLocation:PackageLocation,
            PackagePrice:Number (PackagePrice),
            PackageFeatures:PackageFeatures,
            PackageDetails:PackageDetails,
            PackageImage:PackageImage
        };
        axios.post("http://localhost:5000/api/addpackage",pkg)
        .then((result) => {
            console.log("DATA",result.data);
            alert("Package Added Successfully");
            window.location.reload(false)
        }).catch((err) => {
            console.log(err)
        });
    }
    async function handlechangeimage(e){
        const imgData=new FormData();
        imgData.append(
            'image',
            e.target.files[0]
        );
        axios.post("http://localhost:5000/uploadfile",imgData)
        .then((res) => {
            console.log("Res:",res.data);
            setPackageimg(res.data.filepath)
            alert("Image Uploaded")
        }).catch((err) => {
            console.log("Err:",err);
        });
    }
  return (
    <div>
        <Form.Label>Create Package</Form.Label>
        <Form>
            <Container className='create-container'>
                
                <Form.Group>
                    <Form.Label>Package Name:</Form.Label>
                    <Form.Control type='text'
                    placeholder='Package Name'
                    onChange={(e)=>setPackagename(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Package Type:</Form.Label>
                    <Form.Control type='text'
                     placeholder='Package type eg-Family package'
                     onChange={(e)=>setPackagetype(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Package Location:</Form.Label>
                    <Form.Control type='text'
                    placeholder="Package location"
                    onChange={(e)=>setPackagelocation(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Package Price:</Form.Label>
                    <Form.Control type='text'
                    placeholder='Package price'
                    onChange={(e)=>setPackageprice(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Package Features:</Form.Label>
                    <Form.Control type='text'
                    placeholder='Package Features eg-free pickup-drop facility'
                    onChange={(e)=>setPackagefeatures(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Package Details:</Form.Label>
                    <Form.Control type='text'
                    placeholder='Package Details'
                    onChange={(e)=>setPackagedetails(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Package Image:</Form.Label>
                    <Form.Control type='file'
                    placeholder='Select your file'
                    onChange={handlechangeimage} 
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button onClick={()=>addPackage()}>Create</Button>
                    <Button>Reset</Button>
                </Form.Group>
            </Container>
        </Form>
    </div>
  )
}

export default Createpackage