import React from 'react';
import styled from 'styled-components';

import { ApiService } from '../../components';
// import { devices } from '../../utilities';

const Map = (props /* { onDistrictClick, minAndMax, min, max } */) => {
	const { theme } = props;

	const items = ApiService('posts');

	// const list = items['hydra:member'];

	return <MapStyled className="map">JE SUIS LA MAP !!!</MapStyled>;
};

// STYLE
const MapStyled = styled.section``;

export default Map;
