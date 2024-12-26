import Link from 'next/link'
import { ArticlesItems } from './Articles'
import ArticlesItem from './ArticlesItem'

const ArticlesTop = () => {
	const article = ArticlesItems.slice(1, 4)

	return (
		<section className='min-w-[330px] border-l-[2px] max-[1000px]:hidden   border-[#9B9B9B]/60 pl-[35px]'>
			<h1 className='font-[600] pl-[10px] mb-[30px] text-[30px] leading-[44px] text-left text-[#252525]'>
				Top Articles
			</h1>

			<div className=' '>
				{article.map(item => (
					<Link key={item.id} href={`/blog/${item.id}`}>
						<div className='pb-[60px]'>
							<ArticlesItem
								key={item.id}
								id={item.id}
								imgLink={item.imgLink}
								AuthorImg={item.AuthorImg}
								AuthorName={item.AuthorName}
								CreatedAt={item.CreatedAt}
								question={item.question}
							/>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}

export default ArticlesTop
