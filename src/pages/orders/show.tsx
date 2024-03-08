import { useShow } from "@refinedev/core";

export const OrderShow: React.FC = () =>{
    const { queryResult } = useShow();
    const {data, isLoading } = queryResult;
    const record = data?.data;
    console.log(record)
    if (isLoading) {
        return <div>Loading...</div>;
      }

    return(
        
        <div>
            Data Loaded...
        </div>
    );

}