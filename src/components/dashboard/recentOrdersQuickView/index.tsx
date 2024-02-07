import Card from "antd/es/card/Card"
import { IOrder } from "../../../interfaces"
import { ContentWrapper, Title } from "./styled"




export const RecentOrdersQuickView: React.FC<{sharedState: IOrder}> = ({sharedState}) => {
    return(
        <Card>
            <Title
                strong>
                Order ID: {sharedState?.orderNumber.toString()}
            </Title>
            <ContentWrapper>
                <h1>{sharedState?.products[0].name}</h1>
            </ContentWrapper>


        </Card>
    )
}