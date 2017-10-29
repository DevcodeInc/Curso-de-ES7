function simpleLog(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
		console.log(`Arguments for ${name}: ${args}`);
		return original.apply(this, args);
	};
  return descriptor;
}

function log(message) {
  return function decorator(target, name, descriptor) {
		// original function 
    const original = descriptor.value;

		// check it's a function
    if (typeof original === 'function') {
      descriptor.value = function(...args) {
				console.log(message);
        console.log(`Arguments for ${name}: ${args}`);  
			  return original.apply(this, args);
      };
    }
    return descriptor;
  };
}

export {
	log,
	simpleLog
};