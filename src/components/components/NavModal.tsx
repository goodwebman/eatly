'use client'

import { PropsWithChildren } from 'react'

interface IModalProps {
	active?: boolean
	onSubmit?: () => void
	onClose?: () => void
}

const NavModal = ({
	active,
	onSubmit,
	onClose,
	children,
}: PropsWithChildren<IModalProps>) => {
	return (
		<div
			className='fixed left-0 top-0 right-0 bottom-0 bg-black/50 flex justify-center items-center h-full w-full z-50'
			onClick={onClose}
		>
			<div
				className={`${active ? 'modal-enter' : ''} max-w-[1450px]
        
         `}
				onClick={e => e.stopPropagation()}
			>
				<div className='flex justify-between'>{children}</div>
			</div>
		</div>
	)
}

export default NavModal
