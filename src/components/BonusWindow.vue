<script setup>

</script>

<template>
	<div class="fixed right-0 sm:right-5 bg-[#141714]/95 p-5 top-[85px] rounded-[20px] sm:max-w-[410px] w-full flex flex-col gap-[10px] z-5">
		<div class="w-full flex items-center justify-between">
			<div class="flex flex-col gap-1">
				<h2 class="uppercase font-bold text-[20px] leading-none">Забирай подарок</h2>
				<p class="uppercase text-[12px] text-[#FFB531] font-bold leading-none">Бонус 20% к депозиту</p>
			</div>
			<button class="w-9 h-9 rounded-full flex items-center justify-center bg-[#1D201D] cursor-pointer hover:opacity-80 duration-200 active:scale-95">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.99486 7.00627C6.60433 7.3968 6.60433 8.02996 6.99486 8.42049L10.58 12.0056L6.99486 15.5908C6.60433 15.9813 6.60433 16.6145 6.99486 17.005C7.38538 17.3955 8.01855 17.3955 8.40907 17.005L11.9942 13.4198L15.5794 17.005C15.9699 17.3955 16.6031 17.3955 16.9936 17.005C17.3841 16.6145 17.3841 15.9813 16.9936 15.5908L13.4084 12.0056L16.9936 8.4205C17.3841 8.02998 17.3841 7.39681 16.9936 7.00629C16.603 6.61576 15.9699 6.61576 15.5794 7.00629L11.9942 10.5914L8.40907 7.00627C8.01855 6.61575 7.38538 6.61575 6.99486 7.00627Z" fill="#839280"/>
				</svg>
			</button>
		</div>
		<div class="max-w-[258px] w-full flex items-center mx-auto gap-[10px]">
			<div class="grid grid-cols-2 gap-[10px] w-full">
				<div class="min-h-[62px] flex items-center justify-center bg-[#1A1D1A] w-full rounded-[12px]">
					<p class="text-[#839280] text-[24px] font-bold">3</p>
				</div>
				<div class="min-h-[62px] flex items-center justify-center bg-[#1A1D1A] w-full rounded-[12px]">
					<p class="text-[#839280] text-[24px] font-bold">0</p>
				</div>
			</div>
			<p class="text-[24px] font-bold">:</p>
			<div class="grid grid-cols-2 gap-[10px] w-full">
				<div class="min-h-[62px] flex items-center justify-center bg-[#1A1D1A] w-full rounded-[12px]">
					<p class="text-[#839280] text-[24px] font-bold">0</p>
				</div>
				<div class="min-h-[62px] flex items-center justify-center bg-[#1A1D1A] w-full rounded-[12px]">
					<p class="text-[#839280] text-[24px] font-bold">0</p>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-[10px] items-center">
			<button class="orange-btn font-bold text-[14px] rounded-[8px] text-[#141714] uppercase min-h-[52px] cursor-pointer hover:opacity-80 duration-200 active:scale-95">Забрать</button>
			<button class="gray-btn font-bold text-[14px] rounded-[8px] text-[#F0EBD8] uppercase min-h-[52px] cursor-pointer hover:opacity-80 duration-200 active:scale-95">Отмена</button>
		</div>
	</div>
</template>

<style scoped>

</style>