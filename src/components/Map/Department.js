import React from 'react';

const Department = ({ number, points, color, onDepartmentClick }) => {
	const handleClick = function() {
		onDepartmentClick(number);
	};

	return (
		<path
			onClick={() => {
				handleClick();
			}}
			id={number}
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
