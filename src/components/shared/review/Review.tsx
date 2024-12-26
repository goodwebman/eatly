'use client'

import { useState } from 'react'
import ReviewItem from './ReviewItem'

const customers = [
	{
		id: 1,
		img: '/customer.png',
		name: 'Alexander R.',
		regDate: '01 Year With Us',
		comment:
			'“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time “',
		stars: 5,
	},
	{
		id: 2,
		img: '/customer.png',
		name: 'Alexander R.',
		regDate: '01 Year With Us',
		comment:
			'“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time “',
		stars: 5,
	},
	{
		id: 3,
		img: '/customer.png',
		name: 'Alexander R.',
		regDate: '01 Year With Us',
		comment:
			'“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time “',
		stars: 5,
	},

	
]

const Review = () => {
	const [activeId, setActiveId] = useState<number>(1)

	const handleButtonClick = (id: number) => {
		setActiveId(id)
	}

	return (
		<section>
			<div className='container_ !pt-[100px] !pb-[120px] max-[540px]:hidden'>
				<h2 className='poppins font-[600] text-[45px] text-center text-[#323142] m-[0_0_80px]'>
					<span className='text-[#6c5fbc]'>Customer</span> Say
				</h2>

				<ul className='relative '>
					<div className='overflow-hidden '>
						<div
							className='opacity-[1] w-[15000px] items-start flex gap-[46px] duration-300  ml-[550px] max-[800px]:ml-[520px] max-[720px]:ml-[540px] max-[575px]:ml-[540px] max-[567px]:ml-[575px]  '
							style={{ transform: `translateX(-${activeId * 530}px)` }}
						>
							{customers.map(customer => (
								<ReviewItem
									key={customer.id}
									id={customer.id}
									img={customer.img}
									name={customer.name}
									regDate={customer.regDate}
									comment={customer.comment}
									stars={customer.stars}
									activeId={activeId}
								/>
							))}
						</div>
					</div>
					<ul className='absolute gap-[3px] p-0 m-0 max-w-[540px] right-0 bottom-[-60px] flex flex-wrap'>
						{customers.map(item => (
							<li className='flex ' key={item.id}>
								<button
									onClick={() => handleButtonClick(item.id)}
									className={`${
										activeId === item.id
											? 'bg-[#6c5fbc]'
											: 'bg-[#6c5fbc] opacity-[0.3]'
									} text-[0px] w-[181px] h-[11px] rounded-[50px] ml-[-3px] p-0 cursor-pointer max-[575px]:w-[100px]`}
								/>
							</li>
						))}
					</ul>
				</ul>
			</div>
		</section>
	)
}

export default Review
