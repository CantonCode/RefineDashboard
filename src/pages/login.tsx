import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";
import { Image } from 'antd'

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
            }}
        >
            <Row style={{ height: "100vh", width: "100%" }}>
                <Col xs={24} md={12} style={{
                    backgroundColor: 'white', justifyContent: "center",
                    alignItems: "center", display: "flex",
                }}>
                    <Space direction="vertical" align="center" size="large">
                        <ThemedTitleV2
                            collapsed={false}
                            wrapperStyles={{
                                fontSize: "22px",
                            }}
                        />
                        <LoginButton />
                        <Typography.Text type="secondary">
                            Powered by Google
                        </Typography.Text>
                    </Space>
                </Col>
                <Col xs={24} md={12} style={{
                    backgroundColor: 'grey', justifyContent: "center",
                    alignItems: "center", display: "flex",maxHeight:"100vh"
                }}>
                    <Image
                        height={"100%"}
                        width={"100%"}
                        preview={false}
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6aaaec53477169.59361e6b65315.jpg"
                    />
                </Col>
            </Row>

        </Layout>
    );
};