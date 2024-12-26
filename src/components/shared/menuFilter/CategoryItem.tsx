'use client'

import { useState } from 'react'

interface ICategory {
	id: number
	imgLink: string
	name: string
	colors: string
}

const CategoryItem = ({ id, imgLink, name, colors }: ICategory) => {
	const [activeButton, setActiveButton] = useState<number[]>([2])

	const handleActiveButton = (id: number) => {
		setActiveButton(prevActiveButtonIds =>
			prevActiveButtonIds.includes(id)
				? prevActiveButtonIds.filter(buttonId => buttonId !== id)
				: [...prevActiveButtonIds, id]
		)
	}

	return (
		<button
			onClick={() => handleActiveButton(id)}
			className={` ${
				activeButton.includes(id) ? '!border-[2px]' : 'border-none'
			} min-w-[76px] w-[20px] pt-[20px] p-[6px] max-[460px]:py-[9px] flex flex-col gap-[16px]  ${colors} rounded-[14px] items-center  `}
		>
			<img className='w-[40px] h-[40px]' src={imgLink} alt='' />
			<div>{name}</div>
		</button>
	)
}

export default CategoryItem
