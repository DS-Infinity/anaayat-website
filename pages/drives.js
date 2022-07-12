import React from "react";
import { Drivecard } from "../components/Drivecard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import raisha from "../public/raisha.jpeg";
import { Footer } from "../components/Footer";
import pov from "../public/pov.jpeg";
import pov2 from "../public/pov2.jpeg";
import pov3 from "../public/pov3.jpeg";
import pov4 from "../public/pov4.jpeg";
import pov5 from "../public/pov5.jpeg";
import pov6 from "../public/pov6.jpeg";

export default function Drives() {
	return (
		<div className="drives__main">
			<Navbar />
			<div className="drives__main-photo">
				<h1 className="drives__main-heading">Drives</h1>
			</div>
			<div className="drives__main-photos">
				<div className="drives__main-photos-heading">
					<h1>Gallery</h1>
				</div>
				<div className="images-drives">
					<span>
						{" "}
						<Image
							src={pov}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>{" "}
					<span>
						{" "}
						<Image
							src={pov2}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov3}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov4}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov5}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov6}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
				</div>
				{/* <div className="images-drives">
					<Image src={raisha} alt="img" width="470px" height="400px" />
					<Image src={raisha} alt="img" width="470px" height="400px" />
				</div> */}
				{/* <div className="images-drives">
					<Image src={raisha} alt="img" width="470px" height="400px" />
					<Image src={raisha} alt="img" width="470px" height="400px" />
				</div> */}
			</div>
			<div className="drives__main-funds">
				<div className="drives__main-funds-heading">
					<h1>Fund Raiser</h1>
				</div>
				<Drivecard
					link={"https://forms.gle/8dQWNepQQmKPa5tcA"}
					started={"16th july"}
					para={
						'Anaayat Organisation is proud to announce that we are doing our very first drive, "Project Raahat" which involves distribution of summer coolers and other various food items as well as sharing economic knowledge to the poor labourers and workers who tirelessly work in the scroaching heat of Delhi. We are organising this drive in Hauz Khas Market on Saturday, 16th July 2022. We need your help to accomplish this mission in the form of donations for making better good. Kindly fill the below mentioned form and donate to our cause. Even your small amount counts as a way for betterment of society from Anaayat Organisation from Bifröst EdTech.'
					}
					title={"Raahat"}
				/>
				{/* <Drivecard
					link={"https://forms.gle/8dQWNepQQmKPa5tcA"}
					started={"16th july"}
					para={
						'Anaayat Organisation is proud to announce that we are doing our very first drive, "Project Raahat" which involves distribution of summer coolers and other various food items as well as sharing economic knowledge to the poor labourers and workers who tirelessly work in the scroaching heat of Delhi. We are organising this drive in Hauz Khas Market on Saturday, 16th July 2022. We need your help to accomplish this mission in the form of donations for making better good. Kindly fill the below mentioned form and donate to our cause. Even your small amount counts as a way for betterment of society from Anaayat Organisation from Bifröst EdTech.'
					}
					title={"Raahat"}
				/>
				<Drivecard
					link={"https://forms.gle/8dQWNepQQmKPa5tcA"}
					started={"16th july"}
					para={
						'Anaayat Organisation is proud to announce that we are doing our very first drive, "Project Raahat" which involves distribution of summer coolers and other various food items as well as sharing economic knowledge to the poor labourers and workers who tirelessly work in the scroaching heat of Delhi. We are organising this drive in Hauz Khas Market on Saturday, 16th July 2022. We need your help to accomplish this mission in the form of donations for making better good. Kindly fill the below mentioned form and donate to our cause. Even your small amount counts as a way for betterment of society from Anaayat Organisation from Bifröst EdTech.'
					}
					title={"Raahat"}
				/> */}
			</div>
			<Footer />
		</div>
	);
}
