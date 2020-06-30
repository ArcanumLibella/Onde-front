/* 
* UTILITIES
*/

// Function to transform px to rem
const rem = (px) => {
	const remSize = px / 16;
	return remSize + 'rem';
};

export default rem;
