// FUNCTIONS

// To convert px to rem :
// font-size: ${rem(10)};
export function rem(px) {
	const remSize = px / 16;
	return remSize + 'rem';
}
