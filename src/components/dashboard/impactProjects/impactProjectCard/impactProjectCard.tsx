import { Title } from "@refinedev/antd"
import { Card, Col, Row, Space, Tooltip, Typography } from "antd"
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

export const ImpactProjectCard: React.FC = () => {
    const { Text, Title } = Typography;
    return(
        // <Card>
        //     <Title>ImpactProject Card</Title>
        // </Card>

        <Card
        size="default"
        actions={[
          <div
            key="1"
            style={{
              width: "100%",
              height: "100px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Text size="xs">2000KG</Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Text size="xs">75% of Goal</Text>
              <Tooltip
                title="TOOTIP TITLE"
                key="THOIS IS THE KEU"
              >
                
              </Tooltip>
            </div>
          </div>,
        ]}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
         
          
          <Text
            strong
            size="md"
            ellipsis={{ tooltip: "HIIIII" }}
            style={{
              marginTop: "12px",
            }}
          >
            Impact Proejct 1
          </Text>
  
          <Space
            direction="vertical"
            size={0}
            style={{
              marginTop: "8px",
              alignItems: "center",
            }}
          >
            <Text type="secondary">Indonesia</Text>
            <Text
              strong
              size="md"
              style={{
                marginTop: "12px",
              }}
            >
              Raw Ocean Plastic Collection
              <Space>
                
            </Space>
            </Text>
            
          </Space>
        </div>
      </Card>
    )
}