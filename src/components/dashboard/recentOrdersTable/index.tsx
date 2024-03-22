import { useNavigation, useTranslate } from "@refinedev/core";
import { useTable } from "@refinedev/antd";
import { Typography, Table, Avatar, Space, Tag, Card, Button } from "antd";
import {
    RecentOrdersColumn,
    Price,
    OrderId,
    Title,
    TitleWrapper,
} from "./styled";



import { IOrder } from "../../../interfaces";
import { EyeOutlined } from "@ant-design/icons";

const { Text, Paragraph } = Typography;

export const RecentOrdersTable: React.FC<{ sharedState: IOrder, setSharedState: any, setCords: any }> = ({ sharedState, setSharedState, setCords }) => {
    const t = useTranslate();

    // dataProviderName: "jsonapi",
    // filters: [{ field: "userID", operator: "eq", value: "3" }],
    const { tableProps } = useTable<IOrder>({
        dataProviderName: "jsonapi",
        resource: "orders",
        initialSorter: [
            {
                field: "createdAt",
                order: "desc",
            },
        ],
        initialPageSize: 10,
        permanentFilter: [
            {
                field: "status.text",
                operator: "eq",
                value: "Pending",
            },
        ],
        syncWithLocation: false,
    });

    const { show } = useNavigation();


    function updateSelected(selected: IOrder) {
        console.log(selected.id)
        setSharedState(selected)
    }

    function updateCords() {
        setCords(
            {
                longitude: Math.floor(Math.random() * (180 - (-180) + 1)) + (-180),
                latitude: Math.floor(Math.random() * (90 - (-90) + 1)) + (-90),
            }
        )
    }


    return (
        <Card bodyStyle={{padding:'0px'}} style={{ height: "100%", border: '1px solid black',padding:'0px' }}>
            
            <Table
                {...tableProps}
                pagination={{ ...tableProps.pagination, simple: true }}
                scroll={{x:true,y:'28vh'}}
                rowKey="id"
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            console.log(record.id)
                            updateSelected(record);
                            updateCords();
                        }, // click row
                    };
                }}

            >
                <Table.Column<IOrder>

                    key="avatar"
                    render={(_, record) => (
                        <Avatar
                            size={{
                                xs: 60,
                                lg: 60,
                                xl: 60,
                                xxl: 60,
                            }}
                            src={record?.products[0]?.images[0].url}
                        />
                    )}
                />
                <RecentOrdersColumn
                    title='No.'
                    key="summary"
                    render={(_, record) => (
                        <TitleWrapper>
                            <Title strong>{record.products[0]?.name}</Title>
                            <Paragraph
                                ellipsis={{
                                    rows: 2,
                                    tooltip: record.products[0]?.description,
                                    symbol: <span>...</span>,
                                }}
                            >
                            </Paragraph>

                            <OrderId
                                strong
                                // onClick={() => {
                                //     show("orders", record.id);
                                // }}
                            >
                                #{record.orderNumber}
                            </OrderId>
                        </TitleWrapper>
                    )}
                />
                <RecentOrdersColumn
                    key="summary"
                   title="Address"
                    render={(_, record) => (
                        <Space direction="vertical">
                            <Text style={{wordBreak:'normal'}}>{record.adress.text}</Text>
                        </Space>
                    )}
                />
                <Table.Column<IOrder>
                    title="Price"
                    dataIndex="amount"
                    render={(value, record) => (
                        <Space
                            size="large"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Price
                                strong
                                options={{
                                    currency: "USD",
                                    style: "currency",
                                    notation: "standard",
                                }}
                                value={value / 100}
                            />
                            <Tag color="orange">
                                {record.status.text}
                            </Tag>
                        </Space>
                    )}
                />
                
                <Table.Column
                    title='View'
                    key="actions"
                    fixed="right"
                    align="center"
                    render={(_, record: IOrder) => {
                        return (
                            <Button
                                icon={<EyeOutlined />}
                                onClick={() => {
                                    show("orders", record.id);
                                }}
                            />
                        );
                    }}
                />
            </Table>
        </Card>

    );
};
