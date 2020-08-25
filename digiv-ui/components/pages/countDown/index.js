import React, { useState, useEffect } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import "@styles/pages/countdown.scss";
import { DigivButton } from "@digivfe/react-component-libs";

export default function countDown() {
	const [date, setDate] = useState("2020/09/09 23:55:00");
	const [timeLeft, setTimeLeft] = useState([]);
	const [interval, setStateInterval] = useState();

	const timeCounter = () => {
		const currentDate = new Date(),
			time = new Date(date),
			diff = Math.round((time - currentDate) / 1000),
			days = Math.floor(diff / (24 * 60 * 60)),
			surplus = diff - days * (24 * 60 * 60),
			hrs = Math.floor(surplus / (60 * 60)),
			surplushrs = surplus - hrs * (60 * 60),
			min = Math.floor(surplushrs / 60),
			sec = surplushrs - min * 60;

		setTimeLeft([days, hrs, min, sec]);
	};

	const TimeCountdown = ({ time }) => {
		return time.map((val, index) => (
			<div key={index} className='countdown__item countdown__item_time'>
				{val < 1 ? "00" : val < 10 ? "0" + val : val}
			</div>
		));
	};

	useEffect(() => {
		setStateInterval(setInterval(timeCounter, 1000));
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<main className='countdown-content min-w-full min-h-full '>
			<div className='h-screen flex  flex-col justify-center items-center'>
				<div className='countdown-holder mb-16'>
					<div className='countdown-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
						<TimeCountdown time={timeLeft} />
					</div>
					<div className='countdown-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
						<div className='countdown__item countdown__item_title'>Hari</div>
						<div className='countdown__item countdown__item_title'>Jam</div>
						<div className='countdown__item countdown__item_title'>Menit</div>
						<div className='countdown__item countdown__item_title'>Detik</div>
					</div>
				</div>
				<img
					className=' countdonw-logo w-32 sm:w-16 md:w-48 lg:w-64'
					src='logo/adira_logo.svg'></img>
				{/* <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500"></div> */}
				<DigivButton label="hahahah" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-xl"/>
			</div>
		</main>
	);
}
