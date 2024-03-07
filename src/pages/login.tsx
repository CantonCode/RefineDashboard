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
                background: "radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%),url('https://back.3blmedia.com/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/ocean%20plastic%20nrel%20recycling.jpg?h=bc09f3d1')",
                backgroundSize: "cover",
            }}

        >

            <Card 
            style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin:'2.5rem',padding:'10%' }}>
                <Space direction="vertical" align="center">
                    <div style={{ padding: '10px',textAlign:'center' }}>
                        <img src='https://cdn-icons-png.flaticon.com/512/8044/8044414.png' height='50%' width='50%'></img>
                        <h2>Please Login below</h2>
                        
                    </div>
                    <LoginButton/>
                </Space>
            </Card>
        </Layout>
    );
};