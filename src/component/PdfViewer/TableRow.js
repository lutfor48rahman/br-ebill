import React from "react";
import { View } from "@react-pdf/renderer";
import ReportTable from "./ReportTable";

const TableRow = ({ data }) => {

    return (
        <View>

            <ReportTable data={data}></ReportTable>
           
        </View>
    )
};

export default TableRow;