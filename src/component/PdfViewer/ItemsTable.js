import React from "react";
import './Pdf.css';
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width:'90%',
    margin:30,
    marginTop:0,
  },
});


const ItemsTable = ({ data }) => (
  <View style={styles.tableContainer}>
    <TableHeader />
   <TableRow data={data} />
   <Text> Total Employee Numbers : {data.length}</Text>
  </View>
);

export default ItemsTable;