import React from 'react';
const pins = require('../../utilities/pins');

const Pin = ({ id }) => {
	const data = pins.tag;
	var parser = new DOMParser();
	var doc = parser.parseFromString(data, 'application/xml');
	const content = doc.getElementById(id);
	const icone = content.querySelector('#icone').innerHTML;
	const text = content.querySelector('#info').innerHTML;

	return (
		<g className="pin">
			<g className="pin__pin" dangerouslySetInnerHTML={{ __html: icone }} />
			<g className="pin__content" dangerouslySetInnerHTML={{ __html: text }} />
		</g>
	);
};

export default Pin;
