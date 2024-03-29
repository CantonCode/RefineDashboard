import { Card, Col, Row } from "antd"
import { RecentOrders } from "../../components/dashboard/recentOrders"
import { ImpactProjects } from "../../components/dashboard/impactProjects"
import { useList, useMany, useOne } from "@refinedev/core"
import { Metrics } from "../../components/dashboard/metrics"

interface Metric {
    userID: string;
}

export const DashboardPage: React.FC = () => {
    return (
        <div style={{
          

        }}>
            <Row gutter={[16, 16]} >
                <Col md={24}>
                    <Metrics />
                </Col>
                <Col xs={24} style={{overflow:'clip'}} >
                    <h1 >Recent Orders</h1>
                    <RecentOrders />
                </Col>
                
                <Col xs={24}>
                    <h1 >Your Impact Projects</h1>
                    <ImpactProjects />
                </Col>
                
            </Row>
        </div>



    )
}
