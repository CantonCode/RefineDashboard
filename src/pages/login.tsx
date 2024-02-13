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

            <Card style={{ height: '40vh', width: '40vw', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <Space direction="vertical" align="center" size="large">
                    <div style={{ padding: '10px' }}>
                        <h1>Honest Ocean</h1>
                    </div>
                    <LoginButton />
                </Space>
            </Card>
        </Layout>
    );
};