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
		<div className='border border-gray-300 rounded-lg mb-2'>
			<div
				className='p-4 flex items-center justify-between cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-lg'
				onClick={toggleAccordion}
			>
				<h2 className='font-semibold'>{title}</h2>
				<button>
					{!isOpen ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='size-6'
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
							stroke='currentColor'
							className='size-6'
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
				<p>
					{content}
				</p>
			)}
		</div>
	)
}

export default AccordionItem
