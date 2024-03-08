import { LeftOutlined, CloseCircleOutlined, ShopOutlined } from "@ant-design/icons";
import { ListButton } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Button, Card, Col, Divider, Flex, List, Row, Skeleton, Space, Typography } from "antd";

export const OrderShow: React.FC = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;
    console.log(record)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ margin: '0rem' }}>
            <Flex>
                <ListButton icon={<LeftOutlined />}>Go Back</ListButton>
            </Flex>
            <Divider />

            <Row gutter={[16, 16]} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Flex gap={16} vertical style={{marginInline:'2rem'}}>
                        {/* <OrderProducts order={record} /> */}
                        <h3>Order#:{record?.orderNumber}</h3>
                    </Flex>
                </Col>

                <Col xl={9} lg={24} md={24} sm={24} xs={24} >
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