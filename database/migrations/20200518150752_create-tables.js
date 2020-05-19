
exports.up = function (knex) {
    return knex.schema
        .createTable('community', tbl => {
            tbl.increments();
            tbl.string('community', 50).notNullable();
        })
        .createTable('zone', tbl => {
            tbl.increments();
            tbl.string('zone_letter', 2).notNullable();
            tbl.integer('community_id')
                .unsigned()
                .notNullable()
                .references('community.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.unique(['zone_letter', 'community_id'])
        })
        // .createTable('community_zone', tbl => {
        //     tbl.integer('community_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('community.id')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');
        //     tbl.integer('zone_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('zone.id')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');
        //     tbl.unique(['community_id', 'zone_id']);
        // })
        .createTable('role', tbl => {
            tbl.increments();
            tbl.string('role', 50).notNullable().unique();
            // link to surveys or a surveys_role table
        })
        // .createTable('field_officer', tbl => {
        //     tbl.increments();
        //     tbl.string('first_name', 50).notNullable();
        //     tbl.string('last_name', 50).notNullable();
        //     tbl.string('username', 50).notNullable().unique();
        //     tbl.string('password', 50).notNullable();
        //     tbl.integer('zone_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('zone.id')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');
        //     tbl.integer('community_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('community.id')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');
        // })
        // .createTable('supervisor', tbl => {
        //     tbl.increments();
        // tbl.string('first_name', 50).notNullable();
        // tbl.string('last_name', 50).notNullable();
        // tbl.string('username', 50).notNullable().unique();
        // tbl.string('password', 50).notNullable();
        // tbl.integer('zone_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('zone.id')
        //     .onUpdate('CASCADE')
        //     .onDelete('CASCADE');
        // tbl.integer('community_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('community.id')
        //     .onUpdate('CASCADE')
        //     .onDelete('CASCADE');
        // })
        .createTable('worker', tbl => {
            tbl.increments();
            tbl.string('first_name', 50).notNullable();
            tbl.string('last_name', 50).notNullable();
            tbl.string('username', 50).notNullable().unique();
            tbl.string('password', 50).notNullable();
            tbl.string('role_name')
                .notNullable()
                .references('role.role')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('zone_id')
                .unsigned()
                .notNullable()
                .references('zone.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('community_id')
                .unsigned()
                .notNullable()
                .references('community.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // created at timestamp
            tbl.timestamp("created at").defaultTo(knex.fn.now());
        })
        .createTable('family', tbl => {
            tbl.increments();
            tbl.string('family_name', 50).notNullable();
            tbl.integer('zone_id')
                .unsigned()
                .notNullable()
                .references('zone.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('community_id')
                .unsigned()
                .notNullable()
                .references('community.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('field_officer_id')
                .unsigned()
                .notNullable()
                .references('worker.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // created at timestamp
            tbl.timestamp("created at").defaultTo(knex.fn.now());
        })
        .createTable('individual', tbl => {
            tbl.increments();
            tbl.string('first_name', 50).notNullable();
            tbl.string('last_name', 50).notNullable();
            tbl.integer('family_id')
                .unsigned()
                .notNullable()
                .references('family.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // should this be notNullable 
            tbl.date('date_of_birth');
            tbl.string('gender').notNullable();
            tbl.boolean('hoh').notNullable();
            tbl.string('relation_to_hoh').notNullable();
            tbl.string('marital_status').notNullable();
            // created at timestamp
            tbl.timestamp("created at").defaultTo(knex.fn.now());
        })
        .createTable('survey', tbl => {
            tbl.increments();
            tbl.string('survey_name', 100).notNullable();
        })
        // ********
        .createTable('survey_role', tbl => {
            tbl.integer('survey_id')
                .unsigned()
                .notNullable()
                .references('survey.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('role_id')
                .unsigned()
                .notNullable()
                .references('role.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.unique(['survey_id', 'role_id'])
        })
        // ********
        .createTable('completed_survey', tbl => {
            tbl.increments();
            tbl.integer('survey_id')
                .unsigned()
                .notNullable()
                .references('survey.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('supervisor_id')
                .unsigned()
                .notNullable()
                .references('worker.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('family_id')
                .unsigned()
                .notNullable()
                .references('family.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('individual_id')
                .unsigned()
                .references('individual.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            // completed at timestamp
            tbl.timestamp("completed at").defaultTo(knex.fn.now());
        })
        .createTable('question', tbl => {
            tbl.increments();
            tbl.text('question', 150).notNullable();
            tbl.integer('survey_id')
                .unsigned()
                .notNullable()
                .references('survey.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('response', tbl => {
            tbl.increments();
            tbl.string('response').notNullable();
            tbl.integer('question_id')
                .unsigned()
                .notNullable()
                .references('question.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('family_id')
                .unsigned()
                .notNullable()
                .references('family.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('individual_id')
                .unsigned()
                .references('individual.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');


        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('response')
        .dropTableIfExists('question')
        .dropTableIfExists('completed_survey')
        .dropTableIfExists('survey')
        .dropTableIfExists('individual')
        .dropTableIfExists('family')
        .dropTableIfExists('worker')
        .dropTableIfExists('role')
        .dropTableIfExists('zone')
        .dropTableIfExists('community')
};
