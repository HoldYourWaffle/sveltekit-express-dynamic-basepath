import express from 'express';
import { handler } from '../sveltekit/build/handler.js';

// See: https://svelte.dev/docs/kit/adapter-node#Custom-server

const app = express();

// Add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
	res.end('ok');
});

// Workaround for sveltejs/kit#13702
app.all('/sveltekit', (req, res, next) => {
	if (!req.url.endsWith('/')) {
		res.redirect(308, '/sveltekit/');
	} else {
		next();
	}
});

// Delegate to SvelteKit, path could be coming from anywhere
app.use('/sveltekit', handler);

app.listen(3000, () => {
	console.log('listening on port 3000');
});
