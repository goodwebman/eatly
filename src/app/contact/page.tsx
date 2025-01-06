import CustomerSupport from '@/components/shared/contacts/CustomerSupport'
import JustContact from '@/components/shared/contacts/JustContact'

const Contact = () => {
	return (
		<section className='my-[310px]'>
			<div className=' flex max-[1550px]:flex-col max-[1550px]:gap-[100px] max-[1550px]:items-center gap-[50px] justify-between container'>
				<JustContact />
				<CustomerSupport />
			</div>
		</section>
	)
}

export default Contact
