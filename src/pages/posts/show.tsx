import { Typography } from "antd";
import{ IPost, ICategory } from "../../interfaces";
import { useOne, useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";

const{ Title, Text } = Typography;
export const PostShow: React.FC = () =>{
    const { queryResult } = useShow();
    const {data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>({
        resource:'categories',
        id: record?.category.id || "",
        queryOptions:{
            enabled: !!record?.category.id,
        }
    })
    return(
        <Show isLoading={isLoading}>
            <Title>Title</Title>
            <Text>{record?.title}</Text>

            <Title>Status</Title>
            <Text>{record?.status}</Text>

            <Title>Category</Title>
            <Text>{categoryData?.data.id}</Text>
        </Show>
    );
};