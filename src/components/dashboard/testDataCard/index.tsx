import { Title } from "@refinedev/antd"
import { Card, Col, Row, Typography } from "antd"
import { DataWrapper, Footer, Header, HeaderNumbers, NewCustomersWrapper, SubHeader } from "./styled"
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

export const TestDataCard: React.FC = () => {
    const { Text, Title } = Typography;
    return(
        <Card>
            <DataWrapper>
                <SubHeader>
                    <Text>Your Recycled Plastic</Text>
                </SubHeader>
                <Header>
                    <Title>200,000kg</Title>
                </Header>
                <div>
                    <Row gutter={[8, 8]}>
                        <Col span={12}> <Text strong>20%</Text>
                                {(20 ?? 0) > 0 ? (
                                    <CaretUpOutlined color="green" />
                                ) : (
                                    <CaretDownOutlined color="red" />
                                )}
                        </Col>
                        <Col span={12}><Text>This Month</Text></Col>
                    </Row>
                </div>
                
            </DataWrapper> 
        </Card>
    )
}