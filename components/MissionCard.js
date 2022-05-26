import Link from "next/link";
import Image from "next/image";

export default function MissionCard({ image }) {
	return (
		<div className="mission__card-main">
			<div className="mission-card">
				<div className="mission-card-img-container">
					<Image className="mission-card-img" src={image} alt="image" width="400px" height="250px" />
				</div>
				<div className="mission-card-info">
					<h2 className="mission-card-title">Heading</h2>
					<p className="mission-card-description">
						Anaayat is an organisation working for the welfare 
						of the less efficient and to eradicate poverty.

					</p>
				</div>
			</div>
		</div>
	);
}
