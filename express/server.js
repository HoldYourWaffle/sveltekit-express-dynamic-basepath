import express from 'express';
import { handler } from '../sveltekit/build/handler.js';

// See: https://svelte.dev/docs/kit/adapter-node#Custom-server

const app = express();

// Add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
	res.end('ok');
});

// Delegate to SvelteKit, path could be coming from anywhere
app.use('/sveltekit', handler);

app.listen(3000, () => {
	console.log('listening on port 3000');
});
