import { Card, Col, Row } from "antd"
import { TestDataCard } from "../../components/dashboard/metrics/testDataCard"
import { RecentOrdersTable } from "../../components/dashboard/recentOrdersTable"
import { RecentOrdersQuickView } from "../../components/dashboard/recentOrdersQuickView"
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
            height: '100vh'
        }}>
            <Row gutter={[16, 16]} style={{ padding: '2rem' }}>
                <Col md={24}>
                    <Metrics />
                </Col>
                <Col xs={24}>
                    <h1 >Recent Orders</h1>
                </Col>
                <RecentOrders />
                <Col xs={24}>
                    <h1 >Your Impact Projects</h1>
                </Col>
                <ImpactProjects />
            </Row>
        </div>



    )
}
