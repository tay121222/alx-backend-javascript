export default function getListStudentIds(stuArray) {
  if (Array.isArray(stuArray)) {
    return stuArray.map((student) => student.id);
  }
  return [];
}
