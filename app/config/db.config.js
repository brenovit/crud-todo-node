module.exports = {
  HOST: 'us-cdbr-east-02.cleardb.com',
  USER: 'b3e595d57fa32f',
  PASSWORD: '522922e5',
  DB: 'heroku_1cc15b8d0160c05',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
