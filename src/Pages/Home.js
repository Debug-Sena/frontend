import React from 'react'
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
const Home = () => {
 const navigate = useNavigate();
 const { Header, Content, Sider } = Layout;
 const { SubMenu } = Menu;

  return (
    <div>
      
        <Layout>
          <img src="https://www.who.int/images/default-source/health-topics/brain-health/ch-5-leyla-ermektar-ibe.tmb-1920v.jpg?sfvrsn=5a2564b9_2" height="400px"/>
          <p style={{fontSize:"20px"}}>
            Brain Health is an emerging and growing concept that encompasses
            neural development, plasticity, functioning, and recovery across the
            life course. Good brain health is a state in which every individual
            can realize their own abilities and optimize their cognitive,
            emotional, psychological and behavioural functioning to cope with
            life situations. Numerous interconnected social and biological
            determinants (incl. genetics) play a role in brain development and
            brain health from pre-conception through the end of life. These
            determinants influence the way our brains develop, adapt and respond
            to stress and adversity, giving way to strategies for both promotion
            and prevention across the life course. Brain health conditions
            emerge throughout the life course and are characterized by
            disruptions in normal brain growth and/or brain functioning. They
            may manifest as neurodevelopmental and neurological conditions such
            as intellectual developmental disorders, autism spectrum disorders,
            epilepsy, cerebral palsy, dementia, cerebrovascular disease,
            headache, multiple sclerosis, Parkinson’s disease, neuroinfections,
            brain tumors, traumatic injury and neurological disorders resulting
            from malnutrition. Health and social care for these conditions
            require multisectoral and interdisciplinary collaborations with a
            holistic person-centered approach focused on promotion, prevention,
            treatment, care and rehabilitation over the lifespan and the active
            engagement of persons experiencing the conditions and their families
            and carers, as appropriate
          </p>
        </Layout>
    
    </div>
  );
}

export default Home
