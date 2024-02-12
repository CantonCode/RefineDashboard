import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import { ThemedTitleV2 } from "@refinedev/antd";
import { Layout, Space, Typography } from "antd";
import { gapi } from "gapi-script";
import LoginButton from "../components/login/loginButton";


// Todo: Update your Google Client ID here
const GOOGLE_CLIENT_ID =
    "291759158182-5e197e02fjl498hf85t64rq54ido4hq0.apps.googleusercontent.com";

export const Login: React.FC = () => {
    useEffect(() =>{
        function start(){
            gapi.client.init({
                clientID:GOOGLE_CLIENT_ID,
                scope:""
            })
        };
        gapi.load('client:auth2',start);
    });


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