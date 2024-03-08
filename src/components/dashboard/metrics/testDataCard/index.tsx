import { Title } from "@refinedev/antd"
import { Card, Col, Row, Typography } from "antd"
import { DataWrapper, Footer, Header, HeaderNumbers, SubHeader } from "./styled"
import { CaretDownOutlined, CaretUpOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";

export const MetricDataCard: React.FC = (metric:any) => {
    const { Text, Title } = Typography;
    return(
        <Card style={{border:'1px solid black'}}>
            <DataWrapper>
                <SubHeader>
                    <Text>{metric.name}</Text>
                </SubHeader>
                {/* <Header>
                    <Title>{metric.amount}{metric.unit}</Title>
                </Header> */}
                <div>
                    <Row gutter={[8, 8]}>
                        <Col span={12} style={{alignItems:'center',display:'flex',justifyContent:'center'}}> <Header>
                    <Title>{metric.amount}{metric.unit}</Title>
                </Header>

                        </Col>
                        <Col span={12} style={{alignItems:'center',display:'flex',justifyContent:'center'}}> <img src="https://cdn-icons-png.flaticon.com/512/7757/7757799.png" width='100px'></img></Col>
                    </Row>
                </div>
                
            </DataWrapper> 
        </Card>
    )
}