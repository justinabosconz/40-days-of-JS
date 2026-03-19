function addRow() {
  const column1 = document.getElementById("title");
  const column2 = document.getElementById("value");

  const tableData = document.getElementById("table");
  console.log(tableData);

  const trElem = document.createElement("tr");

  const tdElem1 = document.createElement("td");
  tdElem1.innerText = column1.value;
  tdElem1.className = "padding";

  const tdElem2 = document.createElement("td");
  tdElem2.innerText = column2.value;
  tdElem2.className = "padding";

  const tdElem3 = document.createElement("td");
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.onclick = () => {
    trElem.remove();
  };
  tdElem3.appendChild(button);

  tableData.appendChild(trElem);
  trElem.appendChild(tdElem1);
  trElem.appendChild(tdElem2);
  trElem.appendChild(tdElem3);
  column1.value = "";
  column2.value = "";
}

function filterTask() {
  // 1. Get the value from your search input field
  const input = document.getElementById("searchInput").value.toLowerCase();

  // 2. Get all rows from the table
  const table = document.getElementById("table");
  const tr = table.getElementsByTagName("tr");

  // 3. Loop through all table rows
  for (let i = 0; i < tr.length; i++) {
    // 4. Target the second column (index 1) in the current row
    const td = tr[i].getElementsByTagName("td")[1];
    console.log(td);

    if (td) {
      const textValue = td.textContent || td.innerText;

      // 5. Check if the input matches the text value
      if (textValue.toLowerCase().indexOf(input) > -1) {
        tr[i].style.display = ""; // Show the row
      } else {
        tr[i].style.display = "none"; // Hide the row
      }
    }
  }
}
