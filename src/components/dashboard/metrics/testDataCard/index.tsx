import { Title } from "@refinedev/antd"
import { Card, Col, Row, Typography } from "antd"
import { DataWrapper, Footer, Header, HeaderNumbers, SubHeader } from "./styled"
import { CaretDownOutlined, CaretUpOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";

export const MetricDataCard: React.FC = (metric:any) => {
    const { Text, Title } = Typography;
    const iconImage = metric.image;
    console.log(iconImage)
    return(
        <Card style={{border:'1px solid black'}}>
            <DataWrapper style={{margin:'0.5rem'}}>
                <SubHeader>
                    <h4>{metric.name}</h4>
                </SubHeader>
                {/* <Header>
                    <Title>{metric.amount}{metric.unit}</Title>
                </Header> */}
                <div>
                    <Row gutter={[8, 8]}>
                        <Col span={12} style={{alignItems:'center',display:'flex'}}> <Header>
                    <Title>{metric.amount}{metric.unit}</Title>
                </Header>

                        </Col>
                        <Col span={12} style={{alignItems:'center',display:'flex',justifyContent:'center'}}> <img src={iconImage} width='100px' ></img></Col>
                    </Row>
                </div>
                
            </DataWrapper> 
        </Card>
    )
}