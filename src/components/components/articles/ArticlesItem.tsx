interface IArticlesItem {
	id: number
	imgLink: string
	AuthorImg: string
	AuthorName: string
	CreatedAt: string
	question: string
}

const ArticlesItem = ({
	id,
	imgLink,
	AuthorImg,
	AuthorName,
	CreatedAt,
	question,
}: IArticlesItem) => {
	return (
		<button className='shadow-2xl p-[20px] rounded-[16px] flex-col hover:scale-110 duration-500'>
			<div className='w-[310px] h-[272px]'>
				<img className='' src={imgLink} alt={imgLink} />
			</div>
			<h1 className='text-left font-[600] text-[21px] leading-[25px] py-[21px]'>{question}</h1>
			<div className='flex  justify-between'>
				<div className='flex gap-[12px] '>
					<div>
						<img src={AuthorImg} alt={AuthorName} />
					</div>
					<div>
						<p className='text-[#8D8D8D] font-[400] text-[12px] text-left'>Written By</p>
						<h2 className='font-[500] text-[17px] '>{AuthorName}</h2>
					</div>
				</div>
				<div className='pt-[20px] font-[500] text-[16px] text-[#B7B4B4]'>{CreatedAt}</div>
			</div>
		</button>
	)
}

export default ArticlesItem
