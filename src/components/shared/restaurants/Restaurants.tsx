'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import RestarauntItem from './RestarauntItem'

const products = [
	{
		id: '1',
		name: 'The Chiken King',
		cookTime: 17,
		rate: 3.9,
		imgLink: '/chicken.jpg',
		dishTag: 'Trending',
	},
	{
		id: '2',
		name: 'The Burger King',
		cookTime: 24,
		rate: 4.4,

		imgLink: '/burger.jpg',
		dishTag: 'Healthy',
	},
	{
		id: '3',
		name: 'The Chiken King',
		cookTime: 34,
		rate: 2.9,

		imgLink: '/chicken.jpg',
		dishTag: 'Supreme',
	},
	{
		id: '4',
		name: 'The Garlic King',
		cookTime: 24,
		rate: 4.9,

		imgLink: '/burger.jpg',
		dishTag: 'Trending',
	},
	{
		id: '5',
		name: 'The Green King',
		cookTime: 24,
		rate: 4.9,

		imgLink: '/chicken.jpg',
		dishTag: 'Trending',
	},
]

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			type: 'spring',
			stiffness: 100,
		},
	},
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
		},
	},
}

const Restaurants = () => {
	const [showAll, setShowAll] = useState(false)

	const pathname = usePathname()

	const visibleProducts = showAll
		? products
		: products.slice(0, products.length - 2)
	const hiddenProducts = showAll ? [] : products.slice(products.length - 2)

	return (
		<section>
			<div className='container_ !pt-[100px] !pb-[120px] border-b border-[#cbcbcb] '>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.4 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								type: 'spring',
								stiffness: 100,
							},
						},
					}}
					className={` ${
						pathname === '/' ? '' : 'hidden'
					}  m-[0_0_85px] font-[600] text-[45px] text-center text-[#323142]`}
				>
					Our Top <span className='text-[#6c5fbc]'>Restaurants</span>
				</motion.div>

				{/* menu page */}
				<div
					className={`${
						pathname === '/' ? 'hidden' : ''
					} max-[710px]:block flex items-center justify-between mb-[75px]`}
				>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4 }}
						variants={{
							hidden: { opacity: 0, y: -50 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									type: 'spring',
									stiffness: 100,
								},
							},
						}}
						className=' font-[600] text-[45px] max-[710px]:text-[35px] text-center text-[#323142]'
					>
						Our Top <span className='text-[#6c5fbc]'>Restaurants</span>
					</motion.div>

					<div className={` text-right max-[710px]:hidden`}>
						{!showAll && products.length > 3 && (
							<button
								className='poppins inline-flex  items-center gap-[20px] font-[500] text-[20px] leading-[-0.1px] text-[#acadb9] '
								onClick={() => setShowAll(true)}
							>
								View All
								<svg
									className='w-[19px] h-[19px] stroke-[#acadb9] fill-none'
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
							</button>
						)}
						{showAll && (
							<button
								className='poppins inline-flex ml-auto  items-center gap-[20px] font-[500] text-[20px] leading-[-0.1px] text-[#acadb9] '
								onClick={() => setShowAll(false)}
							>
								Hide
								<svg
									className='w-[19px]  h-[19px] rotate-180 stroke-[#acadb9] fill-none'
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
							</button>
						)}
					</div>
				</div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.4 }}
					className='grid grid-cols-3 max-[920px]:grid-cols-2 max-[760px]:grid-cols-1 gap-[40px_30px] mb-[65px]'
				>
					{visibleProducts.map(product => (
						<motion.div key={product.id} initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4 }} variants={itemVariants}>
							<RestarauntItem
								key={product.id}
								id={product.id}
								name={product.name}
								cookTime={product.cookTime}
								rate={product.rate}
								imgLink={product.imgLink}
								dishTag={product.dishTag}
							/>
						</motion.div>
					))}

					<AnimatePresence>
						{showAll &&
							hiddenProducts.map(product => (
								<motion.div
									key={product.id}
									variants={itemVariants}
									initial='visible'
									animate='visible'
									exit='visible'
								>
									<RestarauntItem
										key={product.id}
										id={product.id}
										name={product.name}
										cookTime={product.cookTime}
										rate={product.rate}
										imgLink={product.imgLink}
										dishTag={product.dishTag}
									/>
								</motion.div>
							))}
					</AnimatePresence>
				</motion.div>

				<div
					className={` ${
						pathname === '/' ? '' : 'hidden'
					} max-[710px]:block text-right`}
				>
					{!showAll && products.length > 3 && (
						<button
							className='poppins inline-flex  items-center gap-[20px] font-[500] text-[20px] leading-[-0.1px] text-[#acadb9] '
							onClick={() => setShowAll(true)}
						>
							View All
							<svg
								className='w-[19px] h-[19px] stroke-[#acadb9] fill-none'
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
						</button>
					)}
					{showAll && (
						<button
							className='poppins inline-flex ml-auto  items-center gap-[20px] font-[500] text-[20px] leading-[-0.1px] text-[#acadb9] '
							onClick={() => setShowAll(false)}
						>
							Hide
							<svg
								className='w-[19px]  h-[19px] rotate-180 stroke-[#acadb9] fill-none'
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
						</button>
					)}
				</div>
			</div>
		</section>
	)
}

export default Restaurants
