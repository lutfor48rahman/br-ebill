import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PdfDocument = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            // backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            // flexGrow: 1

        },
        text:{
            textAlign:'center',
            justifyContent:'center',
            color:'red',
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>Section #1</Text>
                </View>
                {/* <View style={styles.section}>
                    <Text>Section #2</Text>
                </View> */}
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>Section #1</Text>
                </View>
                {/* <View style={styles.section}>
                    <Text>Section #2</Text>
                </View> */}
            </Page>
        </Document>
    );
};

export default PdfDocument;