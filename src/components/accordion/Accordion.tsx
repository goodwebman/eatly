import AccordionItem from './AccordionItem'


const items = [
	{
		title: 'How long does delivery take?',
		content: 'Содержимое первого элемента аккордеона.',
	},
	{
		title: 'How Does It Work ?',
		content: 'Содержимое второго элемента аккордеона.',
	},
	{
		title: 'How does your food delivery service work?',
		content: 'Содержимое третьего элемента аккордеона.',
	},

	{
		title: 'What payment options do you accept?',
		content: 'Содержимое третьего элемента аккордеона.',
	},

	{
		title: 'Do you offer discounts or promotions?',
		content: 'Содержимое третьего элемента аккордеона.',
	},
]

const Accordion = () => {
	return (
		<div className='max-w-lg mx-auto my-4'>
			{items.map((item, index) => (
				<AccordionItem key={index} title={item.title} content={item.content} />
			))}
		</div>
	)
}

export default Accordion
