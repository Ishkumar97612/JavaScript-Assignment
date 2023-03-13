(function() {
  const Information = [
    { name: "Name", value: "Ish Kumar" },
    { name: "Age", value: "21" },
    { name: "DOB", value: "DD/MM/YYYY" },
    { name: "Email", value: "abc@sample.com" },
    { name: "Company", value: "Gemini Solutions" }
  ];
  
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  const headerRow = document.createElement("tr");
  let i=0,j=0;
  while (i < 5) {
    const headerCell = document.createElement("th");
    headerCell.style.border = "1px solid black";
    headerCell.style.fontSize = '30px';
    const textCell = document.createTextNode(Information[i].name);
    headerCell.appendChild(textCell);
    headerRow.appendChild(headerCell);
    i++;
  }
  table.appendChild(headerRow);

  i=0;
  while (i < 5) {
    const row = document.createElement("tr");
    let j=0;
    while (j < 5) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid black";
      cell.style.padding = "10px";
      const textCell = document.createTextNode(Information[j].value);
      cell.appendChild(textCell);
      row.appendChild(cell);
      j++;
    }
    table.appendChild(row);
    i++;
  }

  document.body.appendChild(table);
})();