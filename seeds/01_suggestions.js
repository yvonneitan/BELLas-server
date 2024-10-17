/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('suggestions').del();
    
    // Insert seed entries
    await knex('suggestions').insert([
      {
        id: 1,
        suggestion: 'I don\'t have any other suggestions so far',
        email: 'paula@instock.com',
        name: 'Parmin Aujla',
        problem: 'No issues reported.',
      },
      {
        id: 2,
        suggestion: 'Needs improvements in community areas.',
        email: 'anonymous@anonymous.com',
        name: 'Anonymous',
        problem: 'I think this place needs tons of places need to get done!',
      },
      {
        id: 3,
        suggestion: 'Host monthly events to engage members.',
        email: 'bmcdonald@instock.com',
        name: 'Brad MacDonald',
        problem: 'Fosters stronger connections and shared experiences.',
      },
      {
        id: 4,
        suggestion: 'Celebrate member achievements publicly.',
        email: 'gwong@instock.com',
        name: 'Gary Wong',
        problem: 'Boosts morale and reinforces positive contributions to the community.',
      },
      {
        id: 5,
        suggestion: 'Allow unmoderated discussions.',
        email: 'sng@instock.com',
        name: 'Sharon Ng',
        problem: 'Risks spreading misinformation and unhealthy interactions among members.',
      },
    ]);
  }
  