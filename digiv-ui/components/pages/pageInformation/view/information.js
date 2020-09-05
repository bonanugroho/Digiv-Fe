import React from "react";
import Alert from "@components/element/alert";
import logoDanamon from "@assets/images/logo/logo-danamon.png";

export default function FormRegistration(props) {
	const {
		onClcikSubmitVideo,
		errorRegistration,
	} = props;

	return (
		<>
			<div className=' w-10/12 md:w-8/12 lg:w-8/12 xl:w-6/2 content-reservation'>
				<div className='mx-auto w-full '>
					<div className=' mx-auto w-full'>
						<div className='py-4 px-8 text-black text-4xl font-bold text-white'>
							<h1>Information</h1>
						</div>
						<div className='px-8 text-black'>
							{errorRegistration?.status && (
								<Alert message={errorRegistration?.message} />
							)}
						</div>
						<div className='py-4 px-8 text-white'>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum.
							</p>
							<button
								className=' w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded my-4'
								onClick={onClcikSubmitVideo}
								type='submit'>
								Yuk Masuk 
							</button>
						</div>
						<div className='block lg:hidden xl:hidden md:hidden sm:block logo-sponsor-bottom'>
							<p className='text-xl text-white my-2'> di sponsori oleh : </p>
							<img className='w-12/12' src={logoDanamon}></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
