
import React,{useState} from "react";
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const UpdateDoctorInfo = () => {
    const navigate = useNavigate();
    const id=localStorage.getItem("id");
    const [hospital, setHospital] = useState('');
    const [education, setEducation] = useState('');
    const onSubmit = async(e) => {
        e.preventDefault();
       
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection:"column"
        }}
      >
        <img
          src="https://res.cloudinary.com/devex/image/fetch/https://lh5.googleusercontent.com/I2vge8bi_Ah3lzlWfwCbOJUbcPFhAJ_4Qx0wwL6iE46F78A5fTg4pvH8L2ZJLMDbasM08sSES4jjfvrKdsK98hYTjBnre-S5ET57MrRIb3qG7PqaoZMi88ssjAans3xE3a_GJnGV"
          height="300px"
          width="600px"
        />
        <p style={{ fontSize: "20px" }}>
          Large, global epidemiologic datasets such as WHO Neurology Atlas have
          made strides in bringing the true burden of neurological disorders
          into public awareness. As part of the 11th revision of the
          International classification of diseases (ICD), the Disorders of the
          Nervous System chapter saw major changes in organization and content
          in line with advances in neurological science and contemporary
          clinical practice. In February 2020, the 146th Executive Board
          requested WHO to expand the scope of its technical report on epilepsy
          by adding a new section on “synergies in addressing the burden of
          epilepsy and other neurologic diseases”. In the context of Universal
          Health Coverage and the SDG 2030 agenda and in line with WHO’s
          existing mandates for brain health conditions such as autism spectrum
          disorders, epilepsy, and dementia, WHO’s brain health work is focused
          on promoting optimal brain development, cognitive health and well
          being across the life-course. The main activities involve:
          strengthening policies, service delivery, health information systems,
          technology (including but not limited to artificial intelligence,
          e-health and big data), research and innovation, especially in low-
          and middle-income countries. providing technical assistance on how to
          formulate an integrated approach to brain health conditions focused on
          promotion, prevention, treatment, care and rehabilitation, focusing on
          low- and middle-income countries; and fostering increased investment
          and inter-agency collaboration globally as well as the involvement of
          different specialties and sectors.
        </p>
      </div>
    );
}

export default UpdateDoctorInfo
