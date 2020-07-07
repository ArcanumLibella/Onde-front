import React from 'react';

const Department = ({ /* number ,*/ points, code, color, onDepartmentClick, departments }) => {
	// const handleClick = function(code, departments) {
    //     // console.log(departments)
    //     let department = departments.find(department => department.code === code).id

    //     // console.log(department);
    //     // console.log('Département n°', code);
        
    //     return department;
	// };

	return (
		<path
			onClick={() => {
				onDepartmentClick(code, departments);
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
