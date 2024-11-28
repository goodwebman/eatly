'use client'

import { useState } from 'react'
import CustomButton from './CustomButton'
import NavModal from './NavModal'

const Navigation = () => {
	const [choosen, setChoosen] = useState('Menu')
	const [showModal, setShowModal] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const handleModalClose = () => {
		setShowModal(false)
	}

	const handlePasswordToggle = () => {
		setShowPassword(!showPassword)
	}

	return (
		<nav className='text-[#606060] p-[30px_0px_25px] inter '>
			<div className='flex items-center container_ pb-6 border-b-[2px] border-[#cbcbcb]'>
				<div>
					<a href='/'>
						<img
							src='/Logo.svg'
							alt='logo'
							className='w-[110px] h-[50px] whitespace-nowrap'
						/>
					</a>
				</div>
				<ul className='flex items-center gap-[35px] pl-[33px] font-medium text-[18px] duration-300 transition-colors'>
					<li className='hover:text-[#5C4EAE]'>
						<a href=''>Menu</a>
					</li>
					<li className='hover:text-[#5C4EAE]'>
						<a href=''>Blog</a>
					</li>
					<li className='hover:text-[#5C4EAE]'>
						<a href=''>Pricing</a>
					</li>
					<li className='hover:text-[#5C4EAE]'>
						<a href=''>Contact</a>
					</li>
				</ul>
				<div className='flex items-center  gap-[40px] ml-auto'>
					<button className='text-[#606060] font-[700] text-[18px]'>
						Login
					</button>

					<CustomButton
						onClick={() => setShowModal(true)}
						title='Sign up'
						className='hover:text-[#6C5FBC] hover:bg-[#F9F9F9] hover:border hover:border-[#6C5FBC] '
					/>

					{showModal && (
						<NavModal onClose={handleModalClose} active={showModal}>
							{/* left side */}
							<div className='flex overflow-auto'>
								<div className='bg-white w-full overflow-y-auto px-[15px] py-[32px]'>
									<div className='flex items-center justify-between'>
										<a href='/'>
											<img
												src='/Logo.svg'
												alt='logo'
												className='w-[110px] h-[50px] whitespace-nowrap'
											/>
										</a>

										<button
											onClick={handleModalClose}
											className='text-[35px] font-bold text-[#6c5fbc] hidden max-[990px]:block'
										>
											×
										</button>
									</div>
									<form className='pt-[65px] max-w-[63%] m-[0_auto]'>
										<div className='text-center font-bold text-[35px] tracking-tighter text-[#323142] leading-[1.25]'>
											Sign up to Eatly
										</div>
										<div className='items-center flex justify-center gap-[16px] pt-[35px]'>
											<button className='px-[85px]  bg-[#F5F5F5] py-[10px] rounded-xl hover:border-[#6c5fbc]'>
												<img
													className='w-[25px] h-[30px] '
													src='/google.svg'
													alt=''
												/>
											</button>
											<button className='px-[85px]  bg-[#F5F5F5] py-[10px] rounded-xl'>
												<img
													className='w-[25px] h-[30px]'
													src='/apple.svg'
													alt=''
												/>
											</button>
										</div>

										<span className='block text-[#005A64]/35 font-[500] text-[20px] pb-[35px] uppercase text-center pt-[23px]'>
											OR
										</span>

										<div className='flex flex-col'>
											<input
												className='w-full bg-[#f5f5f5] h-[75px] rounded-[13px] mb-[25px] pl-[5%] focus:outline-[#6c5fbc] placeholder:text-[#181f55] text-[17px] text-[#6c5fbc] font-semibold'
												type='text'
												placeholder='Full Name'
											/>
											<input
												className='w-full bg-[#f5f5f5] h-[75px] rounded-[13px] mb-[25px] pl-[5%] focus:outline-[#6c5fbc] placeholder:text-[#c2c3cb]  font-semibold text-[17px] text-[#6c5fbc]'
												type='email'
												placeholder='Email'
											/>
											<div className='relative'>
												<input
													className='w-full bg-[#f5f5f5] h-[75px] rounded-[13px] mb-[25px] pl-[5%] focus:outline-[#6c5fbc] placeholder:text-[#c2c3cb] font-semibold text-[17px] text-[#6c5fbc]'
													type={`${showPassword ? 'text' : 'password'}`}
													name='password'
													placeholder='Password'
												/>

												<div
													onClick={handlePasswordToggle}
													className={`absolute top-[30%] right-[20px] cursor-pointer ${
														showPassword ? '' : 'modal__form-decor'
													}`}
												>
													<img src='eye.svg' alt='eye' />
												</div>
											</div>
										</div>

										<CustomButton
											className='bg-[#6c5fbc] w-full font-medium py-[25px] border-transparent border-[1px] hover:bg-white hover:border-[#6c5fbc] hover:text-[#6c5fbc]'
											title='SIGN UP'
										/>

										<div className='mt-2 flex justify-center text-[#3e3e3e] font-[600] text-[19px] gap-4'>
											<p>Already Have An Account?</p>
											<button className='text-[#6c5fbc]'>Log In</button>
										</div>
									</form>

									<div className='flex justify-between mt-[65px] font-[600] text-[20px]'>
										<a href='/'>Privacy Police</a>
										<a href='/'>Copyright 2022</a>
									</div>
								</div>
								{/* r side */}
								<div className='bg-[#6c5fbc] w-[720px] py-8 px-[15px]'>
									<div>
										<button
											onClick={handleModalClose}
											className='flex text-[35px] font-bold text-[#fff] max-[990px]:hidden  ml-auto'
										>
											×
										</button>
									</div>
								</div>{' '}
							</div>
						</NavModal>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navigation
