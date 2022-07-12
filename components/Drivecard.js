import React from "react";

export const Drivecard = ({ link, started, para, title }) => {
	return (
		<div className="drives__main-funds-container">
			<div className="drives__main-funds-container-heading">
				<h2>{title}</h2>
			</div>
			<div className="drives__main-funds-container-desc">
				<p>{para}</p>
			</div>
			<div className="end-part">
				<div className="date">Stared on - {started}</div>
				<div className="donate-funds">
					<a href={link}>Donate</a>
				</div>
			</div>
		</div>
	);
};
