import { StyleSheet, View } from '@react-pdf/renderer';
import CustomTablePDF from './CustomTablePDF';

const styles = StyleSheet.create({
  table: {
    width: '100%',
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

const ReportTable = ({ data }) => {
  return (
    <View style={styles.table}>
      <CustomTablePDF fields={fields} data={data} />
    </View>
  )
}

export default ReportTable;