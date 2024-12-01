import CustomButton from '../CustomButton'

const Hero = () => {
	return (
		<section className='p-[220px_0px_120px]'>
			<div className='container_'>
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

					<div>
						<CustomButton
							title='Get Started'
							className='p-[18px_28px] rounded-[12px]'
						></CustomButton>
					</div>
				</div>

				{/*right img */}
				<div></div>
			</div>
		</section>
	)
}

export default Hero
