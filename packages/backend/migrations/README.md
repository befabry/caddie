# Migrations

The file `migrate.js` is a CLI using Umzug.

Run the following command to create a new migration file :

`node migrate create --name {name}.ts --folder ./migrations --prefix TIMESTAMP`

To run the migrations run :

`node migrate up`
