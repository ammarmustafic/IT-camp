// Zadatak: Naci prosecan rezultat testa za svakog ucenika, a zatim vratiti niz objekata ucenika koji ima najvise bodova i prosecan rezultat iznad 90
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] },
];

const averageScores = students.map((student) => {
  const avg =
    student.scores.reduce((acc, curr) => acc + curr, 0) / student.scores.length;
  return { name: student.name, average: avg };
});

const topStudents = averageScores.filter((student) => student.average > 90);

console.log(topStudents);
