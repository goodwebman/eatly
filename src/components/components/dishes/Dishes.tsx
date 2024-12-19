'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import DishesItem from './DishesItem'

const products = [
	{
		id: '6',
		name: 'Chicken Hell',
		cookTime: 17,
		rate: 3.9,
		price: 24,
		imgLink: '/FoodPlate2.png',
		dishTag: 'Trending',
	},
	{
		id: '7',
		name: 'Chicken Hell',
		cookTime: 24,
		rate: 4.4,
		price: 22,
		imgLink: '/FoodPlate1.png',
		dishTag: 'Healthy',
	},
	{
		id: '8',
		name: 'Chicken Hell',
		cookTime: 11,
		rate: 2.9,
		price: 43,
		imgLink: '/FoodPlate2.png',
		dishTag: 'Supreme',
	},
	{
		id: '9',
		name: 'Chicken Hell',
		cookTime: 44,
		rate: 4.9,
		price: 14,
		imgLink: '/FoodPlate1.png',
		dishTag: 'Trending',
	},
	{
		id: '10',
		name: 'Chicken Hell',
		cookTime: 14,
		rate: 4.9,
		price: 12,
		imgLink: '/FoodPlate2.png',
		dishTag: 'Trending',
	},
	{
		id: '11',
		name: 'Chicken Hell',
		cookTime: 34,
		rate: 4.4,
		price: 32,
		imgLink: '/FoodPlate1.png',
		dishTag: 'Healthy',
	},
	{
		id: '12',
		name: 'Chicken Hell',
		cookTime: 24,
		rate: 2.9,
		price: 5,
		imgLink: '/FoodPlate2.png',
		dishTag: 'Supreme',
	},
	{
		id: '13',
		name: 'Chicken Hell',
		cookTime: 23,
		rate: 4.9,
		price: 5,
		imgLink: '/FoodPlate1.png',
		dishTag: 'Trending',
	},
	{
		id: '14',
		name: 'Chicken Hell',
		cookTime: 12,
		rate: 4.9,
		price: 5,
		imgLink: '/FoodPlate2.png',
		dishTag: 'Trending',
	},
]

const Dishes = () => {
	const [showAll, setShowAll] = useState(false)
	const pathname = usePathname()

	const displayedProducts = showAll ? products : products.slice(0, 5)
	return (
		<section>
			<div className='container_ !pt-[100px] !pb-[120px] border-b border-[#cbcbcb] '>
				<div className={`${pathname === '/' ? "" : "hidden"}   m-[0_0_85px] font-[600] text-[45px] text-center text-[#323142]`}>
					Our Top <span className='text-[#6c5fbc]'>Dishes</span>
				</div>

				{/* menu page */}

				<div className={` ${pathname === '/' ? 'hidden' : ''}   flex items-center justify-between mb-[65px] max-[710px]:justify-center`}>
					<div className=' font-[600] text-[45px]  text-[#323142] max-[710px]:text-[35px]'>
						Our Top <span className='text-[#6c5fbc]'>Dishes</span>
					</div>

					<div className={`text-right max-[710px]:hidden`}>
						{!showAll && products.length > 5 && (
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

				<div className='grid grid-cols-5 max-[1060px]:grid-cols-4 max-[920px]:grid-cols-3 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1 gap-[40px_30px] mb-[65px] '>
					{displayedProducts.map(product => (
						<DishesItem
							key={product.id}
							id={product.id}
							name={product.name}
							cookTime={product.cookTime}
							rate={product.rate}
							imgLink={product.imgLink}
							dishTag={product.dishTag}
							price={product.price}
						/>
					))}
				</div>

				<div className={` ${pathname === '/' ? '' : 'hidden'} max-[710px]:block text-right`}>
					{!showAll && products.length > 5 && (
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

export default Dishes
