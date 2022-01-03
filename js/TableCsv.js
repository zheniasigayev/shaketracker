export default class {
  
  constructor(root) {
    this.root = root;
  }

  // Takes in body data and header to make table
  update(data, headerColumns = []) {
    this.clear();
    this.setHeader(headerColumns)
    this.setBody(data)
  }

  // Clears all contents from the table 
  clear() {
    this.root.innerHTML = "";
  }

  // Creates the header 
  setHeader(headerColumns) {
    this.root.insertAdjacentHTML("afterbegin", `
      <thead>
        <tr>
        ${ headerColumns.map(text => `<th>${text}</th>`).join("")}
        </tr>
      </thead>
    `)
  }

  // Creates the body
  setBody(data) {
    const rowsHtml = data.map(row => {
      return `
      <tr>
        ${row.map(text => `<td>${text}</td>`).join("")}
      </tr>
      `;
    });

    // Inserts the body
    this.root.insertAdjacentHTML("beforeend", `
      <tbody>
        ${rowsHtml.join("")}
      </tbody>
    `
    )
  }
}