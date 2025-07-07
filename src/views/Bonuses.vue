<script setup>

import {openModal} from "jenesius-vue-modal";
</script>

<template>
	<div class="h-full flex flex-col max-w-[1630px] mx-auto w-full gap-10">
		<div class="flex flex-col gap-5">
			<div class="flex flex-col gap-[10px]">
				<p class="uppercase text-[14px] font-bold text-[#FFB531] leading-none text-center">Проявляй активность - забирай призы каждый день!</p>
				<h2 class="uppercase text-[36px] font-bold leading-none text-center">ПОДАРКИ КАЖДЫЙ ДЕНЬ</h2>
			</div>
			<div class="grid xl:grid-cols-3 gap-10 sm:px-10 xl:px-0">
				<div class="bg-gradient-to-br from-[#6E6500] to-[#FFEA00] rounded-[20px] min-h-[155px] p-8 flex flex-col justify-between relative">
					<div class="flex flex-col gap-[6px]">
						<p class="font-bold leading-none">Ежедневные</p>
						<p class="text-[20px] font-bold leading-none">РОЗЫГРЫШИ</p>
					</div>
					<p class="text-[14px] font-medium max-w-[200px] leading-[120%] relative z-1">Бесплатные розыгрыши каждый день и каждый час!</p>
					<img src="/assets/img/bonuses/bonus-block1.png" alt="" class="absolute sm:bottom-0 sm:-right-[35px] top-0 right-0 w-[150px] sm:top-auto sm:w-auto">
				</div>
				<div class="bg-gradient-to-br from-[#6E0000] to-[#FF0000] rounded-[20px] min-h-[155px] p-8 flex flex-col justify-between relative">
					<div class="flex flex-col gap-[6px]">
						<p class="font-bold leading-none">Ежедневные</p>
						<p class="text-[20px] font-bold leading-none">РОЗЫГРЫШИ</p>
					</div>
					<p class="text-[14px] font-medium max-w-[200px] leading-[120%] relative z-1">Бесплатные розыгрыши каждый день и каждый час!</p>
					<img src="/assets/img/bonuses/bonus-block2.png" alt="" class="absolute sm:-bottom-[47px] sm:-right-[42px] top-0 right-0 w-[150px] sm:top-auto sm:w-auto">
				</div>
				<div class="bg-gradient-to-br from-[#6923B4] to-[#830BBA] rounded-[20px] min-h-[155px] p-8 flex flex-col justify-between relative">
					<div class="flex flex-col gap-[6px]">
						<p class="font-bold leading-none">Ежедневные</p>
						<p class="text-[20px] font-bold leading-none">РОЗЫГРЫШИ</p>
					</div>
					<p class="text-[14px] font-medium max-w-[200px] leading-[120%] relative z-1">Бесплатные розыгрыши каждый день и каждый час!</p>
					<img src="/assets/img/bonuses/bonus-block3.png" alt="" class="absolute sm:right-0 sm:-bottom-[15px] top-0 right-0 w-[150px] sm:top-auto sm:w-auto">
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-[10px]">
				<p class="uppercase text-[14px] font-bold text-[#FFB531] leading-none text-center">Собирай ежедневную награду каждый день!</p>
				<h2 class="uppercase text-[36px] font-bold leading-none text-center">Ежедневный бонус</h2>
			</div>
			<div class="bg-[#1A1D1A] rounded-[20px] p-2 sm:p-5 gap-[10px] flex flex-col">
				<div class="flex flex-col sm:flex-row items-center gap-[10px]">
					<button @click="openModal('requirement')" class="bg-[#F73434]/10 px-5 rounded-[8px] min-h-[42px] flex items-center justify-center text-[#FF5555] text-[14px] font-bold gap-[10px] cursor-pointer hover:opacity-80 duration-200 active:scale-95">
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
					<button @click="openModal('howItWork')" class="bg-[#1D201D] rounded-[8px] min-h-[42px] px-5 text-[12px] text-[#839280] font-medium cursor-pointer hover:opacity-80 duration-200 active:scale-95">КАК ЭТО РАБОТАЕТ?</button>
				</div>
				<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:bg-[#1D201D] sm:p-5 rounded-[20px] gap-5">
					<div class="min-h-[240px] sm:min-h-[266px] flex flex-col items-center justify-between bg-[#1D201D] sm:bg-[#1A1D1A] rounded-[12px] p-[10px]">
						<div class="flex flex-col items-center pt-3">
							<p class="uppercase text-[12px] font-bold leading-none text-[#839280] text-center">БОНУС ПОЛУЧЕН</p>
							<p class="text-[32px] font-bold text-[#839280] uppercase leading-none text-center">День 1</p>
						</div>
						<img src="/assets/img/bonuses/open-lock.png" alt="">
					</div>
					<div class="min-h-[240px] sm:min-h-[266px] flex flex-col items-center justify-between bg-gradient-to-b from-[#242A24] to-[#1A1D1A] rounded-[12px] p-[10px] border-[2px] border-[#FFB531]/50 cursor-pointer hover:scale-95 duration-100 active:scale-98">
						<div class="flex flex-col items-center pt-3">
							<p class="uppercase text-[12px] font-bold leading-none text-[#FFB531] text-center">БОНУС ДОСТУПЕН!</p>
							<p class="text-[32px] font-bold text-[#839280] uppercase leading-none text-center">День 2</p>
						</div>
						<img src="/assets/img/bonuses/close-lock.png" alt="">
					</div>
					<div class="min-h-[240px] sm:min-h-[266px] flex flex-col items-center justify-between bg-[#1D201D] sm:bg-[#1A1D1A] rounded-[12px] p-[10px]">
						<div class="flex flex-col items-center pt-3">
							<p class="uppercase text-[12px] font-bold leading-none text-white text-center">БОНУС НЕДОСТУПЕН</p>
							<p class="text-[32px] font-bold text-[#839280] uppercase leading-none text-center">День 3</p>
						</div>
						<img src="/assets/img/bonuses/close-lock.png" alt="">
					</div>
					<div class="min-h-[240px] sm:min-h-[266px] flex flex-col items-center justify-between bg-[#1D201D] sm:bg-[#1A1D1A] rounded-[12px] p-[10px]">
						<div class="flex flex-col items-center pt-3">
							<p class="uppercase text-[12px] font-bold leading-none text-white text-center">БОНУС НЕДОСТУПЕН</p>
							<p class="text-[32px] font-bold text-[#839280] uppercase leading-none text-center">День 4</p>
						</div>
						<img src="/assets/img/bonuses/close-lock.png" alt="">
					</div>
					<div class="min-h-[240px] sm:min-h-[266px] flex flex-col items-center justify-between bg-[#1D201D] sm:bg-[#1A1D1A] rounded-[12px] p-[10px]">
						<div class="flex flex-col items-center pt-3">
							<p class="uppercase text-[12px] font-bold leading-none text-white text-center">БОНУС НЕДОСТУПЕН</p>
							<p class="text-[32px] font-bold text-[#839280] uppercase leading-none text-center">День 5</p>
						</div>
						<img src="/assets/img/bonuses/close-lock.png" alt="">
					</div>
					<div class="min-h-[240px] sm:min-h-[266px] flex flex-col items-center justify-between bg-[#1D201D] sm:bg-[#1A1D1A] rounded-[12px] p-[10px]">
						<div class="flex flex-col items-center pt-3">
							<p class="uppercase text-[12px] font-bold leading-none text-white text-center">БОНУС НЕДОСТУПЕН</p>
							<p class="text-[32px] font-bold text-[#839280] uppercase leading-none text-center">День 6</p>
						</div>
						<img src="/assets/img/bonuses/close-lock.png" alt="">
					</div>
					<div class="min-h-[240px] sm:min-h-[266px] flex flex-col items-center justify-between bg-[#1D201D] sm:bg-[#1A1D1A] rounded-[12px] p-[10px]">
						<div class="flex flex-col items-center pt-3">
							<p class="uppercase text-[12px] font-bold leading-none text-white text-center">БОНУС НЕДОСТУПЕН</p>
							<p class="text-[32px] font-bold text-[#839280] uppercase leading-none text-center">День 7</p>
						</div>
						<img src="/assets/img/bonuses/close-lock.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-5 items-center">
			<div class="flex flex-col gap-[10px]">
				<h2 class="uppercase text-[36px] font-bold leading-none text-center">FREE SPINS</h2>
			</div>
			<div class="min-h-[210px] flex items-center justify-center relative bg-[#1A1D1A] rounded-[20px] w-full before:bg-[#FFB531] before:rounded-b-full before:h-[5px] before:w-[66px] before:absolute before:top-0 after:bg-[#FFB531] after:rounded-t-full after:h-[5px] after:w-[66px] after:absolute after:bottom-0 overflow-hidden">
				<div class="w-[15%] h-full absolute z-1 bg-gradient-to-r from-[#1A1D1A] to-transparent left-0"></div>
				<div class="w-[15%] h-full absolute z-1 bg-gradient-to-l from-[#1A1D1A] to-transparent right-0"></div>
				<div class="flex items-center justify-center absolute cards gap-1">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
			</div>
			<div class="flex items-center justify-center min-h-[42px] rounded-[8px] bg-[#1A1D1A] max-w-[135px] w-full">
				<p class="text-[20px] font-bold text-[#839280]">23:37:16</p>
			</div>
			<button class="min-h-[42px] rounded-[8px] px-10 orange-btn uppercase text-[#141714] text-[12px] font-bold flex items-center justify-center gap-[6px] cursor-pointer group-active:scale-95 group-hover:opacity-80 max-w-[210px] w-full hover:opacity-80 duration-200 active:scale-95">
				<p class="text-[12px] text-[#141714]">БЕСПЛАТНЫЙ СПИН</p>
			</button>
		</div>
		<div class="flex flex-col gap-5 items-center">
			<div class="flex flex-col gap-[10px]">
				<h2 class="uppercase text-[24px] font-bold leading-none text-center">СОДЕРЖИМОЕ FREE SPIN</h2>
			</div>
			<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-3">
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-3.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-1.png" alt="">
				</div>
				<div class="w-full">
					<img src="/assets/img/bonuses/free-spins/free-spin-2.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>