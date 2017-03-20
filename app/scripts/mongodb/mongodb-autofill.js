/* mongo autofill script. TODO: code refactoring */
var Promise = require('bluebird'),
    path = require('path'),
    MongoDB = Promise.promisifyAll(require('mongodb')),
    MongoClient = MongoDB.MongoClient;



/* run entry point func */
main();


function main () {
  var args, configPath, dataPath, config, data,
    collectionName, dbConnection, connectionUrl;
  /* getting console arguments */
  args = process.argv.slice(2);

  configPath = resolvePath(args[0]);
  dataPath = resolvePath(args[1]);

  console.log('requiring data by pass...');
  console.log('\n');

  config = require(configPath);
  data = require(dataPath);

  collectionName = config.collectionName;
  connectionUrl = getConnectionUrl(config);
  
  console.log('connecting to database...');
  console.log('\n');
  MongoClient.connectAsync(connectionUrl)
    .then(function (connection) {
      /* save conncetion in scope top level */
      dbConnection = connection;

      console.log('clear collection...');
      console.log('\n');
      
      return dbConnection
        .collection(collectionName)
        .removeAsync()
    })
    .then(function () {
      console.log('filling collection with nesessary data...');
      console.log('\n');

      return dbConnection
        .collection(collectionName)
        .insertManyAsync(data);
    })
    .catch(function(error) {
      console.error(error);
    })
    .finally(function () {
      console.log('done!');
      dbConnection.close();
    });
}

/**
 * 
 * @param {*} relatedPath 
 */
function resolvePath (relatedPath) {
  return path.resolve(process.cwd(), relatedPath);
}

/**
 * 
 * @param {*} config 
 */
function getConnectionUrl (config) {
  return [
    'mongodb://', 
    config.ip, 
    ':', 
    config.port, 
    '/', 
    config.dbName
  ].join('');
} 

