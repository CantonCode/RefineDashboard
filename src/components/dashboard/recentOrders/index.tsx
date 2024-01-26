import { useNavigation, useTranslate } from "@refinedev/core";
import { useTable } from "@refinedev/antd";
import { Typography, Table, Avatar, Space, Tag, Card } from "antd";
import {
    RecentOrdersColumn,
    Price,
    OrderId,
    Title,
    TitleWrapper,
} from "./styled";



import { IOrder } from "../../../interfaces";
import { useOrderContext } from "../../../hooks/useOrderContext";

const { Text, Paragraph } = Typography;

export const RecentOrders: React.FC = () => {
    const t = useTranslate();
    const { tableProps } = useTable<IOrder>({
        resource: "orders",
        initialSorter: [
            {
                field: "createdAt",
                order: "desc",
            },
        ],
        initialPageSize: 4,
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
    const {dispatch}= useOrderContext();

    return (
        <Card>
            
            <Table
                {...tableProps}
                pagination={{ ...tableProps.pagination, simple: true }}
                showHeader={false}
                rowKey="id"
                onRow={(record, rowIndex) => {
                    return {
                      onClick: (event) => {
                        dispatch({
                            type: "setOrder",
                            payload: record,
                        })
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
                                lg: 108,
                                xl: 132,
                                xxl: 144,
                            }}
                            src={record?.products[0]?.images[0].url}
                        />
                    )}
                />
                <RecentOrdersColumn
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
                                {record.products[0]?.description}
                            </Paragraph>

                            <OrderId
                                strong
                                onClick={() => {
                                    show("orders", record.id);
                                }}
                            >
                                #{record.orderNumber}
                            </OrderId>
                        </TitleWrapper>
                    )}
                />
                <RecentOrdersColumn
                    key="summary"
                    render={(_, record) => (
                        <Space direction="vertical">
                            <Title
                                strong
                            >{`${record.courier.name} ${record.courier.surname}`}</Title>
                            <Text>{record.adress.text}</Text>
                        </Space>
                    )}
                />
                <Table.Column<IOrder>
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
                <Table.Column<IOrder>
                    fixed="right"
                    key="actions"
                    align="center"
                />
            </Table>

        </Card>

    );
};