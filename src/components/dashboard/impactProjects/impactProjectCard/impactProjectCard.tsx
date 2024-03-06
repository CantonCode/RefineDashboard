import { Title } from "@refinedev/antd"
import { Card, Col, Row, Space, Tooltip, Typography } from "antd"
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

export const ImpactProjectCard: React.FC = (project:any) => {
    const { Text, Title } = Typography;
    const image = project.image
    return(
        // <Card>
        //     <Title>ImpactProject Card</Title>
        // </Card>

        <Card
        hoverable
        bordered
        style={{height:'95%',margin:'1rem',border:"1px solid black"}}
        cover={ <img style={{width:'100%',height:"50%",padding:'1px'}} src={image}></img>
      }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >

        {/* <div>
          <img style={{objectFit:"contain",width:'100%',height:'20vh'}} src="https://app.plastiks.io/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHNsIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--37f4d9bbfeda515a0af388e10d8c476c4378fe19/IMG_1809.JPG"></img>
        </div> */}
          
          <Text
            strong
            ellipsis={{ tooltip: "HIIIII" }}
            style={{
              marginTop: "12px",
              fontSize:"25px"
            }}
          >
            {project.name}
          </Text>
  
          <Space
            direction="vertical"
            size={2}
            style={{
              marginTop: "8px",
              alignItems: "center",
            }}
          >
            <Text type="secondary">{project.location}</Text>
            <Text
              strong
              style={{
                marginTop: "12px",
              }}
            >
              {project.subject}
              <Space>
                
            </Space>
            </Text>
            
          </Space>
        </div>
      </Card>
    )
}