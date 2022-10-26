import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot"); // Grabs the table
const csvFileInput = document.querySelector("#csvFileInput") //Grabs the file name
const tableCsv = new TableCsv(tableRoot) // Passes table to display helper function
const fileChosen = document.querySelector('#file-chosen'); // Span for fake filename

// Parse and display to home page
csvFileInput.addEventListener("change", e => {
    Papa.parse(csvFileInput.files[0], {
        delimiter: ",",
        quotes: true,
        skipEmptyLines: true,
        complete: results => {
            let cpy = []
            let temp = []
            for (let i = 1; i < results.data.slice(1,56).length; i++) {

                // Workaround to format date                
                temp.push(results.data[i].slice(0,1))
                temp.push([results.data[i][1].slice(0,10)]) //Convert from ISO long to 
                temp.push(results.data[i].slice(2,3))
                temp.push(results.data[i].slice(3,4))
                temp.push(results.data[i].slice(4,5))
                temp.push(results.data[i].slice(5,6))

                cpy.push(temp)
                temp = []
            }

            tableCsv.update(cpy, results.data[0].slice(0,6)) // 1st param = body, 2nd = header
        }
    })
});  

csvFileInput.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
  })


