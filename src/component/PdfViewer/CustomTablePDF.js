import { Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";


function checkStrEmpty(str) {
    return !(str && str.length > 1 && str.split(" ").join("").length > 0);
}


function CustomTablePDF(props) {
    const { fields = [], data = [] } = props;
    let tableCol = {
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    };
    return (
        <View style={styles.table}>
            {data.map(
                (item, idx) =>
                    item && (
                        <View key={idx} style={styles.tableRow}>
                            {fields.map((_item, _idx) => {
                                let val = item[_item.value] || "";
                                let value_alt =
                                    (_item.value_alt &&
                                        item[_item.value_alt]) ||
                                    "";

                                if (_item.custom) {
                                    return (
                                        <View
                                            key={_idx}
                                            style={[
                                                tableCol,
                                                { width: _item.width + "%" }
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.tableCell,
                                                    item.style ? item.style : {}
                                                ]}
                                            >
                                                {_item.component(item)}
                                            </Text>
                                        </View>
                                    );
                                } else {
                                    return (
                                        <View
                                            style={[
                                                styles.tableCol,
                                                { width: _item.width + "%" }
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.tableCell,
                                                    item.style ? item.style : {}
                                                ]}
                                            >
                                                {checkStrEmpty(val)
                                                    ? value_alt
                                                    : val || "-"}
                                            </Text>
                                        </View>
                                    );
                                }
                            })}
                        </View>
                    )
            )}
        </View>
    );
}

const BORDER_COLOR = "#000";
const BORDER_STYLE = "solid";
const styles = StyleSheet.create({
    headerBg: {
        backgroundColor: "#aaa"
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },

    tableCellHeader: {
        margin: 2,
        fontSize: 13,
        fontWeight: "bold",
    },
    tableCell: {
        margin: 2,
        fontSize: 12,
    },
    textCenter: {
        textAlign: "center"
    }
});

export default CustomTablePDF;