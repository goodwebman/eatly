'use client'
import { motion } from 'framer-motion'

const Download = () => {
	return (
		<section>
			<div className='flex max-[1000px]:flex-col-reverse justify-evenly !pt-[100px] !pb-[120px] container_ items-center  border-b border-[#cbcbcb] gap-[100px] !px-[140px]'>
				<div className='mobile__sticks relative flex-shrink-[1]'>
					<img
						className='min-h-[609px] min-w-[304px] object-fill'
						src='/phone.png'
						alt='mobile screen'
					/>
				</div>

				<motion.div
					initial='hidden'
				
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.4 }}
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 },
					}}
					className='max-[1000px]:text-center'
				>
					<h2 className='text-left m-[0_0_60px] font-[600] poppins text-[45px] text-[#323142] leading-[58px] max-[1000px]:text-[35px] max-[1000px]:mb-[40px]'>
						Premium <span className='text-[#6c5fbc]'>Quality</span> For Your
						Health
					</h2>
					<ul className='list-disc text-[20px] flex flex-col gap-[28px]  text-[#606060] mb-[25px] leading-[30px]'>
						<li>
							Premium quality food is made with ingredients that are packed with
							essential vitamins, minerals.
						</li>
						<li>
							These foods promote overall wellness by support healthy digestion
							and boosting immunity
						</li>
					</ul>
					<a
						className='inline-flex font-[500] text-[18px] text-[#f9f9f9] bg-[#6c5fbc] p-[20px_25px] rounded-[10px] relative gap-[5px] mobile__button'
						href='/'
					>
						{' '}
						Download
						<svg
							className='w-[19px] h-[19px] stroke-white fill-none pt-[5px]'
							viewBox='0 0 19 19'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 9.90186H17.8041'
								strokeWidth='2.25773'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
							<path
								d='M9.90234 2L17.8044 9.90206L9.90234 17.8041'
								strokeWidth='2.25773'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
						</svg>
					</a>
				</motion.div>
			</div>
		</section>
	)
}

export default Download
