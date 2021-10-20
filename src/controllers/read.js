import excelToJson from 'convert-excel-to-json';

const path = require('path');

class ReadSheet {
  // eslint-disable-next-line class-methods-use-this
  read(req, res) {
    const excelData = excelToJson({
      sourceFile: path.resolve('src/data/MOCK_DATA.xlsx'),
      sheets: [{
        name: 'data',
        header: {
          rows: 1,
        },
        columnToKey: {
          A: 'id',
          B: 'first_name',
          c: 'last_name',
          D: 'email',
          F: 'ip_address',
        },
      }],

    });
    console.log(excelData.data.length);
    res.send(excelData);
    // try {

    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(this.excelData);
    // res.send(this.excelData);
  }
}
export default new ReadSheet();
