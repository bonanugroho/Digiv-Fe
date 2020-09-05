import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function ModalAlert(props) {
	const { isOpen, type, message, onClose ,onConfirm} = props;
	return (
		<>
			{isOpen && (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className=' modal-content min-w-3xl relative w-auto my-6 mx-auto max-w-3xl flex justify-center'>
							<div className=' modal-content min-w-full-border-0 rounded-lg shadow-lg relative flex flex-col w-8/12 bg-white outline-none focus:outline-none'>
								<div className='relative p-6 flex-auto flex justify-center flex-col items-center'>
									{type == "success" ? (
										<div className='w-16 h-16 bg-green-500 rounded-full flex justify-center items-center '>
											<FontAwesomeIcon
												className='text-white text-6xl '
												icon={faCheck}
												size='2x'
											/>
										</div>
									) : (
										<div className='w-16 h-16 bg-red-500 rounded-full flex justify-center items-center '>
											<FontAwesomeIcon
												className='text-white text-6xl '
												icon={faTimes}
												size='2x'
											/>
										</div>
									)}

									<p className='my-4 text-gray-600 text-lg leading-relaxed text-center '>
										{message}
									</p>
								</div>
								<div className='flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b'>
									<button
										className='w-full bg-blue-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
										type='button'
										style={{ transition: "all .15s ease" }}
										onClick={onConfirm}>
										Oke
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			)}
		</>
	);
}
