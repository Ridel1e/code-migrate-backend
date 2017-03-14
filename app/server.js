import {app} from './app';
import {config} from './config';

/* run application server */
app.listen(config.server.port, () => 
  console.log(`server listening on port ${config.server.port}`));
