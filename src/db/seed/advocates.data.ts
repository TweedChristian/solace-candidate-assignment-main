const specialtiesData = [
  { id: 1, specialtyTitle: "Bipolar" },
  { id: 2, specialtyTitle: "LGBTQ" },
  { id: 3, specialtyTitle: "Medication/Prescribing" },
  { id: 4, specialtyTitle: "Suicide History/Attempts" },
  {
    id: 5,
    specialtyTitle:
      "General Mental Health (anxiety, depression, stress, grief, life transitions)",
  },
  { id: 6, specialtyTitle: "Men's issues" },
  {
    id: 7,
    specialtyTitle: "Relationship Issues (family, friends, couple, etc)",
  },
  { id: 8, specialtyTitle: "Trauma & PTSD" },
  { id: 9, specialtyTitle: "Personality disorders" },
  { id: 10, specialtyTitle: "Personal growth" },
  { id: 11, specialtyTitle: "Substance use/abuse" },
  { id: 12, specialtyTitle: "Pediatrics" },
  {
    id: 13,
    specialtyTitle:
      "Women's issues (post-partum, infertility, family planning)",
  },
  { id: 14, specialtyTitle: "Chronic pain" },
  { id: 15, specialtyTitle: "Weight loss & nutrition" },
  { id: 16, specialtyTitle: "Eating disorders" },
  { id: 17, specialtyTitle: "Diabetic Diet and nutrition" },
  {
    id: 18,
    specialtyTitle: "Coaching (leadership, career, academic and wellness)",
  },
  { id: 19, specialtyTitle: "Life coaching" },
  { id: 20, specialtyTitle: "Obsessive-compulsive disorders" },
  {
    id: 21,
    specialtyTitle: "Neuropsychological evaluations & testing (ADHD testing)",
  },
  { id: 22, specialtyTitle: "Attention and Hyperactivity (ADHD)" },
  { id: 23, specialtyTitle: "Sleep issues" },
  { id: 24, specialtyTitle: "Schizophrenia and psychotic disorders" },
  { id: 25, specialtyTitle: "Learning disorders" },
  { id: 26, specialtyTitle: "Domestic abuse" },
];

const randomSpecialty = () => {
  const random1 = Math.floor(Math.random() * 24);
  const random2 = Math.floor(Math.random() * (24 - random1)) + random1 + 1;

  return [random1, random2];
};

const advocateData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    degree: "MD",
    yearsOfExperience: 10,
    phoneNumber: 5551234567,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    city: "Los Angeles",
    degree: "PhD",
    yearsOfExperience: 8,
    phoneNumber: 5559876543,
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    city: "Chicago",
    degree: "MSW",
    yearsOfExperience: 5,
    phoneNumber: 5554567890,
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Brown",
    city: "Houston",
    degree: "MD",
    yearsOfExperience: 12,
    phoneNumber: 5556543210,
  },
  {
    id: 5,
    firstName: "Emily",
    lastName: "Davis",
    city: "Phoenix",
    degree: "PhD",
    yearsOfExperience: 7,
    phoneNumber: 5553210987,
  },
  {
    id: 6,
    firstName: "Chris",
    lastName: "Martinez",
    city: "Philadelphia",
    degree: "MSW",
    yearsOfExperience: 9,
    phoneNumber: 5557890123,
  },
  {
    id: 7,
    firstName: "Jessica",
    lastName: "Taylor",
    city: "San Antonio",
    degree: "MD",
    yearsOfExperience: 11,
    phoneNumber: 5554561234,
  },
  {
    id: 8,
    firstName: "David",
    lastName: "Harris",
    city: "San Diego",
    degree: "PhD",
    yearsOfExperience: 6,
    phoneNumber: 5557896543,
  },
  {
    id: 9,
    firstName: "Laura",
    lastName: "Clark",
    city: "Dallas",
    degree: "MSW",
    yearsOfExperience: 4,
    phoneNumber: 5550123456,
  },
  {
    id: 10,
    firstName: "Daniel",
    lastName: "Lewis",
    city: "San Jose",
    degree: "MD",
    yearsOfExperience: 13,
    phoneNumber: 5553217654,
  },
  {
    id: 11,
    firstName: "Sarah",
    lastName: "Lee",
    city: "Austin",
    degree: "PhD",
    yearsOfExperience: 10,
    phoneNumber: 5551238765,
  },
  {
    id: 12,
    firstName: "James",
    lastName: "King",
    city: "Jacksonville",
    degree: "MSW",
    yearsOfExperience: 5,
    phoneNumber: 5556540987,
  },
  {
    id: 13,
    firstName: "Megan",
    lastName: "Green",
    city: "San Francisco",
    degree: "MD",
    yearsOfExperience: 14,
    phoneNumber: 5559873456,
  },
  {
    id: 14,
    firstName: "Joshua",
    lastName: "Walker",
    city: "Columbus",
    degree: "PhD",
    yearsOfExperience: 9,
    phoneNumber: 5556781234,
  },
  {
    id: 15,
    firstName: "Amanda",
    lastName: "Hall",
    city: "Fort Worth",
    degree: "MSW",
    yearsOfExperience: 3,
    phoneNumber: 5559872345,
  },
];

const advocateSpecialtiesData = advocateData
  .map((advocate) =>
    specialtiesData.slice(...randomSpecialty()).map((specialty) => ({
      specialtyId: specialty.id,
      advocateId: advocate.id,
    }))
  )
  .flat();

export { advocateData, specialtiesData, advocateSpecialtiesData };
