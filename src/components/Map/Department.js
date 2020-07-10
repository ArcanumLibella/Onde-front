import React from 'react';

const Department = ({ /* number ,*/ points, code, color, onDepartmentClick }) => {
	const handleClick = function() {
		onDepartmentClick(code);
		console.log('Département n°', code);
	};

	return (
		<path
			onClick={() => {
				onDepartmentClick(code);
			}}
			id={code}
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
