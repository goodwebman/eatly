import CustomButton from '../CustomButton'

const Hero = () => {
	return (
		<section className='p-[220px_0px_120px]'>
			<div className='container_ flex justify-between items-center gap-[10px]'>
				{/* left text */}
				<div className='flex-[1_1_49%]'>
					<p className='pl-[60px] relative users_line text-gray-400/50 uppercase font-[600] m-[0_0_20px] tracking-[2px]'>
						Over 1000 Users
					</p>

					<h1 className='font-[600] text-[75px] leading-[1.2] text-[#201F1F] tracking-[-3px] m-[0_0_20px]'>
						Enjoy Foods All Over The{' '}
						<span className='text-[#6c5fbc]'>World</span>
					</h1>

					<p className='font-[400] text-[18px] inter opacity-[0.7] m-[0_0_55px] leading-[1.56]'>
						EatLy help you set saving goals, earn cash back offers, Go to
						disclaimer for more details and get paychecks up to two days early.{' '}
						<span className='text-[#6c5fbc]'>Get a $20 bonus.</span>{' '}
					</p>

					<div className='gap-[18px] flex'>
						<CustomButton
							title='Get Started'
							className='p-[18px_28px] rounded-[11px] !font-[500]'
						></CustomButton>

						<CustomButton
							title='Go Pro'
							className='p-[18px_28px] border-[#6c5fbc]  bg-[#f9f9f9] !font-[500] !text-[#6c5fbc] rounded-[11px]'
						></CustomButton>
					</div>


					<div></div>
				</div>

				{/*right img */}
				<div className='relative max-w-[40%] mr-[9.5%] circle_img'>
					<div className='relative decor__spine-inner'>
						<img src='chicken-hell.png' alt='chiken hell' />
					</div>
					<div className='absolute bottom-[90%] left-[40%] w-[73%]'>
						<div className='relative bg-[#ffffff] rounded-[16px] shadow-2xl p-[5px_15px] flex items-center decor__meal-inner'>
							<div className='max-w-[23%] mr-[20px]'>
								<img
									className='max-w-[100%]'
									src='chicken-hell.png'
									alt='Chiken hell image'
								/>
							</div>
							<div className='w-[100%]'>
								<h2 className='font-[600] text-[16px] text-[#323142] m-[0_0_5px]'>
									Chiken Hell
								</h2>
								<p className='font-[500] text-[10px] text-[#323142] m-[0_0_5px]'>
									On The Way
								</p>
								<div className='font-[500] text-[11px] text-[#acadb9] text-right'>
									3:09 PM
								</div>
							</div>
						</div>
					</div>

					<div className='absolute bottom-[-15%] left-0 max-w-[50%]'>
						<div
							className='bg-white shadow-2xl border-[#edf2f7] border-[1px] py-[5px] rounded-[16px] decor__graph-inner
'
						>
							<img src='/modal-graphic.png' alt='graphic' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
