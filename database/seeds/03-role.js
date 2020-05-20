
exports.seed = function (knex) {
  return knex('role').insert([
    { role: 'supervisor_agriculture' },
    { role: 'supervisor_health' },
    { role: 'supervisor_income_generation' },
    { role: 'promoter' },
    { role: 'teacher' },
    { role: 'field manager' },
    { role: 'field officer' }
  ]);
};
