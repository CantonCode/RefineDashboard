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
                textAlign:'center',
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                background: "radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%),url('https://grist.org/wp-content/uploads/2022/09/microplastics-grist-copy.png')",
                backgroundSize: "cover",
                backgroundPosition:"center center"
            }}

        >

            <Card 
            style={{ alignItems: 'center', display: 'flex',
             justifyContent: 'center', margin:'2.5rem',padding:'10%',
             background:'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))',
             backdropFilter:'blur(10px)',
            boxShadow:'10px 10px 10px rgba(30,30,30,0.5);',
            border:'none'}}>
                <Space direction="vertical" align="center">
                    <div style={{ padding: '10px',textAlign:'center' }}>
                        <img src='https://cdn-icons-png.flaticon.com/512/8044/8044414.png' height='50%' width='50%'></img>
                        <h1 style={{color:'white'}}>Please Login below</h1>
                        
                    </div>
                    <LoginButton/>
                </Space>
            </Card>
        </Layout>
    );
};