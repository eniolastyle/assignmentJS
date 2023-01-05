const ResultTable = document.querySelector(".result");
const ToggleResultBtn = document.querySelector(".toggle-result");

const studentsData = [
  ["AbdulLah", 18, 18, 34],
  ["Saliu", 18, 12, 69],
  ["AbdurRohman", 12, 19, 54],
  ["Jamiu", 14, 12, 40],
];

let resultDisplayed = false;
ToggleResultBtn.addEventListener("click", () => {
  if (!resultDisplayed) {
    DisplayResult(studentsData);
    ToggleResultBtn.replaceChildren("Hide Result");
    resultDisplayed = true;
  } else {
    const firstChild = ResultTable.firstElementChild;
    ResultTable.replaceChildren("");
    ResultTable.append(firstChild);
    ToggleResultBtn.replaceChildren("Show Result");
    resultDisplayed = false;
  }
});

function DisplayResult(data) {
  for (let i = 0; i < data.length; i++) {
    const tableRow = document.createElement("tr");

    const singleData = data[i];
    const totalScore = singleData[1] + singleData[2] + singleData[3];

    for (let j = 0; j <= singleData.length; j++) {
      const tableData = document.createElement("td");

      if (j === singleData.length) {
        tableData.append(totalScore);
        tableRow.append(tableData);
      } else {
        tableData.append(singleData[j]);
        tableRow.append(tableData);
      }
    }
    ResultTable.append(tableRow);
  }
}
