import React,{useState} from "react";
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const AddDocument = () => {
   const [fileList, setFileList] = useState(undefined);
   
   const [name,setName] = useState("");
   const [doctor,setDoctor] = useState("");
   const [date,setDate] = useState("");
   const userId=window.location.href.split("/")[4];
       const navigate = useNavigate();
    const onSubmit = async(e) => {
        e.preventDefault();
      console.log(name,doctor,date)
        
    }
    
    return (
      <div>
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Contact us"
            
          ></PageHeader>
        </div>
        <form onSubmit={onSubmit} class="form__sign-in">
          <h2 class="form__title">Contact us</h2>
          <div class="form__input-field">
            <i class="fas fa-file"></i>
            <input type="text" placeholder="Your Name" onChange={e=>{setName(e.target.value)}} required />
          </div>
          <div class="form__input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Doctor Name" onChange={e=>{setDoctor(e.target.value)}} required />
          </div>
          <div class="form__input-field">
            <i class="fa fa-calendar"></i>
            <input type="text" placeholder="Date" onChange={e=>{setDate(e.target.value)}} required />
          </div>
         
          <input class="form__submit" type="submit" value="Send" />
        </form>
      </div>
    );
};

export default AddDocument;
