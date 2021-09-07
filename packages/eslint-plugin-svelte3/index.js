const { preprocess } = require('./preprocess');
const { postprocess } = require('./postprocess');

module.exports = { processors: { svelte3: { preprocess, postprocess, supportsAutofix: true } } };
