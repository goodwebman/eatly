'use client'
import { motion } from 'framer-motion'
import CustomButton from '../CustomButton'

const Hero = () => {
	return (
		<section className='p-[220px_0px_120px]'>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
				className='container_ flex max-[770px]:flex-col justify-between items-center gap-[10px]'
			>
				{/* left text */}
				<div className='flex-[1_1_49%] max-[770px]:text-center'>
					<p className='pl-[60px] inline-block relative users_line text-gray-400/50 uppercase font-[600] m-[0_0_20px] tracking-[2px]'>
						Over 1000 Users
					</p>

					<h1 className='font-[600] text-[75px] leading-[1.2] text-[#201F1F] tracking-[-3px] m-[0_0_20px] max-[900px]:text-[60px]'>
						Enjoy Foods All Over The{' '}
						<span className='text-[#6c5fbc]'>World</span>
					</h1>

					<p className='font-[400] text-[#676767] text-[18px] inter opacity-[0.7] m-[0_0_55px] leading-[1.56]'>
						EatLy help you set saving goals, earn cash back offers, Go to
						disclaimer for more details and get paychecks up to two days early.{' '}
						<span className='text-[#6c5fbc]'>Get a $20 bonus.</span>{' '}
					</p>

					<div className='gap-[18px] max-[380px]:flex-col flex  mb-[40px] max-[900px]:justify-center'>
						<CustomButton
							title='Get Started'
							className='p-[18px_28px] rounded-[9px] !font-[500]'
						></CustomButton>

						<CustomButton
							title='Go Pro'
							className='p-[18px_28px] !border-[#6c5fbc]  bg-[#f9f9f9] !font-[500] !text-[#6c5fbc] rounded-[9px]'
						></CustomButton>
					</div>

					<div className='flex items-center gap-[30px] max-[900px]:justify-cente '>
						<div>
							<img src='/trustpilot.svg' alt='trustpilot-logo' />
						</div>
						<div className='flex items-center gap-[6px]'>
							<ul className='flex gap-[5px]'>
								<li>
									<img src='/star.svg' alt='star' />
								</li>
								<li>
									<img src='/star.svg' alt='star' />
								</li>
								<li>
									<img src='/star.svg' alt='star' />
								</li>
								<li>
									<img src='/star.svg' alt='star' />
								</li>
								<li>
									<img src='/star.svg' alt='star' />
								</li>
							</ul>

							<p className='font-[400] text-[16px] leading-[1.5] text-[#334155] opacity-[0.7]'>
								4900+
							</p>
						</div>
					</div>
				</div>

				{/*right img */}
				<div className='relative max-w-[40%] max-[767px]:max-w-full  max-[767px]:mt-[80px] mr-[9.5%] circle_img'>
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
			</motion.div>
		</section>
	)
}

export default Hero
