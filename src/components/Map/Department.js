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
			style={{ fill: color }}
			fill="rgb(68,82,197)"
		/>
	);
};

export default Department;
