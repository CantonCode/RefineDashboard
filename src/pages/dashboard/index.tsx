import { Card, Col, Row } from "antd"
import { TestDataCard } from "../../components/dashboard/testDataCard"
import { RecentOrdersTable } from "../../components/dashboard/recentOrdersTable"
import { RecentOrdersQuickView } from "../../components/dashboard/recentOrdersQuickView"
import { RecentOrders } from "../../components/dashboard/recentOrders"
import { ImpactProjects } from "../../components/dashboard/impactProjects"

export const DashboardPage: React.FC = () => {
    return (
        <div style={{
            height:'100vh'}}>
            <Row gutter={[16, 16]} style={{padding:'2rem'}}>
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
            <Col xs={24}>
            <h1 >Recent Orders</h1>
            </Col>
            <RecentOrders/>

            <Col xs={24}>
            <h1 >Your Impact Projects</h1>
            </Col>

            <ImpactProjects/>


        </Row>

        </div>
        

        
    )
}
