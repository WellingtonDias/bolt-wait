module.exports = function(TASK,TIME)
{
	if (bolt.isNotNumber(TIME)) bolt.throwError(`wait: Bad formatted task "${TASK}"`);
	return new Promise(function(RESOLVE) {setTimeout(function() {RESOLVE(undefined)},TIME)});
};
