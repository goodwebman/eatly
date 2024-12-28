'use client'
import { motion } from 'framer-motion'

const PricingTablet = () => {
	return (
		<section>
			<div className='container_'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					className='shadow-2xl mt-[750px] max-[1200px]:mt-[400px] max-[1000px]:mt-[0px] mb-[150px] border-[2px] border-[#F9F9F9] rounded-[12px] p-[40px_60px] grid grid-cols-3 gap-8'
				>
					<div className='flex flex-col text-center gap-[18px] md:text-left '>
						<h2 className='text-[#282828] font-[600] text-[28px] leading-[34px]'>
							Pricing
						</h2>
						<p className='font-[500] text-[13px] text-[#6E757C]'>
							Affordable Basic <br /> & Pro Plans
						</p>
					</div>

					<div className='flex flex-col text-center pl-[150px] gap-[18px] md:text-left'>
						<h3 className='text-[#282828] gap-[18px] font-[600] text-[28px] leading-[34px]'>
							Basic
						</h3>
						<p className='font-[500] text-[13px] text-[#6E757C]'>
							Completely 100% <br /> Free Plan
						</p>
						<div className=' py-6 '>
							<span className='text-[64px] text-left relative  font-[500] text-gray-900 pricing_dollar '>
								0
							</span>
							<span className='text-gray-500 text-sm'>/month</span>
						</div>
					</div>

					<div className='flex flex-col text-center pl-[130px] gap-[18px] md:text-left'>
						<h3 className='text-[#282828] font-[600] text-[28px] leading-[34px]'>
							Premium
						</h3>
						<p className='font-[500] text-[13px] text-[#6E757C]'>
							Amazing Premium <br /> Features Plan
						</p>
						<div className=' py-6'>
							<span className='text-[64px] pricing_dollar font-[500] relative text-gray-900'>
								5
							</span>
							<span className='text-gray-500 text-sm'>/month</span>
						</div>
					</div>

					<div className='col-span-3  border-gray-200 mt-8 pt-8 border-t-[2px]'>
						<h4 className='text-[24px] font-[600] text-[#272E35]  mb-[40px]'>
							Core features
						</h4>
						<div className='grid grid-cols-3 '>
							<div className='flex flex-col gap-[20px] text-[#606060]/50 text-[22px]'>
								<p className='text-gray-700'>Support 24/7</p>
								<p className='text-gray-700 mt-2'>Fast Delivery</p>
								<p className='text-gray-700 mt-2'>20% Off Food Deals</p>
								<p className='text-gray-700 mt-2'>Transaction History</p>
								<p className='text-gray-700 mt-2'>Weekend Deals</p>
								<p className='text-gray-700 mt-2'>Dashboard Access</p>
								<p className='text-gray-700 mt-2'>Premium Group Access</p>
							</div>
							<div className='flex flex-col items-center gap-[23px]'>
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-cross.svg' alt='' />
								<img src='/pricing-cross.svg' alt='' />
								<img src='/pricing-cross.svg' alt='' />
								<img src='/pricing-cross.svg' alt='' />
								<button className='bg-purple-600 mt-[30px] hover:bg-purple-700 text-white font-[500] py-2 px-4 rounded'>
									START FREE
								</button>
							</div>
							<div className='flex flex-col items-center gap-[23px]'>
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />
								<img src='/pricing-tick.svg' alt='' />

								<button className='bg-purple-600 mt-[30px] hover:bg-purple-700 text-white font-[500] py-2 px-4 rounded '>
									START PRO
								</button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default PricingTablet
