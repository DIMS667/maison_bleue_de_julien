export const reports = [
  {
    id: 'minas-s1-2026',
    year: '2026',
    label: 'Rapport MINAS',
    title: "Rapport d'activités du premier semestre 2026",
    file: '/pdf/Rapport MINAS S1.pdf',
    pages: 18,
    featured: true,
  },
  {
    id: 'rapport-annuel-2025',
    year: '2025',
    label: 'Rapport annuel',
    title: 'Rapport annuel MBJ 2025',
    file: '/pdf/RAPPORT ANNUEL 2025_MBJ.pdf',
  },
  {
    id: 'rapport-annuel-2024',
    year: '2024',
    label: 'Rapport annuel',
    title: 'Rapport annuel MBJ 2024',
    file: '/pdf/Rapport annuel MBJ 2024.pdf',
  },
  {
    id: 'rapport-annuel-2023',
    year: '2023',
    label: 'Rapport annuel',
    title: 'Rapport annuel MBJ 2023',
    file: '/pdf/La-Maiso- Bleue-de-Julien-Rapport-annuel-2023-v2.pdf',
  },
  {
    id: 'rapport-annuel-2020-2022',
    year: '2020-2022',
    label: 'Rapport annuel',
    title: 'Rapport annuel MBJ 2020-2022',
    file: '/pdf/RAPPORT-ANNUEL-FINAL-MBJ-202O-2021-2022.pdf',
  },
];

export function getReportById(reportId) {
  return reports.find((report) => report.id === reportId);
}
