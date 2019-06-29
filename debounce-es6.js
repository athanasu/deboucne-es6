const debounceNoImmediate = (fn, delay = 1000) => {
  let timeout;

  return (...args) => {
    const functionCall = () => fn.apply(this, args);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, delay);
  }
}

const debounceImmediate = (fn, delay = 1000, immediate = false) => {
	let timeout;
	return (...args) => {
		const functionCall = () => {
			timeout = null;
			if (!immediate) {
				fn.apply(this, args);
			}
		};
		
      	const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(functionCall, delay);
		if (callNow) { 
			fn.apply(this, args);
		}
	};
};

let testDebounceNoImmediate = debounceNoImmediate(() => console.log('Debounce NO immediate'), 5000)
testDebounceNoImmediate()

let testDebounceImmediate = debounceImmediate(() => console.log('Debounce WITH immediate'), 6000)
testDebounceImmediate()
