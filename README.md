# pesito-backend

### Step by Step

- 1 clone the repo.
- Use `npm install` **| or |** `yarn` to install the dependencies.
- Run your **mysql** service and make sure to set your user and password in `app/config/database.js`.
- Move inside `app` directory and use `sequelize db:create` to create the database **AND** use `sequelize db:migrate` to generate the migration into database.
- Then in `root` path where is **package.json** use `npm run-dev` **| or |** `yarn run-dev` to start the **express** server.
- Open your browser and go to `localhost:3001`.
