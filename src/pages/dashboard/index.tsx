import { Card, Col, Row } from "antd"
import { TestDataCard } from "../../components/dashboard/testDataCard"

export const DashboardPage: React.FC = () => {
    return (
        <Row gutter={[24, 16]}>
            <Col span={8} >
               <TestDataCard />
            </Col>
            <Col span={8} >
                <TestDataCard />
            </Col>
            <Col span={8} >
                <TestDataCard />
            </Col>

            {/* <Col span={12} >HI</Col>
            <Col span={12} >TEST</Col> */}
        </Row>
    )
}
