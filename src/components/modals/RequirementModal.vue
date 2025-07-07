<script setup>

import {closeModal, openModal} from "jenesius-vue-modal";
</script>

<template>
	<div class="max-w-[478px] w-full bg-[#141714]/95 rounded-[20px] flex flex-col p-5 gap-[10px]">
		<div class="flex items-center justify-between">
			<p class="text-[20px] font-bold">БЕСПЛАТНЫЙ БОНУС </p>
			<button @click="closeModal()" class="w-9 h-9 rounded-full flex items-center justify-center bg-[#1D201D] cursor-pointer hover:opacity-80 duration-200 active:scale-95">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.99486 7.00627C6.60433 7.3968 6.60433 8.02996 6.99486 8.42049L10.58 12.0056L6.99486 15.5908C6.60433 15.9813 6.60433 16.6145 6.99486 17.005C7.38538 17.3955 8.01855 17.3955 8.40907 17.005L11.9942 13.4198L15.5794 17.005C15.9699 17.3955 16.6031 17.3955 16.9936 17.005C17.3841 16.6145 17.3841 15.9813 16.9936 15.5908L13.4084 12.0056L16.9936 8.4205C17.3841 8.02998 17.3841 7.39681 16.9936 7.00629C16.603 6.61576 15.9699 6.61576 15.5794 7.00629L11.9942 10.5914L8.40907 7.00627C8.01855 6.61575 7.38538 6.61575 6.99486 7.00627Z" fill="#839280"/>
				</svg>
			</button>
		</div>
		<p class="text-[12px] text-[#839280]">Для получения бонуса, выполните все условия:</p>
		<div class="flex flex-col gap-[10px]">
			<div class="grid grid-cols-[44px_1fr] p-5 rounded-[8px] bg-[#1A1D1A] gap-[10px] items-center">
				<div class="bg-[#3A3120] w-11 h-11 rounded-[6px] flex items-center justify-center">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0459 2.26386C13.356 2.44103 13.6129 2.698 13.7901 3.00806L22.3438 17.9769C22.8918 18.936 22.5586 20.1577 21.5996 20.7057C21.2974 20.8784 20.9553 20.9692 20.6073 20.9692H3.5C2.39543 20.9692 1.5 20.0738 1.5 18.9692C1.5 18.6212 1.59083 18.2791 1.76351 17.9769L10.3172 3.00806C10.8652 2.04903 12.0869 1.71584 13.0459 2.26386ZM12 14.75C11.2857 14.75 10.75 15.278 10.75 15.982C10.75 16.718 11.2695 17.246 12 17.246C12.7143 17.246 13.25 16.718 13.25 15.998C13.25 15.278 12.7143 14.75 12 14.75ZM13 7H11V13H13V7Z" fill="#FFB531"/>
					</svg>
				</div>
				<p class="text-[12px] text-[#839280] leading-[130%]">Внесённый депозит за последние 48 часа должен превышать 199</p>
			</div>
			<div class="grid grid-cols-[44px_1fr] p-5 rounded-[8px] bg-[#1A1D1A] gap-[10px] items-center">
				<div class="bg-[#34F734]/10 w-11 h-11 rounded-[6px] flex items-center justify-center">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#55FF55"/>
					</svg>
				</div>
				<p class="text-[12px] text-[#839280] leading-[130%]">Активность на сайте (Открывайте кейсы, создавайте контракты, улучшайте предметы)</p>
			</div>
		</div>
		<div class="flex items-center justify-center flex-col gap-[10px]">
			<button class="bg-[#F73434]/10 px-5 rounded-[8px] min-h-[42px] flex items-center justify-center text-[#FF5555] text-[14px] font-bold gap-[10px] cursor-pointer hover:opacity-80 duration-200 active:scale-95">
				Условия не выполнены
				<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_65_9259)">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.97573 1.93518C8.09031 0.0216067 10.9097 0.0216067 12.0242 1.93518L18.6146 13.2499C19.7184 15.1449 18.3197 17.5 16.0903 17.5H2.90966C0.680347 17.5 -0.718384 15.1449 0.385408 13.2499L6.97573 1.93518ZM9.49995 10.8671C10.0348 10.8671 10.4684 10.4429 10.4684 9.91957V5.18182C10.4684 4.6585 10.0348 4.23427 9.49995 4.23427C8.96508 4.23427 8.53149 4.6585 8.53149 5.18182V9.91957C8.53149 10.4429 8.96508 10.8671 9.49995 10.8671ZM9.49995 14.6573C10.0348 14.6573 10.4684 14.2331 10.4684 13.7098C10.4684 13.1865 10.0348 12.7622 9.49995 12.7622C8.96508 12.7622 8.53149 13.1865 8.53149 13.7098C8.53149 14.2331 8.96508 14.6573 9.49995 14.6573Z" fill="#FF5555"/>
					</g>
					<defs>
						<clipPath id="clip0_65_9259">
							<rect width="19" height="17" fill="white" transform="translate(0 0.5)"/>
						</clipPath>
					</defs>
				</svg>
			</button>
			<button class="bg-[#34F734]/10 px-5 rounded-[8px] min-h-[42px] flex items-center justify-center text-[#55FF55] text-[14px] font-bold gap-[10px] cursor-pointer hover:opacity-80 duration-200 active:scale-95">
				Условия выполнены
				<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 22C7.78595 22 5.42893 22 3.96447 20.5355C2.5 19.0711 2.5 16.714 2.5 12C2.5 7.28595 2.5 4.92893 3.96447 3.46447C5.42893 2 7.78595 2 12.5 2C17.214 2 19.5711 2 21.0355 3.46447C22.5 4.92893 22.5 7.28595 22.5 12C22.5 16.714 22.5 19.0711 21.0355 20.5355C19.5711 22 17.214 22 12.5 22ZM16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L11.5303 15.0303C11.2374 15.3232 10.7626 15.3232 10.4697 15.0303L8.46967 13.0303C8.17678 12.7374 8.17678 12.2626 8.46967 11.9697C8.76256 11.6768 9.23744 11.6768 9.53033 11.9697L11 13.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="#55FF55"/>
				</svg>
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>