for (let i = 1; i <= 10; i++) {
  console.log(`i is : ${i}`);
  for (let j = 1; j <= 4; j++) {
    console.log(`         j is : ${j}`);
  }
}

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let out = 0; out < seatingChart.length; out++) {

  console.log(`ROW #${out + 1}`);

  const row = seatingChart[out];
  
  for (let is = 0; is < row.length; is++) {
    console.log(`   ${is} ${row[is]}`);
  }
}

