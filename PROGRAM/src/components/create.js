// const XLSX = require("xlsx");
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
//
//  // const excel_file = document.getElementById('path_file');
//  const excel_file = document.getElementById('excel_file');
// let columns_table = 0;
// excel_file.addEventListener('change',(event) => {
//  const reader = new FileReader();
//   reader.readAsArrayBuffer(event.target.files[0]);
//    reader.onload = function(event) {
//      const data = new Uint8Array(reader.result);
//      const work_book = XLSX.read(data, {type: 'array'});
//      const sheet_name = work_book.SheetNames;
//      const sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header: 1});
//
//      let count = 0;
//      if(sheet_data.length > 0) {
//        let table_output = '<table class="table">';
//        for(let row = 0; row < sheet_data.length; row++) {
//          table_output += '<tr>';
//          for(let cell = 0; cell < sheet_data[row].length; cell++) {
//            table_output += '<td>' + sheet_data[row][cell] + '</td>';
//            count += 1;
//          }
//          table_output += '</tr>';
//        }
//        table_output += '</table>';
//        columns_table = count / sheet_data.length;
//        console.log(columns_table.toString());
//
//        document.getElementById("frame2").style.display = "block";
//
//        if (columns_table === 4) {
//          document.getElementById("GEN_1").style.display = "block";
//          document.getElementById("GEN_2").style.display = "block";
//          document.getElementById("GEN_3").style.display = "block";
//          document.getElementById("GEN_4").style.display = "block";
//          document.getElementById("GEN_5").style.display = "none";
//        }
//        if (columns_table === 5) {
//          document.getElementById("GEN_1").style.display = "block";
//          document.getElementById("GEN_2").style.display = "block";
//          document.getElementById("GEN_3").style.display = "block";
//          document.getElementById("GEN_4").style.display = "block";
//          document.getElementById("GEN_5").style.display = "block";
//        }
//        document.getElementById("frame03").style.display = "block";
//      }
//      document.getElementById("import_data").onclick = excel_file.value;
//    }
//  });

function gotPathFile(element1) {
  const file = element1.files[0];
  const reader = new FileReader()
  reader.onload = function(base64) {
    localStorage["file1"] = base64;
  }
  const file_output = reader.readAsDataURL(file);
  const fileName1 = $(element1).val().split('/').pop().split('\\').pop();
  console.log(fileName1);
  document.getElementById('excel_file_y_vnesh_path').value = fileName1.toString();
}
