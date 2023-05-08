function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`prashanth, ankamma`);
        const cellText1 = document.createTextNode(`rama, venky`);
        cell.appendChild(cellText);
        cell.appendChild(cellText1);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }