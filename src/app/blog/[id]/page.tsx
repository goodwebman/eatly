'use client'

import { ArticlesItems } from '@/components/shared/articles/Articles'
import ArticlesTop from '@/components/shared/articles/ArticlesTop'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const page = () => {
	const { id } = useParams()
	const articleId = Number(id)
	const article = ArticlesItems.find(item => item.id === Number(id))

	if (!article) {
		return <div className='mt-[200px] text-center'>Статья не найдена.</div>
	}

	return (
		<section>
			<div className='container_ '>
				<div className='mt-[200px]'>
					<div>
						<h1 className='font-[600] text-[38px] leading-[44px] text-left text-[#252525]'>
							How To Order Food On eatly ?
						</h1>

						<div className='flex items-center justify-between'>
							<div className='flex gap-[12px] mt-[32px]'>
								<div>
									<img src={article.AuthorImg} alt={article.AuthorName} />
								</div>
								<div>
									<p className='text-[#8D8D8D] font-[400] text-[12px] text-left'>
										Written By
									</p>
									<h2 className='font-[500] text-[17px] '>
										{article.AuthorName}
									</h2>
								</div>
							</div>
						</div>

						<img
							className='my-[80px] w-full h-[400px]'
							src={article.imgLink}
							alt=''
						/>
					</div>

					<div className='flex justify-between'>
						<div>
							<h1 className='font-[600]  text-[38px]  text-left text-[#252525]'>
								Browse restaurants and menus
							</h1>

							<p className=' mt-[35px] text-[#252525] font-[400] text-[22px] leading-[55px]'>
								{article.browse}
							</p>

							<h1 className='font-[600] mt-[80px] text-[38px] leading-[44px] text-left text-[#252525]'>
								Select your items
							</h1>

							<p className=' mt-[35px] text-[#252525] font-[400] text-[22px] leading-[55px]'>
								{article.selectItems}
							</p>

							<h1 className='font-[600] mt-[80px] text-[38px] leading-[44px] text-left text-[#252525]'>
								Place your order
							</h1>

							<p className=' mt-[35px] text-[#252525] font-[400] text-[22px] leading-[55px] '>
								{article.place}
							</p>
						</div>

						<ArticlesTop />
					</div>

					<div>
						{articleId <= 11 && (
							<Link href={`/blog/${articleId + 1}`}>
								<button className='p-[25px] mt-[60px] font-[500] items-center text-[21px]  mb-[200px] rounded-2xl bg-[#6c5fbc] text-[#F4F4F4] inline-flex gap-[30px] duration-300 hover:bg-[#F4F4F4] hover:text-[#6c5fbc] border-[#6c5fbc] border-[2px]'>
									Next article
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='size-8'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
										/>
									</svg>
								</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default page
