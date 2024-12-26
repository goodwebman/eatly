const JustContact = () => {
	return (
		<section className='container_'>
			<div className='text-[#F9F9F9] text-center pt-[85px] bg-[#6C5FBC] w-[531px] h-[818px] font-[600] text-[48px] max-[600px]:w-[350px] max-[400px]:w-[300px] max-[600px]:pt-[100px] max-[1550px]:h-[400px] relative contact-arrow contact-stars rounded-[50px]'>
				Just Contact
				<div className='absolute top-[330px] max-[1550px]:hidden left-[400px]'>
					<div className='mobile__sticks relative flex-shrink-[1]'>
						<img
							className='min-h-[609px] min-w-[304px] object-fill'
							src='/phone.png'
							alt='mobile screen'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default JustContact
