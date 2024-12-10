'use client'

import { useState } from 'react'
import DishesItem from './DishesItem'


const products = [
	{
		id: '1',
		name: 'The Chiken King',
		cookTime: 17,
		rate: 3.9,
		price: 5,
		imgLink: '/chicken.jpg',
		dishTag: 'Trending',
	},
	{
		id: '2',
		name: 'The Burger King',
		cookTime: 24,
		rate: 4.4,
		price: 5,
		imgLink: '/burger.jpg',
		dishTag: 'Healthy',
	},
	{
		id: '3',
		name: 'The Chiken King',
		cookTime: 34,
		rate: 2.9,
		price: 5,
		imgLink: '/chicken.jpg',
		dishTag: 'Supreme',
	},
	{
		id: '4',
		name: 'The Garlic King',
		cookTime: 24,
		rate: 4.9,
		price: 5,
		imgLink: '/chicken.jpg',
		dishTag: 'Trending',
	},
	{
		id: '5',
		name: 'The Green King',
		cookTime: 24,
		rate: 4.9,
		price: 5,
		imgLink: '/chicken.jpg',
		dishTag: 'Trending',
	},
]

const Dishes = () => {
	const [showAll, setShowAll] = useState(false)

	const displayedProducts = showAll ? products : products.slice(0, 5)
	return (
		<section>
			<div className='container_ !pt-[100px] !pb-[120px] border-b border-[#cbcbcb] '>
				<div className='m-[0_0_85px] font-[600] text-[45px] text-center text-[#323142]'>
					Our Top <span className='text-[#6c5fbc]'>Dishes</span>
				</div>

				<div>
					<div className='grid grid-cols-5 max-[920px]:grid-cols-2 max-[760px]:grid-cols-1 gap-[40px_30px] mb-[65px]'>
						{displayedProducts.map(product => (
							<DishesItem
								key={product.id}
								id={product.id}
								name={product.name}
								cookTime={product.cookTime}
								rate={product.rate}
								imgLink={product.imgLink}
								dishTag={product.dishTag}
							/>
						))}
					</div>
				</div>

				<div className='text-right'>
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

export default Dishes;
