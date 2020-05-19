
exports.seed = function (knex) {
  return knex('role').insert([
    { role: 'supervisor' },
    { role: 'promoter' },
    { role: 'teacher' },
    { role: 'field manager' },
    { role: 'field officer' }
  ]);
};
