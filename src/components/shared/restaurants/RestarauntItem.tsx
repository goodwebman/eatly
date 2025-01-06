'use client'
import useFavoritesStore from '@/store/store'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface ProductProps {
	id: string
	name: string
	cookTime: number
	rate: number
	imgLink: string
	dishTag: string
	
}



const RestarauntItem: React.FC<ProductProps> = ({
	id,
	name,
	cookTime,
	rate,
	imgLink,
	dishTag,
	
}) => {
	const { favorites, addFavorite, removeFavorite } = useFavoritesStore()
	const isFavorite = favorites.includes(id)

	


	

	const handleToggleFavorite = () => {
		if (isFavorite) {
			removeFavorite(id)
		} else {
			addFavorite(id)
		}
	}

	return (
		<motion.div
			
			className='rounded-[30px] list-none overflow-hidden bg-white 
     duration-300 shadow-2xl hover:scale-105'
		>
			<div className='relative restaurants__img '>
				<img className='w-full' src={imgLink} alt={name} />
			</div>
			<div className='p-[10px_10px_17px_35px]'>
				<div
					className={`text-[13px] font-[500] p-[3px_5px] rounded-[5px]  inline-block mb-[5px] ${
						dishTag === 'Healthy'
							? 'text-[#fb461d] bg-[#f7c5ba]'
							: 'text-[#daa41a] bg-[#f7edd0]'
					} ${dishTag === 'Supreme' ? '!text-[#309d5c] !bg-[#72e7a1]' : ''}`}
				>
					{dishTag}
				</div>
				<h3 className='font-[600] text-[26px] text-[#323142] m-[0_0_5px]'>
					{name}
				</h3>
				<div className='flex justify-between gap-[5px] items-center'>
					<div className='text-[20px] text-[#8E97A6]'>{cookTime} min - </div>
					<div className='flex-[1_1_auto] flex items-center gap-[4px] text-[#8e97a6] text-[20px]'>
						<div>
							<img src='/star.svg' alt='star' />
						</div>
						<div>{rate}</div>
					</div>

					<button
						onClick={handleToggleFavorite}
						className={`${
							isFavorite ? 'bg-[#dbd9ee]' : ''
						} p-[6px_10px_6px] rounded-full leading-[1.15]`}
					>
						<svg
							className={`w-[15px] h-[20px] ${
								isFavorite ? 'fill-[#6b5fbc]' : 'fill-[#323142]'
							} `}
							viewBox='0 0 16 21'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z'></path>
						</svg>
					</button>
				</div>
			</div>
		</motion.div>
	)
}

export default RestarauntItem
