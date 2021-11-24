
import './App.css';
import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import AddPatientInfo from './Pages/AddPatientInfo';
import UpdateDoctorInfo from './Pages/UpdateDoctorInfo';
import AddDocument from './Pages/AddDocument';
import Docfile from './Pages/docfile';
function App() {
  const { Header, Content, Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <Router>
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/Aware">Awarness </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/expert">Expert Profile </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/motivation">Motivation </Link>
              </Menu.Item>
              <Menu.Item key="5">
                {" "}
                <Link to="/contact">Contact us</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>

        <Routes>
          <Route path="/contact" element={<AddDocument />} />
          <Route path="/Aware" element={<Docfile />} />
          <Route path="/expert" element={<AddPatientInfo />} />
          <Route path="/motivation" element={<UpdateDoctorInfo />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
