// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);
 
/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);

const coffee= require('./coffee');
console.log(coffee);

//mengimpor core module http
const http = require('http');