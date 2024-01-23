import { Col, Row } from "antd"

export const DashboardPage: React.FC = () => {
    return (
        <Row gutter={[24, 16]}>
            <Col span={8} >HI</Col>
            <Col span={8} >TEST</Col>
            <Col span={8} >TEST1</Col>

            {/* <Col span={12} >HI</Col>
            <Col span={12} >TEST</Col> */}
        </Row>
    )
}
