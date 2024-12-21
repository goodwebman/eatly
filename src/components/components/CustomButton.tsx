type customButtonProps = {
    className?: string,
    title: string,
    onClick?: () => void
}

const CustomButton = ({ className, title, onClick } : customButtonProps) => {
	return (
		<button onClick={onClick} className={`   bg-[#6C5FBC] px-[27px] py-[15px] rounded-[20px] text-[#F9F9F9] font-bold whitespace-nowrap text-[18px] border-[1px] border-transparent duration-500  ${className}   `}>
			{title}
		</button>
	)
}

export default CustomButton
