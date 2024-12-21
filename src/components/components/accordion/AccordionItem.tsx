'use client'
import { useState } from 'react'

interface AccordionItemProps {
	title: string
	content: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className=' border-b-[2px] pl-[10px]  '>
			<div
				className='p-[5px] flex items-center justify-between cursor-pointer rounded-t-lg select-none max-[630px]:gap-[15px] max-[630px]:leading-[50px]'
				onClick={toggleAccordion}
			>
				<h2 className='font-semibold poppins leading-[59px] text-[23px]  text-[#323142] '>{title}</h2>
				<button className='bg-[#6C5FBC] rounded-full p-[5px]'>
					{!isOpen ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='white'
							className='w-[20px] h-[20px]'
							
						>
							
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='white'
							className='w-[20px] h-[20px]'
							
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m19.5 8.25-7.5 7.5-7.5-7.5'
							/>
							
						</svg>
						
					)}
				</button>
			</div>
			{isOpen && (
				<p className='py-[15px] pl-[5px] font-[400]  text-[#979797] '>
					{content}
				</p>
			)}
		</div>
	)
}

export default AccordionItem
