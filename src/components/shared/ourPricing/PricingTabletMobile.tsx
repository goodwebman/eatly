'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const PricingTabletMobile = () => {
	const [isFeaturesVisible, setIsFeaturesVisible] = useState(true)

	const toggleFeatures = () => {
		setIsFeaturesVisible(!isFeaturesVisible)
	}

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
					className='flex flex-col gap-[100px]'
				>
					<div className='shadow-2xl border-[#F9F9F9] border-[2px]  p-6 rounded-md '>
						<h3 className='text-2xl font-semibold text-gray-900'>Basic</h3>
						<div className='flex items-baseline my-4'>
							<span className='text-5xl font-bold text-gray-900'>$0</span>
							<span className='text-gray-500 text-sm ml-1'>/month</span>
						</div>
						<div className='border-t border-gray-200 my-4'></div>
						<p className='text-gray-500 text-center mb-6'>
							Completely 100% <br /> Free Plan
						</p>

						<button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-6 w-full'>
							START FREE
						</button>

						<div
							className='flex justify-between items-center cursor-pointer'
							onClick={toggleFeatures}
						>
							<span className='text-gray-900 font-medium'>See features</span>
							<span
								className={`transition-transform duration-300 ${
									isFeaturesVisible ? 'rotate-180' : ''
								}`}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</span>
						</div>

						{isFeaturesVisible && (
							<div className='mt-4'>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />
									<span className='text-gray-700'>Support 24/7</span>
								</div>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />
									<span className='text-gray-700'>Fast Delivery</span>
								</div>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />
									<span className='text-gray-700'>20% Off Food Deals</span>
								</div>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />
									<span className='text-gray-700'>Transaction History</span>
								</div>
							</div>
						)}
					</div>

					<div className='shadow-2xl border-[#F9F9F9] border-[2px]  p-6 rounded-md '>
						<h3 className='text-2xl font-semibold text-gray-900'>Basic</h3>
						<div className='flex items-baseline my-4'>
							<span className='text-5xl font-bold text-gray-900'>$9</span>
							<span className='text-gray-500 text-sm ml-1'>/month</span>
						</div>
						<div className='border-t border-gray-200 my-4'></div>
						<p className='text-gray-500 text-center mb-6'>
							Completely 100% <br /> Free Plan
						</p>

						<button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-6 w-full'>
							START FREE
						</button>

						<div
							className='flex justify-between items-center cursor-pointer'
							onClick={toggleFeatures}
						>
							<span className='text-gray-900 font-medium'>See features</span>
							<span
								className={`transition-transform duration-300 ${
									isFeaturesVisible ? 'rotate-180' : ''
								}`}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</span>
						</div>

						{isFeaturesVisible && (
							<div className='mt-4'>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />

									<span className='text-gray-700'>Support 24/7</span>
								</div>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />
									<span className='text-gray-700'>Fast Delivery</span>
								</div>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />
									<span className='text-gray-700'>20% Off Food Deals</span>
								</div>
								<div className='flex items-center mb-2 gap-[20px]'>
									<img src='/pricing-tick.svg' alt='' />
									<span className='text-gray-700'>Transaction History</span>
								</div>
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default PricingTabletMobile
