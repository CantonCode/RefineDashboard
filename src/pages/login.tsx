import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import { ThemedTitleV2 } from "@refinedev/antd";
import { Layout, Space, Typography } from "antd";

import LoginButton from "../components/login/loginButton";

export const Login: React.FC = () => {
     return (
        <Layout
            style={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Space direction="vertical" align="center" size="large">
                <ThemedTitleV2
                    collapsed={false}
                    wrapperStyles={{
                        fontSize: "22px",
                    }}
                />
                <LoginButton/>
                <Typography.Text type="secondary">
                    Powered by Google
                </Typography.Text>
            </Space>
        </Layout>
    );
};