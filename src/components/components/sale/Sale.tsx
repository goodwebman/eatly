import CustomButton from '../CustomButton'

const Sale = () => {
	return (
		<section className=''>
			<div className='container_ '>
				<div className='sale__inner max-[575px]:p-[20px_30px] !my-[100px]'>
					<h2 className='uppercase font-[800] text-[70px] text-white m-[0_0_20px] poppins'>
						Get 50%
					</h2>
					<form className='inline-block max-[540px]:block relative min-[760px]:shadow-lg ' action='# '>
						<input
							className='w-[440px] h-[68px] bg-white shadow-2xl rounded-[14px] poppins focus:text-[16px] leading-[0.03em] text-[#878787] placeholder:text-[#878787]  pl-[20px] placeholder:font-[500] focus:outline-[#6c5fbc] sale__input'
							type='email'
							name='email'
							placeholder='Enter Your Email Adress'
						/>

						<div className='sale__button max-[575px]:static max-[575px]:transform-none'>
							<CustomButton
								className=' !text-[16px] !p-[10px_25px] rounded-[9px] !font-[500] focus:border-none '
								title='SUBSCRIBE'
							/>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Sale
