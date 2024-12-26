'use client'

import { useState } from 'react'

type CustomersProps = {
	id: number
	img: string
	name: string
	regDate: string
	comment: string
	stars: number
	activeId: number
}

const ReviewItem = ({
	id,
	img,
	name,
	regDate,
	comment,
	stars,
	activeId
}: CustomersProps) => {


	

	return (
		<li className={`  max-w-[510px] max-[567px]:max-w-[460px] bg-white border-[2px] border-[#f4f4f6] rounded-[21px] p-[38px] relative max-[604px]:p-[16px] `}>
			<div className={` hidden ${activeId === id ? "!flex" : "" }   mb-[30px] relative items-center review__header `}>
				<div className='flex-[0_0_71px]'>
					<img className='max-w-full align-top' src={img} alt={name} />
				</div>
				<div className='ml-[10px]'>
					<div className='poppins font-[500] text-[21px] mb-[5px] text-[#030314]'>{name}</div>
					<div className='font-[400] text-[17px] text-[#5E5D5D]'>{regDate}</div>
				</div>
			</div>

			<p className='poppins italic text-[18px] leading-[1.4] text-[#606060] m-[0_0_40px]'>
				{comment}
			</p>
			<div className='flex gap-[5px]'>
				<img src='/star.svg' alt='star' />
				<img src='/star.svg' alt='star' />
				<img src='/star.svg' alt='star' />
				<img src='/star.svg' alt='star' />
				<img src='/star.svg' alt='star' />
			</div>
			
		</li>
	)
}

export default ReviewItem
