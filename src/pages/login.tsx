import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";
import { Card, Image } from 'antd'

import { ThemedTitleV2 } from "@refinedev/antd";
import { Col, Layout, Row, Space, Typography } from "antd";

import LoginButton from "../components/login/loginButton";

export const Login: React.FC = () => {
    return (
        
        <Layout
            style={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                background:"radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%),url('https://back.3blmedia.com/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/ocean%20plastic%20nrel%20recycling.jpg?h=bc09f3d1')",
                backgroundSize: "cover",
            }}
            
        >
            
            <Card style={{height:'40vh',width:'40vw',alignItems:'center',display:'flex',justifyContent:'center'}}>
            <Space direction="vertical" align="center" size="large">
                <div style={{padding:'10px'}}>
                   <h1>Honest Ocean</h1> 
                </div>
                <LoginButton/>
                {/* <Typography.Text type="secondary">
                    Powered by Google
                </Typography.Text> */}
            </Space>
            
            </Card>
            
        </Layout>
        
        // <Layout
        //     style={{
        //         height: "100vh",
        //         justifyContent: "center",
        //         alignItems: "center",
        //     }}
        // >
        //     <Row style={{ height: "100vh", width: "100%" }}>
        //         <Col xs={24} md={12} style={{
        //             backgroundColor: 'white', justifyContent: "center",
        //             alignItems: "center", display: "flex",
        //         }}>
        //             <Space direction="vertical" align="center" size="large">
        //                 <ThemedTitleV2
        //                     collapsed={false}
        //                     wrapperStyles={{
        //                         fontSize: "22px",
        //                     }}
        //                 />
        //                 <LoginButton />
        //                 <Typography.Text type="secondary">
        //                     Powered by Google
        //                 </Typography.Text>
        //             </Space>
        //         </Col>
        //         <Col xs={24} md={12} style={{
        //             backgroundColor: 'grey', justifyContent: "center",
        //             alignItems: "center", display: "flex",maxHeight:"100vh"
        //         }}>
        //             <Image
        //                 height={"100%"}
        //                 width={"100%"}
        //                 preview={false}
        //                 src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6aaaec53477169.59361e6b65315.jpg"
        //             />
        //         </Col>
        //     </Row>

        // </Layout>
    );
};