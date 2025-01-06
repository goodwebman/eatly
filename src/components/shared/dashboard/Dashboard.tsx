import LeftBoard from './LeftBoard'
import RightBoard from './RightBoard'

const Dashboard = () => {
	return (
		<section className=''>
			<div className='container_ flex justify-between items-start gap-[10px] !py-[100px] !pb-[100px] bg-white border-b-[1px] border-[#cbcbcb] purchase__container '>
				<LeftBoard />
				<RightBoard  />
			</div>
		</section>
	)
}

export default Dashboard
