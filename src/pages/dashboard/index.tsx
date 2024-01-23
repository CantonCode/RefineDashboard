import { Card, Col, Row } from "antd"
import { TestDataCard } from "../../components/dashboard/testDataCard"
import { RecentOrders } from "../../components/dashboard/recentOrders"

export const DashboardPage: React.FC = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col md={24}>
                <Row gutter={[16, 16]}>
                        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
                            <TestDataCard />
                        </Col>

                        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
                            <TestDataCard />
                        </Col>

                        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
                            <TestDataCard />
                        </Col>
                </Row>
            </Col>

            <Col xl={12} lg={24} md={24}>
            <h1 >Recent Orders</h1>
                <RecentOrders/>
            </Col>
        </Row>

        
    )
}
