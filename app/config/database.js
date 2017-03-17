/* database config object.Provides database config */

const database = {
  port: process.env.DB_PORT || 27017,
  ip: process.env.DB_IP || 'localhost',
  dbName: 'nodetest1'
};

export { database }
 