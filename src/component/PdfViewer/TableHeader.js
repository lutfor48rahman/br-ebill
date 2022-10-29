import React from 'react';
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    heading:{
        margin:10,
        marginLeft:'35%',
        padding:5,
        fontSize:20,
        alignContent:'center',
        
    },
    tableCellHeader: {
        margin: 2,
        fontSize: 13,
        fontWeight: "bold",
    },
    headingBg:{
        width:'100%',
        backgroundColor:'gray',
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
    },
    headerBg: {
        backgroundColor: "#aaa"
    },
});

const fields = [
    {
        title: " Employee Name",
        custom: true,
        component: (item) => `${item.name.common}`,
        width: "40%"
    },
    {
        title: " Capital Name",
        custom: true,
        component: (item) => `${item.capital}`,
        width: "30%"
    },
    {
        title: "Region Name",
        custom: true,
        style: { textAlign: "right" },
        className: "text-right",
        component: (item) =>`${item.region}`,
        width: "30%"
    }
  ];

const TableHeader = () => {
    const BORDER_COLOR = "#000";
    const BORDER_STYLE = "solid";
    let tableCol = {
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    };

    return (
        // <View fixed={true} style={styles.headingBg}>
        //     <Text style={styles.heading}>This is Employee table</Text>
        // </View>
        <View fixed={true} style={[styles.tableRow, styles.headerBg]}>
                {fields.map((_item, _idx) => (
                    <View
                        fixed={true}
                        key={_idx}
                        style={[tableCol, { width: _item.width + "%" }]}
                    >
                        <Text
                            style={[
                                styles.tableCellHeader,
                                { textAlign: "center" }
                            ]}
                        >
                            {_item.title}
                        </Text>
                    </View>
                ))}
            </View>
    );
};

export default TableHeader;