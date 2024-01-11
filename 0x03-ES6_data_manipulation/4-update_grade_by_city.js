export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (Array.isArray(studentList)) {
    return studentList
      .filter((student) => student.location === city)
      .map((student) => {
        const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);

        if (matchedGrade) {
          return { ...student, grade: matchedGrade.grade };
        }
        return { ...student, grade: 'N/A' };
      });
  }
  return [];
}
