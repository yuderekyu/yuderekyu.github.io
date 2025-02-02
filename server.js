import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

// https://github.com/nodejs/help/issues/2907#issuecomment-757446568
// get resolved path to the file
const __filename = fileURLToPath(import.meta.url);
// get name of directory
const __dirname = path.dirname(__filename);
console.log(__dirname);

const server = fastify({
  logger: {
    level: 'warn'
  }
});

server.register(fastifyStatic, {
  root: __dirname
});

server.get('/', async (request, reply) => {
  return reply.sendFile("index.html");
});

const port = process.env.PORT ?? 3000;
server.listen({ port }, (error, address) => {
	if (error) {
		console.error(error);
		process.exit(1);
	}

	console.log(`Listening at ${address}`);
});
