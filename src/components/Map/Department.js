import React from 'react';

<<<<<<< HEAD
const Department = ({ /* number ,*/ points, code, color, onDepartmentClick }) => {
	const handleClick = function() {
		onDepartmentClick(code);
		console.log('Département n°', code);
=======
const Department = ({ number, points, color, onDepartmentClick }) => {
	const handleClick = function() {
		onDepartmentClick(number);
>>>>>>> ef539d5c642eecfd1290932b42b19cad88461c4a
	};

	return (
		<path
			onClick={() => {
				handleClick();
			}}
<<<<<<< HEAD
			id={code}
=======
			id={number}
>>>>>>> ef539d5c642eecfd1290932b42b19cad88461c4a
			data-name="department"
			className="department"
			d={points}
			// style={{ fill: color }}
			fill="#437EBA"
			stroke="white"
			strokeWidth="0.5"
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	);
};

export default Department;
