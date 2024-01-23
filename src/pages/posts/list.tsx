import { ICategory, IPost } from "../../interfaces"
import { List, TagField, TextField, useTable, FilterDropdown,useSelect } from "@refinedev/antd";
import { useMany } from "@refinedev/core";
import { Select, Table } from "antd";
export const PostList: React.FC = () =>{
    const { tableProps } = useTable<IPost>();
    const categoryIds = tableProps?.dataSource?.map((item) => item.category.id) ?? [];
    
    const{ data: categoriesData, isLoading } = useMany<ICategory>({
        resource:"categories",
        ids:categoryIds,
        queryOptions:{
            enabled: categoryIds.length > 0,
        }
    });

    const {selectProps: categorySelectedProperties} = useSelect<ICategory>({
        resource:'categories'
    })



    return (
        <div style={{ padding: "4px" }}>
            <h2>Posts</h2>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title="ID"
                />
                <Table.Column
                    dataIndex="status"
                    title="Status"
                    render={(value)=><TagField value={value}/>}
                />
               <Table.Column
                    dataIndex={["category","id"]}
                    title="category"
                    render={(value)=><TextField value={
                        categoriesData?.data.find((item) => item.id === value)?.title}/>}  
                    filterDropdown={(props) =>(
                        <FilterDropdown {...props}>
                            <Select
                                style={{minWidth:200}}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectedProperties}/>
                        </FilterDropdown>
                )}
                />
                <Table.Column
                    dataIndex="createdAt"
                    title="createdAt" 
                />
                
            </Table>
        </div>
    );
};

