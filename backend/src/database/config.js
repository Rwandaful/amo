require('dotenv/config');
const config = {
  development: {
    use_env_variable: 'DATABASE_DEVELOPMENT_URL',
    dialect: 'postgres',
  },
  test: {
    use_env_variable: 'DATABASE_TEST_URL',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_PRODUCTION_URL',
    dialect: 'postgres',
  },
};
module.exports = config;

