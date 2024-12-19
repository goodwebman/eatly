'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import CustomButton from '../CustomButton'
import NavModal from './NavModal'

const Navigation = () => {
	const [showModal, setShowModal] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [chooseLogin, setChoosenLogin] = useState<boolean>(false)
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

	const pathname = usePathname()

	const navItems = [
		{ name: 'Menu', path: '/menu' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Pricing', path: '/pricing' },
		{ name: 'Contact', path: '/contact' },
	]

	const handleModalClose = () => {
		setChoosenLogin(!chooseLogin)
		setShowModal(!showModal)
	}

	const handlePasswordToggle = () => {
		setShowPassword(!showPassword)
	}

	const handleShowMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu)
	}

	return (
		<nav className='text-[#606060] p-[30px_0px_0px] inter fixed top-0 left-0 w-full z-40 bg-white '>
			<div className='container_'>
				<div className='flex items-center pb-6  border-b-[2px] border-[#cbcbcb] '>
					<div>
						<a href='/'>
							<img
								src='/Logo.svg'
								alt='logo'
								className='w-[110px] h-[50px] whitespace-nowrap'
							/>
						</a>
					</div>
					<ul className='flex items-center gap-[35px] pl-[33px] font-medium text-[18px] duration-300 transition-colors max-[770px]:hidden'>
						{navItems.map(item => (
							<li key={item.path}>
								<Link
									href={item.path}
									className={` ${
										pathname === item.path
											? 'underline decoration-[2px] text-[#6C5FBC] underline-offset-[8px]'
											: ''
									} text-[#606060] hover:text-[#6C5FBC] duration-300`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>

					{/* mobile menu */}

					<nav
						className={`${
							showMobileMenu ? 'right-0' : 'right-[-100%]'
						}  hidden max-[770px]:block fixed top-0  w-[60%] h-full bg-[#f9f9f9] overflow-auto z-10 p-[70px_10px_20px] duration-300`}
					>
						<ul className='pt-[30px]  font-[500] text-[35px] text-[#606060] flex flex-col gap-[40px]'>
						{navItems.map(item => (
							<li key={item.path}>
								<Link
									href={item.path}
									className={` ${
										pathname === item.path
											? 'underline decoration-[2px] text-[#6C5FBC] underline-offset-[8px]'
											: ''
									} text-[#606060] hover:text-[#6C5FBC] duration-300`}
								>
									{item.name}
								</Link>
							</li>
						))}

							<li className='hidden max-[450px]:block'>
								<button
									onClick={() => setChoosenLogin(true)}
									className='text-[#606060] font-[700] text-[30px]'
								>
									Login
								</button>
							</li>
							<li className='hidden max-[450px]:block'>
								<CustomButton
									onClick={() => setShowModal(true)}
									title='Sign up'
									className='hover:text-[#6C5FBC] hover:bg-[#F9F9F9] hover:border hover:border-[#6C5FBC] p-[18px_27px] text-[30px]'
								/>
							</li>
						</ul>
					</nav>

					<div className='hidden min-[450px]:flex items-center  gap-[40px] ml-auto '>
						<button
							onClick={() => setShowModal(true)}
							onClickCapture={() => setChoosenLogin(true)}
							className='text-[#606060] font-[700] text-[18px]'
						>
							Login
						</button>

						<CustomButton
							onClick={() => setShowModal(true)}
							title='Sign up'
							className=' hover:bg-[#F9F9F9] hover:border hover:text-[#6C5FBC] hover:border-[#6C5FBC] '
						/>
					</div>

					<button
						onClick={handleShowMobileMenu}
						className={`ml-[30px] max-[450px]:ml-auto  relative hidden w-[30px] h-[20px] z-10 header__burger max-[770px]:block ${
							showMobileMenu ? 'header__burger-active' : ''
						} `}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>

			{showModal && (
				<NavModal onClose={handleModalClose} active={showModal}>
					<button
						onClick={handleModalClose}
						className='absolute right-[20px] top-[20px] z-20 text-[35px] font-bold text-[#fff] max-[990px]:text-[#6c5fbc]  '
					>
						×
					</button>

					{/* left side */}

					<div className='flex'>
						<div className='bg-white flex-col flex  overflow-y-auto px-[15px] py-[32px]  w-[1270px] max-[990px]:w-[600px] max-[1410px]:w-[800px] max-[635px]:w-[400px] max-[380px]:w-[350px]'>
							<div className='flex items-center justify-between'>
								<a href='/'>
									<img
										src='/Logo.svg'
										alt='logo'
										className='w-[110px] h-[50px] whitespace-nowrap'
									/>
								</a>
							</div>
							<form className='pt-[65px] max-w-[63%] m-[0_auto]'>
								<div className='text-center font-bold text-[35px] tracking-tighter text-[#323142] leading-[1.25] max-[650px]:text-[30px]'>
									Sign up to Eatly
								</div>
								<div className='items-center flex justify-center gap-[16px] pt-[35px]'>
									<button className='px-[85px] max-[1410px]:px-[60px] max-[640px]:px-[40px]  bg-[#F5F5F5] py-[13px] rounded-xl hover:border-[#6c5fbc]'>
										<img
											className='max-w-[25px] max-h-[30px] '
											src='/google.svg'
											alt=''
										/>
									</button>
									<button className='px-[85px]  max-[1410px]:px-[60px] max-[640px]:px-[40px]  bg-[#F5F5F5] py-[13px] rounded-xl'>
										<img
											className='max-w-[25px] max-h-[30px]'
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
										className='w-full bg-[#f5f5f5] h-[75px] rounded-[13px] mb-[25px] pl-[5%] focus:outline-[#6c5fbc] placeholder:text-[#c3c3cb] text-[17px] text-[#6c5fbc] font-semibold'
										type='text'
										placeholder='Full Name'
									/>
									<input
										className='w-full bg-[#f5f5f5] h-[75px] rounded-[13px] mb-[25px] pl-[5%] focus:outline-[#6c5fbc] placeholder:text-[#c3c3cb]  font-semibold text-[17px] text-[#6c5fbc]'
										type='email'
										placeholder='Email'
									/>
									<div className='relative'>
										<input
											className='w-full bg-[#f5f5f5] h-[75px] rounded-[13px] mb-[25px] pl-[5%] focus:outline-[#6c5fbc] placeholder:text-[#c3c3cb] font-semibold text-[17px] text-[#6c5fbc]'
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
									title={`${chooseLogin ? 'SIGN IN' : 'SIGN UP'}`}
								/>

								<div className='mt-2 flex justify-center text-[#3e3e3e] font-[600] text-[19px] gap-4 max-[650px]:text-[12px]'>
									<p className='whitespace-nowrap '>
										{chooseLogin
											? 'Create A New Account?'
											: 'Already Have An Account?'}
									</p>
									<button
										onClick={handleModalClose}
										className='text-[#6c5fbc] whitespace-nowrap'
									>
										{chooseLogin ? 'Sign up' : 'Login'}
									</button>
								</div>
							</form>

							<div className='flex justify-between mt-[65px] font-[600] text-[20px] max-[650px]:text-[15px]'>
								<a href='/'>Privacy Police</a>
								<a href='/'>Copyright 2022</a>
							</div>
						</div>
						{/* r side */}
						<div className='bg-[#6c5fbc] relative flex-col flex  py-8 px-[15px] max-[990px]:hidden items-center w-full'>
							<div className='mb-[100px] relative pt-[200px] items-center modal-decor modal__decor'>
								<div className='relative '>
									<img className='align-top' src='/modal-food.png' alt='food' />
									<div className='left-[32%] absolute bottom-[90%] width-[73%]'>
										<div className='relative flex bg-white rounded-[16px] shadow-2xl w-[300px]  items-center py-[5px] px-[15px]'>
											<div className='max-w-[23%] mr-[20px]'>
												<img
													className='max-w-[100%] align-top'
													src='/modal-plate.png'
													alt='modal-plate'
												/>
											</div>
											<div className='w-full'>
												<h2 className='font-[600] text-[#323142] mt-[6px] text-[16px]'>
													Chiken Hell
												</h2>
												<p className='font-[500] text-[10px] text-[#323142] '>
													On The Way
												</p>
												<div className='text-right text-[11px] text-[#acadb9] font-[500]'>
													3:09 PM
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='absolute bottom-[-15%] left-0 max-w-[50%]'>
									<div
										className='bg-white shadow-2xl border-[#edf2f7] border-[1px] py-[5px] rounded-[16px]
'
									>
										<img src='/modal-graphic.png' alt='graphic' />
									</div>
								</div>
							</div>

							<div className='text-center text-white'>
								<h1 className='font-[600] text-[40px] m-[0_0_20px] relative modal-circle'>
									Finds Foods With Love
								</h1>
								<p className='font-[500] text-[14px] opacity-[0.7]'>
									Eatly Is The Food Delivery Dashboard And Having More Than 2K+
									Dishes <br /> Including Asian, Chinese, Italians And Many
									More. Our Dashboard Helps <br /> You To Manage Orders And
									Money.
								</p>
							</div>
						</div>{' '}
					</div>
				</NavModal>
			)}
		</nav>
	)
}

export default Navigation
