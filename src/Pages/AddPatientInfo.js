import React from "react";
import { Card } from "antd";
import "./Home.css";

const AddPatientInfo = () => {
 
   const { Meta } = Card;
  return (
    <>
     <h1>Expert information</h1>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "10px",
      
      }}
    >
     
      <Card
        hoverable
        style={{ width: 240, margin: "10px" }}
        cover={
          <img
            alt="example"
            src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q="
          />
        }
      >
        <Meta title="Dr Shruti Sable " description="brain Neurologists" />
      </Card>
      <Card
        hoverable
        style={{ width: 240, margin: "10px" }}
        cover={
          <img
            alt="example"
            src="https://www.cdc.gov/diabetes/images/library/spotlights/Male-doctor-smiling-portrait-close-up-Med-Res-72991363.jpg"
          />
        }
      >
        <Meta title="Dr A Venkat Reddy " description="brain Neurologists" />
      </Card>
      <Card
        hoverable
        style={{ width: 240, margin: "10px" }}
        cover={
          <img
            alt="example"
            src="https://yt3.ggpht.com/ytc/AKedOLSKtGMWDQ43_1SKX53sKoIFBotUtJqi4wL-GUTkWA=s900-c-k-c0x00ffffff-no-rj"
          />
        }
      >
        <Meta title="Dr A Jayavelu " description="brain Neurologists" />
      </Card>
    </div>
    </>
  );
};

export default AddPatientInfo;
