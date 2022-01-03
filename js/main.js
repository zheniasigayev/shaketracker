import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot"); // Grabs the table
const csvFileInput = document.querySelector("#csvFileInput") //Grabs the file name
const tableCsv = new TableCsv(tableRoot) // Passes table to display helper function
const fileChosen = document.querySelector('#file-chosen'); // Span for fake filename

csvFileInput.addEventListener("change", e => {
    Papa.parse(csvFileInput.files[0], {
        delimiter: ",",
        quotes: true,
        skipEmptyLines: true,
        complete: results => {
            tableCsv.update(results.data.slice(1), results.data[0]) // 1st param = body, 2nd = header
        }
    })
});

csvFileInput.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
  })
