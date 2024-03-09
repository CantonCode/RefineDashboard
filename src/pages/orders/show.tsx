import { LeftOutlined, CloseCircleOutlined, ShopOutlined } from "@ant-design/icons";
import { ListButton } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Avatar, Button, Card, Col, Divider, Flex, List, Row, Skeleton, Space, Typography } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

export const OrderShow: React.FC = () => {
    const navigate = useNavigate();
    const { queryResult } = useShow({
        dataProviderName: "jsonapi",
    });
    const { data, isLoading } = queryResult;
    const record = data?.data;
    console.log(record)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ margin: '0rem' }}>
            <Flex>
                <Button icon={<LeftOutlined />} onClick={()=> navigate("/")}>Go Back</Button>
            </Flex>
            <Divider />

            <Row gutter={[16, 16]} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Flex gap={16} vertical style={{marginInline:'2rem'}}>
                        {/* <OrderProducts order={record} /> */}
                        <h3>Order#:{record?.orderNumber}</h3>
                    </Flex>
                </Col>

                <Col xl={9} lg={12} md={12} sm={18} xs={24} >
                    <Card
                        headStyle={{
                            backgroundColor: "mode === light" ? "#FAFAFA" : "#1F1F1F",
                            padding: "16px",
                        }}
                        title={
                            <Space align="center" size={8}>
                                <Typography.Text
                                    style={{
                                        fontWeight: 400,
                                    }}
                                >
                                    Delivery Details
                                </Typography.Text>
                            </Space>
                        }>

                        <Flex gap={16} style={{display:'flex',justifyContent:'center',margin:'1rem'}} >
                        <Avatar
                            size={{
                                xs: 130,
                                sm:130,
                                md:130,
                                lg: 130,
                                xl: 130,
                                xxl: 190,
                            }}
                            src={record?.products[0]?.images[0].url}
                        />
                        </Flex>

                        <Flex gap={8}>
                        
                            <Space
                                style={{
                                    width: "120px",
                                }}
                            >
                                <div>
                                    <ShopOutlined/>
                                </div>
                                <Typography.Text type="secondary">Location</Typography.Text>
                            </Space>
                            <Typography.Text>Lombok,Indonesia</Typography.Text>
                        </Flex>
                    </Card>

                </Col>
            </Row>
        </div>
    );

}