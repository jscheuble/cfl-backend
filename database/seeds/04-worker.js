
exports.seed = function (knex) {
  return knex('worker').insert([
    {
      first_name: 'Jane',
      last_name: 'Doe',
      username: 'jdoe1',
      password: 'jdoe1',
      role_name: 'supervisor_agriculture',
      zone_id: 1,
      community_id: 1
    },
    {
      first_name: 'Jeff',
      last_name: 'Doe',
      username: 'jeffdoe1',
      password: 'jeffdoe1',
      role_name: 'supervisor_health',
      zone_id: 2,
      community_id: 1
    },
    {
      first_name: 'Brookims',
      last_name: 'Jarvis',
      username: 'brookims23',
      password: 'brookims23',
      role_name: 'supervisor_health',
      zone_id: 7,
      community_id: 3
    },
    {
      first_name: 'Hayden',
      last_name: 'Black',
      username: 'hayden0',
      password: 'hayden',
      role_name: 'supervisor_income_generation',
      zone_id: 5,
      community_id: 2
    },
    {
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe',
      password: 'johndoe',
      role_name: 'promoter',
      zone_id: 2,
      community_id: 1
    },
    {
      first_name: 'Bill',
      last_name: 'Smith',
      username: 'billsmith',
      password: 'billsmith',
      role_name: 'teacher',
      zone_id: 5,
      community_id: 2
    },
    {
      first_name: 'Chad',
      last_name: 'Jones',
      username: 'chadjones',
      password: 'chadjones',
      role_name: 'field officer',
      zone_id: 7,
      community_id: 2
    },
    {
      first_name: 'Susan',
      last_name: 'Smith',
      username: 'susan12',
      password: 'susan12',
      role_name: 'field manager',
      zone_id: 11,
      community_id: 3
    }
  ]);
};
