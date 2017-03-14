/* server config object.Provides server ip and port */

const server = {
  port: process.env.PORT || 3000,
  ip: process.env.IP || '127.0.0.1'
};

export { server }
 