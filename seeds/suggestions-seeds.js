/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("suggestions").del();

  // Insert seed entries
  await knex("suggestions").insert([
    {
      id: 1,
      timestamp: "2024-09-01 00:00:01.000000",
      name: "Parmin Aujla",
      email: "paula-aujla@gmail.com",
      suggestion: "Renovate children's hospital",
      votes: 784,
    },
    {
      id: 2,
      timestamp: "2024-09-05 00:00:01.000000",
      name: "Cory Smith",
      email: "cory-smith@gmail.com",
      suggestion: "After-school programs for elementary school kids",
      votes: 632,
    },
    {
      id: 3,
      timestamp: "2024-09-10 00:00:01.000000",
      name: "Brad MacDonald",
      email: "bmcdonald@gmail.com",
      suggestion: "Translation services for mental health resources",
      votes: 329,
    },
    {
      id: 4,
      timestamp: "2024-09-15 00:00:01.000000",
      name: "Jerry Peterson",
      email: "jpeterson@gmail.com",
      suggestion: "New accessible playground in public park",
      votes: 580,
    },
    {
      id: 5,
      timestamp: "2024-09-20 00:00:01.000000",
      name: "Tricia Lee",
      email: "tricialee@gmail.com",
      suggestion: "Basketball camps for underprivileged kids",
      votes: 121,
    },
  ]);
}
