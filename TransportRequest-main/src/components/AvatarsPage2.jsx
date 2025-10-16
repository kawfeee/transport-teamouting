import React from "react";
import "../styles/Avatars.css";
import Header from './Header';
import EmployeeProfile from './EmployeeProfile';
import RequiredInfoPage2 from './RequiredInfoPage2';


const AvatarsPage2 = () => {
	const employeeData = {
		initials: "MK",
		name: "Manoj Kandan M",
		genId: "255048878",
		email: "Manoj.kandan@partner.samsung.com",
		designation: "Outsourcing",
		division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
		manager: "Ravindra S R (06786669)",
		isOnline: true,
	};

	return (
		<div className="avatars-container">
			<Header
				breadcrumb="My Workspace > Transport Request"
				title="Transport Request-Emplyoee Request"
			/>

			<EmployeeProfile
				employee={employeeData}
			/>

			<RequiredInfoPage2 />

			
		</div>
	);
};

export default AvatarsPage2;