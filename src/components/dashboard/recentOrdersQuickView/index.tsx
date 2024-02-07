import Card from "antd/es/card/Card"
import { IOrder } from "../../../interfaces"
import { ContentWrapper, Title } from "./styled"
import { MapView } from "./map"
import 'mapbox-gl/dist/mapbox-gl.css';




export const RecentOrdersQuickView: React.FC<{sharedState: IOrder}> = ({sharedState}) => {
    return(
        <Card style={{height:"100%"}}>
            <Title
                strong>
                Order ID: {sharedState?.orderNumber.toString()}
            </Title>
            <ContentWrapper>
                <h1>{sharedState?.products[0].name}</h1>
                <div style={{height:"100vh",width:400}}>
                    <MapView></MapView>
                </div>
                
            </ContentWrapper>
            
            
        </Card>
    )
}