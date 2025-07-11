<script setup>

import {closeModal} from "jenesius-vue-modal";
</script>

<template>
	<div class="max-w-[400px] w-full p-5 bg-[#141714] rounded-[20px] flex flex-col gap-[10px]">
		<div class="flex items-center justify-between">
			<p class="text-[20px] font-bold">Создание промокода</p>
			<button @click="closeModal()" class="w-9 h-9 rounded-full flex items-center justify-center bg-[#1D201D] cursor-pointer hover:opacity-80 duration-200 active:scale-95">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.99486 7.00627C6.60433 7.3968 6.60433 8.02996 6.99486 8.42049L10.58 12.0056L6.99486 15.5908C6.60433 15.9813 6.60433 16.6145 6.99486 17.005C7.38538 17.3955 8.01855 17.3955 8.40907 17.005L11.9942 13.4198L15.5794 17.005C15.9699 17.3955 16.6031 17.3955 16.9936 17.005C17.3841 16.6145 17.3841 15.9813 16.9936 15.5908L13.4084 12.0056L16.9936 8.4205C17.3841 8.02998 17.3841 7.39681 16.9936 7.00629C16.603 6.61576 15.9699 6.61576 15.5794 7.00629L11.9942 10.5914L8.40907 7.00627C8.01855 6.61575 7.38538 6.61575 6.99486 7.00627Z" fill="#839280"/>
				</svg>
			</button>
		</div>
		<p class="text-[12px] text-[#839280]">Создайте свой собственный промокод, чтобы получать прибыль за своих друзей!</p>
		<div class="flex flex-col">
			<div class="bg-[#1A1D1A] relative rounded-[8px] flex justify-between min-h-[42px] items-center px-5 gap-3">
				<input type="text" class="text-[#839280] text-[12px] font-medium outline-none w-full h-full" placeholder="Желаемая сумма:">
				<p class="text-[12px] font-medium text-[#839280]">0</p>
			</div>
		</div>
		<button class="orange-btn font-bold text-[14px] rounded-[8px] text-[#141714] min-h-[42px] cursor-pointer hover:opacity-80 duration-200 active:scale-95 justify-center flex items-center gap-[10px] w-full">Создать промокод</button>
	</div>
</template>

<style scoped>

</style>