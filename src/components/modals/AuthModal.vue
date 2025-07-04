<script setup>

</script>

<template>
	<div class="max-w-[520px] w-full bg-[#141714]/95 rounded-[20px] flex flex-col p-5 gap-[10px]">
		<div class="flex items-center justify-between">
			<p class="text-[20px] font-bold">Вход в <span class="uppercase text-[#839280]">LOOTREX!</span></p>
			<button class="w-9 h-9 rounded-full flex items-center justify-center bg-[#1D201D] cursor-pointer hover:opacity-80 duration-200 active:scale-95">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.99486 7.00627C6.60433 7.3968 6.60433 8.02996 6.99486 8.42049L10.58 12.0056L6.99486 15.5908C6.60433 15.9813 6.60433 16.6145 6.99486 17.005C7.38538 17.3955 8.01855 17.3955 8.40907 17.005L11.9942 13.4198L15.5794 17.005C15.9699 17.3955 16.6031 17.3955 16.9936 17.005C17.3841 16.6145 17.3841 15.9813 16.9936 15.5908L13.4084 12.0056L16.9936 8.4205C17.3841 8.02998 17.3841 7.39681 16.9936 7.00629C16.603 6.61576 15.9699 6.61576 15.5794 7.00629L11.9942 10.5914L8.40907 7.00627C8.01855 6.61575 7.38538 6.61575 6.99486 7.00627Z" fill="#839280"/>
				</svg>
			</button>
		</div>
		<p class="text-[12px] text-[#839280]">Нам необходимо убедиться, что вы можете использовать <span class="font-bold">LOOTREX</span>. Подтвердите следующее:</p>
		<div class="flex flex-col gap-[10px]">
			<div class="bg-[#1A1D1A] p-5 rounded-[8px] items-center grid grid-cols-[44px_1fr] gap-[10px]">
				<div class="bg-[#1D201D] w-11 h-11 rounded-[6px] flex items-center justify-center cursor-pointer hover:opacity-80 active:scale-90">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#839280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<p class="text-[12px] text-[#839280]">Я соглашаюсь с: <span class="text-[#FFB531] font-bold">Пользовательским соглашением, Условиями использования, Политикой конфиденциальности</span>.</p>
			</div>
			<div class="bg-[#1A1D1A] p-5 rounded-[8px] items-center grid grid-cols-[44px_1fr] gap-[10px]">
				<div class="bg-[#1D201D] w-11 h-11 rounded-[6px] flex items-center justify-center cursor-pointer hover:opacity-80 active:scale-90">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#839280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<p class="text-[12px] text-[#839280]">Мне есть <span class="text-[#FFB531] font-bold">18 лет</span>, или же я <span class="text-[#FFB531] font-bold">старше</span>.</p>
			</div>
		</div>
		<button class="orange-btn font-bold text-[14px] rounded-[8px] text-[#141714] min-h-[52px] cursor-pointer hover:opacity-80 duration-200 active:scale-95 px-10 mx-auto flex items-center gap-[10px]">
			Войти в аккаунт
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_28_6356)">
					<path d="M10.1824 6.82275C10.1824 5.943 10.8956 5.22975 11.7748 5.22975C12.654 5.22975 13.3673 5.943 13.3673 6.82219C13.3673 7.70194 12.6546 8.41463 11.7748 8.41463C11.7748 8.41463 11.7748 8.41463 11.7743 8.41463C10.8951 8.41463 10.1824 7.70194 10.1824 6.82275C10.1824 6.82275 10.1818 6.82275 10.1818 6.82219L10.1824 6.82275ZM13.8887 6.82613C13.8887 5.65557 12.9398 4.70663 11.7692 4.70663C10.5986 4.70663 9.64969 5.65557 9.64969 6.82613C9.64969 7.99669 10.5986 8.94563 11.7692 8.94563C12.9392 8.94394 13.887 7.99557 13.8887 6.82613ZM5.86519 13.3652L4.82963 12.9366C5.12438 13.5429 5.73582 13.9536 6.44288 13.9536C7.18369 13.9536 7.81988 13.503 8.09101 12.8606L8.09551 12.8488C8.18269 12.6452 8.23388 12.4078 8.23388 12.1592C8.23388 11.1709 7.43288 10.3699 6.44457 10.3699C6.21676 10.3699 5.99907 10.4126 5.79882 10.4897L5.81119 10.4858L6.88163 10.9284C7.36088 11.1332 7.69107 11.6012 7.69107 12.1457C7.69107 12.8747 7.09988 13.4659 6.37088 13.4659C6.18863 13.4659 6.01538 13.4288 5.85732 13.3624L5.86576 13.3658L5.86519 13.3652ZM8.98538 0.564941C4.56582 0.565504 0.941068 3.96582 0.582755 8.29257L0.580505 8.32294L5.10188 10.1916C5.47763 9.93169 5.94282 9.777 6.44457 9.777C6.44513 9.777 6.44569 9.777 6.44569 9.777C6.49013 9.777 6.53344 9.77982 6.57788 9.7815L8.58882 6.87V6.82838C8.59051 5.07338 10.0136 3.65138 11.7686 3.65138C13.5248 3.65138 14.9484 5.07507 14.9484 6.83119C14.9484 8.58732 13.5248 10.011 11.7686 10.011H11.6949L8.82957 12.0574C8.82957 12.0939 8.83238 12.1311 8.83238 12.1693C8.83238 12.1699 8.83238 12.1704 8.83238 12.171C8.83238 13.4884 7.76419 14.5566 6.44682 14.5566C5.29538 14.5566 4.33407 13.7404 4.11076 12.6553L4.10794 12.6401L0.870755 11.2997C1.90632 14.8688 5.14632 17.4338 8.98482 17.4338C13.6429 17.4338 17.4189 13.6577 17.4189 8.99963C17.4189 4.34157 13.6429 0.565504 8.98482 0.565504L8.98538 0.564941Z" fill="#141714"/>
				</g>
			</svg>
		</button>
	</div>
</template>

<style scoped>

</style>