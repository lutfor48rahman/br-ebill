import React from 'react';
import { Page, Image,Font, View, Text, Document, StyleSheet } from "@react-pdf/renderer";
import ItemsTable from "./ItemsTable";
import image from '../image/railwayPic1.png';

const TablePdf = ({ data }) => {
  Font.register({
    family: 'Ubuntu',
    fonts: [
      {
        src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
      },
      {
        src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
        fontWeight: 'bold',
      },
      {
        src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
        fontWeight: 'normal',
        fontStyle: 'italic',
      },
    ],
  });

  const styles = StyleSheet.create({
    page: {
      fontSize: 11,
    },
    header: {
      width:'90%',
      fontSize: 10,
      textAlign: 'center',
      padding: 10,
      display:'flex',
      justifyContent:'center',
      justifyItems:'center',
      backgroundColor:'rgb(242, 237, 237)',
      marginLeft:30,
      marginTop:50,
    },
    logo: {
      height: 50,
      width: 50,
      textAlign:'center',
      justifyContent:'center',
      justifyItems:'center',
      marginLeft:'35%',
      backgroundColor:'rgb(242, 237, 237)',
    },
    logoView:{
      width:'100%',
    },
    description:{
      fontFamily: 'Ubuntu',
      padding:5,
    },
    footer:{
      position:'fixed',
    }

  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* others text */}
        <View fixed={true} style={styles.header}>
          <View style={styles.logoView}>
            <Image style={styles.logo} src={image}></Image>
          </View>
          <View style={styles.description}>
            <Text>In case of any concerns or grievance against tickets purchased through the e-ticket website or Rail Sheba app, a. passenger should notify Bangladesh Railway within 2 hours by sending an email along with the e-ticket details to support@eticket.railway.gov.bd.</Text>
          </View>
        </View>
        <View style={styles.fullpage}> <ItemsTable data={data} /></View>
        {/* others text */}
      </Page>
    </Document>
  );
};

export default TablePdf;