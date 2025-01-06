'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

const CustomerSupport = () => {
	const [successMessage, setSuccessMessage] = useState('')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data: any) => {
		console.log(data) // Здесь вы можете обработать отправленные данные
		setSuccessMessage('SUCCESS') // Уведомление об успешной отправке
	}

	return (
		<section>
			<div className='container_'>
				<div className='flex flex-col w-[500px] max-[600px]:w-[320px]'>
					<h1 className='text-[40px] leading-[40px] font-[600] pb-[43px]'>
						Customer <span className='text-[#6C5FBC]'>Support</span>
					</h1>

					<form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
						{errors.fullName && (
							<span className='text-red-500 p-[10px]'>
								Fill the FullName Form
							</span>
						)}
						<input
							className='border-[#6C5FBC] border-[2px] p-[18px] rounded-2xl mb-[18px]'
							type='text'
							placeholder='FULL NAME'
							{...register('fullName', {
								required: 'Это поле обязательно для заполнения',
							})}
						/>
						{errors.email && (
							<span className='text-red-500 p-[10px]'>Fill the email Form</span>
						)}
						<input
							className='border-[#6C5FBC] w-full border-[2px] p-[18px] rounded-2xl mb-[40px]'
							type='email'
							placeholder='ENTER YOUR EMAIL'
							{...register('email', {
								required: 'Это поле обязательно для заполнения',
							})}
						/>
						{errors.query && (
							<span className='text-red-500 p-[10px]'>
								Fill the message Form
							</span>
						)}
						<textarea
							placeholder='Enter The Problem Or Query'
							className='border-[#6C5FBC] h-[500px] w-full border-[2px] p-[18px] rounded-2xl mb-[30px]'
							{...register('query', {
								required: 'Это поле обязательно для заполнения',
							})}
						/>
						<input
							className='p-[16px_136px] max-[600px]:p-[16px_100px] rounded-2xl text-white uppercase font-[500] text-[15px] text-center bg-[#6C5FBC] border-[#6C5FBC] duration-300 cursor-pointer hover:bg-white hover:text-[#6C5FBC] border-[2px]'
							value='send now'
							type='submit'
						/>
						{successMessage && (
							<p className='text-green-500 p-[10px] mt-4'>{successMessage}</p>
						)}{' '}
					</form>
				</div>
			</div>
		</section>
	)
}

export default CustomerSupport
