'use client'

import { useState } from 'react'
import ArticlesItem from './ArticlesItem'

const ArticlesItems = [
	{
		id: 1,
		imgLink: '/article1.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
	},

	{
		id: 2,
		imgLink: '/article2.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Track The Order ?',
	},

	{
		id: 3,
		imgLink: '/article3.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Manage Cards ?',
	},

	{
		id: 4,
		imgLink: '/article4.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'Tips & Tricks For Business',
	},

	{
		id: 5,
		imgLink: '/article5.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Control Money ?',
	},

	{
		id: 6,
		imgLink: '/article6.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'Top 5 Business Ideas',
	},

	{
		id: 7,
		imgLink: '/article1.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'Tips & Tricks For Business',
	},

	{
		id: 8,
		imgLink: '/article3.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'Tips & Tricks For Business',
	},

	{
		id: 9,
		imgLink: '/article2.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
	},

	{
		id: 10,
		imgLink: '/article5.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
	},

	{
		id: 11,
		imgLink: '/article6.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
	},

	{
		id: 12,
		imgLink: '/article4.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
	},
]

const Articles = () => {
	const itemsPerPage = 6
	const [currentPage, setCurrentPage] = useState(0)

	const startIndex = currentPage * itemsPerPage
	const endIndex = Math.min(startIndex + itemsPerPage, ArticlesItems.length)
	const currentProducts = ArticlesItems.slice(startIndex, endIndex)

	const totalPages = Math.ceil(ArticlesItems.length / itemsPerPage)

	const handlePrev = () => {
		setCurrentPage(Math.max(0, currentPage - 1))
	}

	const handleNext = () => {
		setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
	}

	return (
		<section>
			<div className='container_'>
				<h1 className='text-center text-[45px] text-[#252525] font-[600] mt-[155px]'>
					Latest <span className='text-[#6C5FBC]'>Articles </span>
				</h1>

				<div className='grid grid-cols-[350px_350px_350px] max-[1200px]:grid-cols-[350px_350px] max-[780px]:grid-cols-[350px] justify-center  gap-[60px] mt-[100px]'>
					{currentProducts.map(article => (
						<ArticlesItem
							key={article.id}
							id={article.id}
							imgLink={article.imgLink}
							AuthorImg={article.AuthorImg}
							AuthorName={article.AuthorName}
							CreatedAt={article.CreatedAt}
							question={article.question}
						/>
					))}
				</div>

				<div className='flex justify-center mt-[145px] gap-[80px]'>
					<button
						onClick={handlePrev}
						disabled={currentPage === 0}
						className=' disabled:opacity-50'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-[51px] h-[65px]'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
							/>
						</svg>
					</button>
					<button
						onClick={handleNext}
						disabled={currentPage === totalPages - 1}
						className='disabled:opacity-50'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-[51px] h-[65px]'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Articles
