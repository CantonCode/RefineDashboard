import { Title } from "@refinedev/antd"
import { Card, Typography } from "antd"
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
                    <Title>Test Data Metric</Title>
                </Header>
                <Footer>
                <HeaderNumbers>
                        <Text strong>200,000kg</Text>
                        <div>
                                <Text strong>20%</Text>
                                {(20 ?? 0) > 0 ? (
                                    <CaretUpOutlined color="green" />
                                ) : (
                                    <CaretDownOutlined color="red" />
                                )}
                            </div>
                    </HeaderNumbers>
                </Footer>
                
                
            </DataWrapper> 
        </Card>
    )
}