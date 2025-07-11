<script setup>
	import { ref } from 'vue'
	import {openModal} from "jenesius-vue-modal";

	const percent = ref(50)
</script>

<template>
	<div class="flex flex-col gap-5 max-w-[1400px] mx-auto">
		<div class="flex flex-col gap-[10px]">
			<p class="uppercase text-[14px] font-bold text-[#FFB531] leading-none text-center">ЗОВИ ДРУЗЕЙ, ПОЛУЧАЙТЕ БОНУСЫ</p>
			<h2 class="uppercase text-[36px] font-bold leading-none text-center">РЕФЕРАЛЬНАЯ СИСТЕМА</h2>
		</div>
		<div class="grid xl:grid-cols-[minmax(450px,490px)_1fr] gap-[10px]">
			<div class="flex flex-col md:flex-row xl:flex-col bg-[#1A1D1A] rounded-[16px] p-5 gap-[10px] justify-between">
				<div class="flex items-center gap-2">
					<div class="w-[54px] h-[54px] rounded-[8px] overflow-hidden flex items-center justify-center">
						<img src="/assets/img/profile.png" alt="" class="w-full h-full object-cover">
					</div>
					<div class="flex flex-col gap-1">
						<p class="font-semibold leading-none">Goblin_Thug</p>
						<div class="flex items-center gap-1">
							<p class="text-[14px] font-bold text-[#FFB531] leading-none">0.00</p>
							<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.5 7C14.5 10.866 11.366 14 7.5 14C3.63401 14 0.5 10.866 0.5 7C0.5 3.13401 3.63401 0 7.5 0C11.366 0 14.5 3.13401 14.5 7Z" fill="#E09B2D"/>
								<path d="M13.24 7C13.24 10.1701 10.6701 12.74 7.5 12.74C4.32989 12.74 1.76 10.1701 1.76 7C1.76 3.82989 4.32989 1.26 7.5 1.26C10.6701 1.26 13.24 3.82989 13.24 7Z" fill="#FFB531"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11072 3.74103C7.26203 3.63803 8.59202 2.79539 9.74233 4.00345C9.74233 4.00345 11.0355 4.4413 11.9339 6.31209C11.9721 6.39156 12.036 6.47642 12.12 6.56455C11.8794 8.37158 10.7137 9.88982 9.10852 10.6394C8.93715 10.18 8.90095 9.88774 8.76526 9.63287C8.29243 8.74459 7.70473 8.67771 7.02407 8.71374C6.61206 8.73553 5.72468 9.38762 5.38935 9.37178C5.05412 9.35591 4.2627 8.88594 4.54529 8.74363C4.57572 8.72816 4.62083 8.70178 4.67326 8.66956C4.62798 8.53515 4.57032 8.3053 4.62153 8.10984C4.62375 8.10656 4.67612 8.03071 4.73036 8.12146C4.77101 8.19013 4.91783 8.36951 4.99469 8.46161C5.0463 8.42729 5.09953 8.39137 5.15457 8.35366C5.11141 8.21635 5.06536 8.0054 5.11292 7.82416C5.11292 7.82416 5.16609 7.7425 5.22175 7.83612C5.25772 7.89683 5.37804 8.04514 5.4582 8.14272C5.5231 8.09672 5.58715 8.05108 5.64999 8.00587C5.6123 7.87062 5.58098 7.68757 5.62312 7.5272C5.62372 7.52628 5.67676 7.44673 5.73194 7.53949C5.76291 7.59104 5.85469 7.70639 5.93078 7.79925C6.03641 7.72054 6.12858 7.64943 6.19613 7.5933C6.16987 7.47107 6.15591 7.3267 6.18975 7.19735C6.18975 7.19735 6.24318 7.11617 6.29891 7.20997C6.31817 7.24222 6.36218 7.30031 6.41075 7.36177C6.52781 7.20733 6.63792 7.03019 6.64049 6.91798C6.64555 6.69822 6.53742 6.46922 6.21662 6.15065C6.12516 6.05991 5.93908 5.99615 5.70507 5.97526C5.70405 6.05939 5.70487 6.13735 5.70978 6.17756C5.72439 6.29564 5.62278 6.25961 5.62278 6.25961C5.52573 6.18431 5.45039 6.07803 5.39371 5.9726C5.30567 5.97842 5.21421 5.98905 5.12132 6.00582C5.11772 6.13307 5.11569 6.28133 5.12333 6.34332C5.1375 6.45958 5.03937 6.42641 5.03634 6.42536C4.92351 6.33829 4.84022 6.20849 4.78141 6.08787C4.68961 6.11085 4.59837 6.12975 4.508 6.14567C4.50441 6.27415 4.50238 6.42531 4.51002 6.48814C4.52408 6.60431 4.42744 6.57269 4.42303 6.57119C4.2969 6.47282 4.20755 6.32231 4.14828 6.19085C4.05111 6.19835 3.9567 6.20268 3.86547 6.20347C3.85953 6.37007 3.85323 6.62367 3.86446 6.71668C3.88138 6.85586 3.76513 6.81743 3.76 6.81567C3.54326 6.64733 3.41651 6.35154 3.35662 6.1749C3.14495 6.14768 2.97759 6.10451 2.88 6.05764C2.88086 6.04871 2.92049 5.63373 2.95726 5.49659C3.09104 5.001 3.35892 4.60887 4.04416 4.45521C4.41574 4.37238 5.10165 4.56932 5.46996 4.40572C5.83848 4.24162 5.98592 3.76619 6.42553 3.75365C6.865 3.74028 6.95921 3.84315 7.11072 3.74103ZM3.53094 4.92458C3.40748 4.95729 3.31022 5.28294 3.3808 5.33848C3.50151 5.43222 3.65433 4.89149 3.53094 4.92458ZM6.16019 4.34128C6.16019 4.35465 6.16148 4.3681 6.16422 4.38147C6.18734 4.49736 6.30141 4.57318 6.41881 4.55022C6.53627 4.52718 6.61274 4.41448 6.58944 4.29809C6.58034 4.25168 6.55618 4.21244 6.52361 4.18316L6.16019 4.34128Z" fill="#D69123"/>
							</svg>
						</div>
					</div>
				</div>
				<div class="grid sm:grid-cols-2 gap-1 items-center">
					<button @click="openModal('createPromo')" class="mx-auto min-h-[42px] rounded-[8px] orange-btn uppercase text-[#141714] text-[12px] font-bold flex items-center justify-center gap-[6px] cursor-pointer group-active:scale-95 group-hover:opacity-80 w-full hover:opacity-80 opacity-100 duration-200 active:scale-95 px-5">СОЗДАТЬ ПРОМОКОД</button>
					<button @click="openModal('referralWithdraw')" class="mx-auto min-h-[42px] rounded-[8px] orange-btn uppercase text-[#141714] text-[12px] font-bold flex items-center justify-center gap-[6px] cursor-pointer group-active:scale-95 group-hover:opacity-80 w-full hover:opacity-80 opacity-100 duration-200 active:scale-95 px-5">ВЫВЕСТИ</button>
				</div>
			</div>
			<div class="flex flex-col overflow-hidden gap-[10px]">
				<div class="min-h-[36px] flex items-center ps-[5px] py-[5px] gap-1 bg-[#1A1D1A] rounded-[8px] overflow-hidden relative">
					<div class="max-w-[140px] w-[10%] bg-gradient-to-r from-transparent to-[#1A1D1A] h-[36px] absolute right-0 top-0"></div>
					<div v-for="i in 20" class="px-[10px] flex items-center justify-center bg-[#141714] rounded-[4px] h-full gap-1">
						<p class="text-[12px] font-bold text-[#FFB531] leading-none">0.00</p>
						<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.5 7C14.5 10.866 11.366 14 7.5 14C3.63401 14 0.5 10.866 0.5 7C0.5 3.13401 3.63401 0 7.5 0C11.366 0 14.5 3.13401 14.5 7Z" fill="#E09B2D"/>
							<path d="M13.24 7C13.24 10.1701 10.6701 12.74 7.5 12.74C4.32989 12.74 1.76 10.1701 1.76 7C1.76 3.82989 4.32989 1.26 7.5 1.26C10.6701 1.26 13.24 3.82989 13.24 7Z" fill="#FFB531"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11072 3.74103C7.26203 3.63803 8.59202 2.79539 9.74233 4.00345C9.74233 4.00345 11.0355 4.4413 11.9339 6.31209C11.9721 6.39156 12.036 6.47642 12.12 6.56455C11.8794 8.37158 10.7137 9.88982 9.10852 10.6394C8.93715 10.18 8.90095 9.88774 8.76526 9.63287C8.29243 8.74459 7.70473 8.67771 7.02407 8.71374C6.61206 8.73553 5.72468 9.38762 5.38935 9.37178C5.05412 9.35591 4.2627 8.88594 4.54529 8.74363C4.57572 8.72816 4.62083 8.70178 4.67326 8.66956C4.62798 8.53515 4.57032 8.3053 4.62153 8.10984C4.62375 8.10656 4.67612 8.03071 4.73036 8.12146C4.77101 8.19013 4.91783 8.36951 4.99469 8.46161C5.0463 8.42729 5.09953 8.39137 5.15457 8.35366C5.11141 8.21635 5.06536 8.0054 5.11292 7.82416C5.11292 7.82416 5.16609 7.7425 5.22175 7.83612C5.25772 7.89683 5.37804 8.04514 5.4582 8.14272C5.5231 8.09672 5.58715 8.05108 5.64999 8.00587C5.6123 7.87062 5.58098 7.68757 5.62312 7.5272C5.62372 7.52628 5.67676 7.44673 5.73194 7.53949C5.76291 7.59104 5.85469 7.70639 5.93078 7.79925C6.03641 7.72054 6.12858 7.64943 6.19613 7.5933C6.16987 7.47107 6.15591 7.3267 6.18975 7.19735C6.18975 7.19735 6.24318 7.11617 6.29891 7.20997C6.31817 7.24222 6.36218 7.30031 6.41075 7.36177C6.52781 7.20733 6.63792 7.03019 6.64049 6.91798C6.64555 6.69822 6.53742 6.46922 6.21662 6.15065C6.12516 6.05991 5.93908 5.99615 5.70507 5.97526C5.70405 6.05939 5.70487 6.13735 5.70978 6.17756C5.72439 6.29564 5.62278 6.25961 5.62278 6.25961C5.52573 6.18431 5.45039 6.07803 5.39371 5.9726C5.30567 5.97842 5.21421 5.98905 5.12132 6.00582C5.11772 6.13307 5.11569 6.28133 5.12333 6.34332C5.1375 6.45958 5.03937 6.42641 5.03634 6.42536C4.92351 6.33829 4.84022 6.20849 4.78141 6.08787C4.68961 6.11085 4.59837 6.12975 4.508 6.14567C4.50441 6.27415 4.50238 6.42531 4.51002 6.48814C4.52408 6.60431 4.42744 6.57269 4.42303 6.57119C4.2969 6.47282 4.20755 6.32231 4.14828 6.19085C4.05111 6.19835 3.9567 6.20268 3.86547 6.20347C3.85953 6.37007 3.85323 6.62367 3.86446 6.71668C3.88138 6.85586 3.76513 6.81743 3.76 6.81567C3.54326 6.64733 3.41651 6.35154 3.35662 6.1749C3.14495 6.14768 2.97759 6.10451 2.88 6.05764C2.88086 6.04871 2.92049 5.63373 2.95726 5.49659C3.09104 5.001 3.35892 4.60887 4.04416 4.45521C4.41574 4.37238 5.10165 4.56932 5.46996 4.40572C5.83848 4.24162 5.98592 3.76619 6.42553 3.75365C6.865 3.74028 6.95921 3.84315 7.11072 3.74103ZM3.53094 4.92458C3.40748 4.95729 3.31022 5.28294 3.3808 5.33848C3.50151 5.43222 3.65433 4.89149 3.53094 4.92458ZM6.16019 4.34128C6.16019 4.35465 6.16148 4.3681 6.16422 4.38147C6.18734 4.49736 6.30141 4.57318 6.41881 4.55022C6.53627 4.52718 6.61274 4.41448 6.58944 4.29809C6.58034 4.25168 6.55618 4.21244 6.52361 4.18316L6.16019 4.34128Z" fill="#D69123"/>
						</svg>
					</div>
				</div>
				<div class="grid md:grid-cols-3 gap-[10px]">
					<div class="bg-[#1A1D1A] h-full min-h-[100px] rounded-[16px] p-5 grid grid-cols-[60px_1fr] items-center gap-[10px]">
						<div class="w-15 h-15 flex items-center justify-center rounded-[8px] bg-[#141714]">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_117_11119)">
									<path d="M21.4888 3.59502C20.8081 2.91343 19.7028 2.91386 19.0212 3.59502L7.91531 14.7013L2.97922 9.7653C2.29763 9.0837 1.19278 9.0837 0.511193 9.7653C-0.170398 10.4469 -0.170398 11.5517 0.511193 12.2333L6.68104 18.4032C7.02162 18.7438 7.46821 18.9145 7.91484 18.9145C8.36147 18.9145 8.80849 18.7442 9.14907 18.4032L21.4888 6.063C22.1704 5.38188 22.1704 4.27656 21.4888 3.59502Z" fill="#839280"/>
								</g>
								<defs>
									<clipPath id="clip0_117_11119">
										<rect width="22" height="22" fill="white"/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div class="flex flex-col gap-1">
							<p class="text-[20px] font-bold text-[#FFB531] leading-none">220</p>
							<p class="font-semibold text-[#839280] leading-none">Активаций</p>
						</div>
					</div>
					<div class="bg-[#1A1D1A] h-full min-h-[100px] rounded-[16px] p-5 grid grid-cols-[60px_1fr] items-center gap-[10px]">
						<div class="w-15 h-15 flex items-center justify-center rounded-[8px] bg-[#141714]">
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.925 2.76278L11.9125 9.77528H8.9C8.4 9.77528 7.9125 9.81278 7.4375 9.91278L8.6875 6.91278L8.7375 6.80028L8.8125 6.60028C8.85 6.51278 8.875 6.43778 8.9125 6.37528C10.3625 3.01278 11.9875 1.96278 14.925 2.76278Z" fill="#839280"/>
								<path d="M23.4125 10.1129L23.3875 10.1004C22.6375 9.88789 21.875 9.77539 21.1 9.77539H13.275L16.0875 3.23789L16.125 3.15039C16.3 3.21289 16.4875 3.30039 16.675 3.36289L19.4375 4.52539C20.975 5.16289 22.05 5.82539 22.7125 6.62539C22.825 6.77539 22.925 6.91289 23.025 7.07539C23.1375 7.25039 23.225 7.42539 23.275 7.61289C23.325 7.72539 23.3625 7.82539 23.3875 7.93789C23.575 8.57539 23.5875 9.30039 23.4125 10.1129Z" fill="#839280"/>
								<path d="M22.8626 11.9004C22.3001 11.7379 21.7125 11.6504 21.1 11.6504H8.90005C8.05005 11.6504 7.25005 11.8129 6.50005 12.1379C4.32505 13.0754 2.80005 15.2379 2.80005 17.7504V20.1879C2.80005 20.4879 2.82505 20.7754 2.86255 21.0754C3.13755 25.0504 5.26255 27.1754 9.23755 27.4379C9.52505 27.4754 9.81255 27.5004 10.125 27.5004H19.875C24.5 27.5004 26.9375 25.3004 27.175 20.9254C27.1875 20.6879 27.2001 20.4379 27.2001 20.1879V17.7504C27.2001 14.9879 25.3626 12.6629 22.8626 11.9004ZM18.125 20.2379H15.9375V22.5004C15.9375 23.0129 15.5125 23.4379 15 23.4379C14.4875 23.4379 14.0625 23.0129 14.0625 22.5004V20.2379H11.875C11.3625 20.2379 10.9375 19.8254 10.9375 19.3004C10.9375 18.7879 11.3625 18.3629 11.875 18.3629H14.0625V16.2504C14.0625 15.7379 14.4875 15.3129 15 15.3129C15.5125 15.3129 15.9375 15.7379 15.9375 16.2504V18.3629H18.125C18.6375 18.3629 19.0625 18.7879 19.0625 19.3004C19.0625 19.8254 18.6375 20.2379 18.125 20.2379Z" fill="#839280"/>
							</svg>
						</div>
						<div class="flex flex-col gap-1">
							<div class="flex items-center gap-1">
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">0.00</p>
								<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.6666 10C20.6666 15.5228 16.1895 20 10.6666 20C5.14378 20 0.666626 15.5228 0.666626 10C0.666626 4.47715 5.14378 0 10.6666 0C16.1895 0 20.6666 4.47715 20.6666 10Z" fill="#E09B2D"/>
									<path d="M18.8666 10C18.8666 14.5287 15.1954 18.2 10.6666 18.2C6.13789 18.2 2.46663 14.5287 2.46663 10C2.46663 5.47127 6.13789 1.8 10.6666 1.8C15.1954 1.8 18.8666 5.47127 18.8666 10Z" fill="#FFB531"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1105 5.34601C10.3267 5.19886 12.2267 3.99508 13.87 5.72089C13.87 5.72089 15.7173 6.3464 17.0008 9.01895C17.0554 9.13247 17.1466 9.25371 17.2667 9.3796C16.9229 11.9611 15.2576 14.13 12.9645 15.2008C12.7197 14.5446 12.668 14.127 12.4742 13.7629C11.7987 12.494 10.9591 12.3984 9.98674 12.4499C9.39816 12.481 8.13048 13.4126 7.65143 13.3899C7.17253 13.3673 6.04193 12.6959 6.44563 12.4926C6.4891 12.4705 6.55354 12.4328 6.62844 12.3868C6.56376 12.1947 6.48139 11.8664 6.55455 11.5872C6.55771 11.5825 6.63254 11.4741 6.71001 11.6038C6.76808 11.7019 6.97783 11.9581 7.08763 12.0897C7.16136 12.0407 7.23741 11.9894 7.31603 11.9355C7.25438 11.7393 7.18858 11.438 7.25653 11.1791C7.25653 11.1791 7.33249 11.0624 7.41199 11.1961C7.46338 11.2829 7.63527 11.4947 7.74979 11.6341C7.8425 11.5684 7.934 11.5032 8.02377 11.4386C7.96993 11.2454 7.92519 10.9839 7.98539 10.7548C7.98625 10.7535 8.06202 10.6399 8.14085 10.7724C8.18508 10.846 8.3162 11.0108 8.42491 11.1435C8.5758 11.031 8.70748 10.9294 8.80397 10.8492C8.76645 10.6746 8.74651 10.4684 8.79485 10.2836C8.79485 10.2836 8.87118 10.1676 8.95079 10.3016C8.97832 10.3477 9.04118 10.4307 9.11058 10.5185C9.2778 10.2979 9.43511 10.0448 9.43878 9.88451C9.446 9.57057 9.29153 9.24342 8.83324 8.78832C8.70258 8.65869 8.43675 8.5676 8.10246 8.53776C8.10099 8.65794 8.10217 8.76931 8.10918 8.82676C8.13006 8.99544 7.98491 8.94397 7.98491 8.94397C7.84625 8.8364 7.73864 8.68457 7.65766 8.53397C7.53189 8.54227 7.40123 8.55746 7.26853 8.58142C7.26339 8.7632 7.26049 8.97501 7.2714 9.06355C7.29164 9.22964 7.15145 9.18226 7.14713 9.18076C6.98595 9.05637 6.86696 8.87095 6.78294 8.69863C6.65181 8.73146 6.52146 8.75846 6.39236 8.7812C6.38723 8.96474 6.38433 9.18069 6.39524 9.27045C6.41533 9.4364 6.27727 9.39124 6.27097 9.38909C6.09078 9.24856 5.96314 9.03354 5.87847 8.84574C5.73966 8.85647 5.60479 8.86264 5.47446 8.86377C5.46598 9.10177 5.45697 9.46406 5.47302 9.59694C5.49719 9.79576 5.33112 9.74087 5.32379 9.73835C5.01415 9.49787 4.83309 9.0753 4.74752 8.82296C4.44515 8.78408 4.20605 8.7224 4.06665 8.65545C4.06787 8.64268 4.12448 8.04986 4.17701 7.85395C4.36813 7.14596 4.75082 6.58578 5.72973 6.36627C6.26055 6.24793 7.24043 6.52927 7.76658 6.29556C8.29304 6.06113 8.50368 5.38195 9.13169 5.36404C9.7595 5.34494 9.89408 5.49189 10.1105 5.34601ZM4.99655 7.03679C4.82019 7.08352 4.68124 7.54873 4.78207 7.62807C4.95451 7.76198 5.17283 6.98952 4.99655 7.03679ZM8.75263 6.2035C8.75263 6.2226 8.75448 6.24182 8.75838 6.26092C8.79141 6.42648 8.95437 6.53478 9.12209 6.50199C9.28988 6.46907 9.39912 6.30807 9.36584 6.14181C9.35284 6.07551 9.31833 6.01944 9.2718 5.97762L8.75263 6.2035Z" fill="#D69123"/>
								</svg>
							</div>
							<p class="font-semibold text-[#839280] leading-none">Пополнений</p>
						</div>
					</div>
					<div class="bg-[#1A1D1A] h-full min-h-[100px] rounded-[16px] p-5 grid grid-cols-[60px_1fr] items-center gap-[10px]">
						<div class="w-15 h-15 flex items-center justify-center rounded-[8px] bg-[#141714]">
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M23.9626 8.30039C23.4251 5.58789 21.4126 4.40039 18.6126 4.40039H7.63757C4.33757 4.40039 2.13757 6.05039 2.13757 9.90039V16.3379C2.13757 19.1129 3.27507 20.7379 5.15007 21.4379C5.42507 21.5379 5.72507 21.6254 6.03757 21.6754C6.53757 21.7879 7.07507 21.8379 7.63757 21.8379H18.6251C21.9251 21.8379 24.1251 20.1879 24.1251 16.3379V9.90039C24.1251 9.31289 24.0751 8.78789 23.9626 8.30039ZM6.91257 15.0004C6.91257 15.5129 6.48757 15.9379 5.97507 15.9379C5.46257 15.9379 5.03757 15.5129 5.03757 15.0004V11.2504C5.03757 10.7379 5.46257 10.3129 5.97507 10.3129C6.48757 10.3129 6.91257 10.7379 6.91257 11.2504V15.0004ZM13.1251 16.4254C11.3001 16.4254 9.82507 14.9504 9.82507 13.1254C9.82507 11.3004 11.3001 9.82539 13.1251 9.82539C14.9501 9.82539 16.4251 11.3004 16.4251 13.1254C16.4251 14.9504 14.9501 16.4254 13.1251 16.4254ZM21.2001 15.0004C21.2001 15.5129 20.7751 15.9379 20.2626 15.9379C19.7501 15.9379 19.3251 15.5129 19.3251 15.0004V11.2504C19.3251 10.7379 19.7501 10.3129 20.2626 10.3129C20.7751 10.3129 21.2001 10.7379 21.2001 11.2504V15.0004Z" fill="#839280"/>
								<path d="M27.8751 13.6508V20.0883C27.8751 23.9383 25.6751 25.6008 22.3626 25.6008H11.3876C10.4501 25.6008 9.61258 25.4633 8.88758 25.1883C8.30008 24.9758 7.78758 24.6633 7.37508 24.2633C7.15008 24.0508 7.32508 23.7133 7.63758 23.7133H18.6126C23.2376 23.7133 25.9876 20.9633 25.9876 16.3508V9.90083C25.9876 9.60083 26.3251 9.41333 26.5376 9.63833C27.3876 10.5383 27.8751 11.8508 27.8751 13.6508Z" fill="#839280"/>
							</svg>
						</div>
						<div class="flex flex-col gap-1">
							<div class="flex items-center gap-1">
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">0.00</p>
								<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.6666 10C20.6666 15.5228 16.1895 20 10.6666 20C5.14378 20 0.666626 15.5228 0.666626 10C0.666626 4.47715 5.14378 0 10.6666 0C16.1895 0 20.6666 4.47715 20.6666 10Z" fill="#E09B2D"/>
									<path d="M18.8666 10C18.8666 14.5287 15.1954 18.2 10.6666 18.2C6.13789 18.2 2.46663 14.5287 2.46663 10C2.46663 5.47127 6.13789 1.8 10.6666 1.8C15.1954 1.8 18.8666 5.47127 18.8666 10Z" fill="#FFB531"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1105 5.34601C10.3267 5.19886 12.2267 3.99508 13.87 5.72089C13.87 5.72089 15.7173 6.3464 17.0008 9.01895C17.0554 9.13247 17.1466 9.25371 17.2667 9.3796C16.9229 11.9611 15.2576 14.13 12.9645 15.2008C12.7197 14.5446 12.668 14.127 12.4742 13.7629C11.7987 12.494 10.9591 12.3984 9.98674 12.4499C9.39816 12.481 8.13048 13.4126 7.65143 13.3899C7.17253 13.3673 6.04193 12.6959 6.44563 12.4926C6.4891 12.4705 6.55354 12.4328 6.62844 12.3868C6.56376 12.1947 6.48139 11.8664 6.55455 11.5872C6.55771 11.5825 6.63254 11.4741 6.71001 11.6038C6.76808 11.7019 6.97783 11.9581 7.08763 12.0897C7.16136 12.0407 7.23741 11.9894 7.31603 11.9355C7.25438 11.7393 7.18858 11.438 7.25653 11.1791C7.25653 11.1791 7.33249 11.0624 7.41199 11.1961C7.46338 11.2829 7.63527 11.4947 7.74979 11.6341C7.8425 11.5684 7.934 11.5032 8.02377 11.4386C7.96993 11.2454 7.92519 10.9839 7.98539 10.7548C7.98625 10.7535 8.06202 10.6399 8.14085 10.7724C8.18508 10.846 8.3162 11.0108 8.42491 11.1435C8.5758 11.031 8.70748 10.9294 8.80397 10.8492C8.76645 10.6746 8.74651 10.4684 8.79485 10.2836C8.79485 10.2836 8.87118 10.1676 8.95079 10.3016C8.97832 10.3477 9.04118 10.4307 9.11058 10.5185C9.2778 10.2979 9.43511 10.0448 9.43878 9.88451C9.446 9.57057 9.29153 9.24342 8.83324 8.78832C8.70258 8.65869 8.43675 8.5676 8.10246 8.53776C8.10099 8.65794 8.10217 8.76931 8.10918 8.82676C8.13006 8.99544 7.98491 8.94397 7.98491 8.94397C7.84625 8.8364 7.73864 8.68457 7.65766 8.53397C7.53189 8.54227 7.40123 8.55746 7.26853 8.58142C7.26339 8.7632 7.26049 8.97501 7.2714 9.06355C7.29164 9.22964 7.15145 9.18226 7.14713 9.18076C6.98595 9.05637 6.86696 8.87095 6.78294 8.69863C6.65181 8.73146 6.52146 8.75846 6.39236 8.7812C6.38723 8.96474 6.38433 9.18069 6.39524 9.27045C6.41533 9.4364 6.27727 9.39124 6.27097 9.38909C6.09078 9.24856 5.96314 9.03354 5.87847 8.84574C5.73966 8.85647 5.60479 8.86264 5.47446 8.86377C5.46598 9.10177 5.45697 9.46406 5.47302 9.59694C5.49719 9.79576 5.33112 9.74087 5.32379 9.73835C5.01415 9.49787 4.83309 9.0753 4.74752 8.82296C4.44515 8.78408 4.20605 8.7224 4.06665 8.65545C4.06787 8.64268 4.12448 8.04986 4.17701 7.85395C4.36813 7.14596 4.75082 6.58578 5.72973 6.36627C6.26055 6.24793 7.24043 6.52927 7.76658 6.29556C8.29304 6.06113 8.50368 5.38195 9.13169 5.36404C9.7595 5.34494 9.89408 5.49189 10.1105 5.34601ZM4.99655 7.03679C4.82019 7.08352 4.68124 7.54873 4.78207 7.62807C4.95451 7.76198 5.17283 6.98952 4.99655 7.03679ZM8.75263 6.2035C8.75263 6.2226 8.75448 6.24182 8.75838 6.26092C8.79141 6.42648 8.95437 6.53478 9.12209 6.50199C9.28988 6.46907 9.39912 6.30807 9.36584 6.14181C9.35284 6.07551 9.31833 6.01944 9.2718 5.97762L8.75263 6.2035Z" fill="#D69123"/>
								</svg>
							</div>
							<p class="font-semibold text-[#839280] leading-none">Заработано</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<h2 class="text-center font-bold">УРОВНИ ПРОГРАММЫ</h2>
		<div class="flex flex-col gap-2">
			<div class="p-5 rounded-[16px] bg-[#1A1D1A] min-[58px] flex justify-between items-center relative px-5 min-h-[65px] sm:min-h-[85px]">
				<div class="absolute w-full flex items-center justify-between left-0 px-5">
					<div class="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 relative z-2">
						<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 0 }" class="h-7 w-7 md:w-10 md:h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
							<p :class="{ 'text-[#FFB531]' : percent >= 0 }" class="text-[20px] font-bold text-[#839280] -rotate-45">1</p>
						</div>
					</div>
					<div class="flex items-center justify-center w-7 h-7 md:w-10 md:h-1 relative z-20">
						<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 25 }" class="h-7 w-7 md:w-10 md:h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
							<p :class="{ 'text-[#FFB531]' : percent >= 25 }" class="text-[14px] md:text-[20px] font-bold text-[#839280] -rotate-45">2</p>
						</div>
					</div>
					<div class="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 relative z-2">
						<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 50 }" class="h-7 w-7 md:w-10 md:h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
							<p :class="{ 'text-[#FFB531]' : percent >= 50 }" class="text-[14px] md:text-[20px] font-bold text-[#839280] -rotate-45">3</p>
						</div>
					</div>
					<div class="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 relative z-2">
						<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 75 }" class="h-7 w-7 md:w-10 md:h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
							<p :class="{ 'text-[#FFB531]' : percent >= 75 }" class="text-[14px] md:text-[20px] font-bold text-[#839280] -rotate-45">4</p>
						</div>
					</div>
					<div class="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 relative z-2">
						<div :class="{ 'border-[#FFB531] border-[2px]' : percent === 100 }" class="h-7 w-7 md:w-10 md:h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
							<p :class="{ 'text-[#FFB531]' : percent >= 100 }" class="text-[14px] md:text-[20px] font-bold text-[#839280] -rotate-45">5</p>
						</div>
					</div>
				</div>
				<div class="w-full min-h-[5px] bg-[#141714] rounded-full relative">
					<div :class="'w-['+ percent +'%]'" class="h-[5px] left-0 absolute top-0 bg-[#FFB531] rounded-full"></div>
				</div>
			</div>
			<div class="grid sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-5 gap-2">
				<div class=" md:col-span-2 lg:col-span-1 p-[10px] rounded-[12px] bg-[#1A1D1A] flex items-center flex-col gap-[10px]">
					<div class="flex items-center justify-center py-4">
						<div class="flex items-center justify-center w-10 h-10 relative z-2">
							<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 0 }" class="w-10 h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
								<p :class="{ 'text-[#FFB531]' : percent >= 0 }" class="text-[20px] font-bold text-[#839280] -rotate-45">1</p>
							</div>
						</div>
					</div>
					<p class="font-bold text-[15px] text-center uppercase">Первый уровень</p>
					<div class="w-full flex flex-col gap-1">
						<div class="bg-[#141714] px-5 min-h-[48px] flex items-center justify-between w-full rounded-[12px]">
							<p class="text-[#839280] text-[12px] font-medium">Промокодов:</p>
							<p class="text-[20px] font-bold text-[#FFB531]">120</p>
						</div>
						<div class="grid grid-cols-2 gap-1">
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Бонус:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">2%</p>
							</div>
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Скидка:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">20%</p>
							</div>
						</div>
					</div>
				</div>
				<div class=" md:col-span-2 lg:col-span-1 p-[10px] rounded-[12px] bg-[#1A1D1A] flex items-center flex-col gap-[10px]">
					<div class="flex items-center justify-center py-4">
						<div class="flex items-center justify-center w-10 h-10 relative z-2">
							<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 25 }" class="w-10 h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
								<p :class="{ 'text-[#FFB531]' : percent >= 25 }" class="text-[20px] font-bold text-[#839280] -rotate-45">2</p>
							</div>
						</div>
					</div>
					<p class="font-bold text-[15px] text-center uppercase">Второй уровень</p>
					<div class="w-full flex flex-col gap-1">
						<div class="bg-[#141714] px-5 min-h-[48px] flex items-center justify-between w-full rounded-[12px]">
							<p class="text-[#839280] text-[12px] font-medium">Промокодов:</p>
							<p class="text-[20px] font-bold text-[#FFB531]">120</p>
						</div>
						<div class="grid grid-cols-2 gap-1">
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Бонус:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">2%</p>
							</div>
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Скидка:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">20%</p>
							</div>
						</div>
					</div>
				</div>
				<div class=" md:col-span-2 lg:col-span-1 p-[10px] rounded-[12px] bg-[#1A1D1A] flex items-center flex-col gap-[10px]">
					<div class="flex items-center justify-center py-4">
						<div class="flex items-center justify-center w-10 h-10 relative z-2">
							<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 50 }" class="w-10 h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
								<p :class="{ 'text-[#FFB531]' : percent >= 50 }" class="text-[20px] font-bold text-[#839280] -rotate-45">3</p>
							</div>
						</div>
					</div>
					<p class="font-bold text-[15px] text-center uppercase">Третий уровень</p>
					<div class="w-full flex flex-col gap-1">
						<div class="bg-[#141714] px-5 min-h-[48px] flex items-center justify-between w-full rounded-[12px]">
							<p class="text-[#839280] text-[12px] font-medium">Промокодов:</p>
							<p class="text-[20px] font-bold text-[#FFB531]">120</p>
						</div>
						<div class="grid grid-cols-2 gap-1">
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Бонус:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">2%</p>
							</div>
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Скидка:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">20%</p>
							</div>
						</div>
					</div>
				</div>
				<div class=" md:col-span-3 lg:col-span-1 p-[10px] rounded-[12px] bg-[#1A1D1A] flex items-center flex-col gap-[10px]">
					<div class="flex items-center justify-center py-4">
						<div class="flex items-center justify-center w-10 h-10 relative z-2">
							<div :class="{ 'border-[#FFB531] border-[2px]' : percent >= 75 }" class="w-10 h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
								<p :class="{ 'text-[#FFB531]' : percent >= 75 }" class="text-[20px] font-bold text-[#839280] -rotate-45">4</p>
							</div>
						</div>
					</div>
					<p class="font-bold text-[15px] text-center uppercase">Четвёртый уровень</p>
					<div class="w-full flex flex-col gap-1">
						<div class="bg-[#141714] px-5 min-h-[48px] flex items-center justify-between w-full rounded-[12px]">
							<p class="text-[#839280] text-[12px] font-medium">Промокодов:</p>
							<p class="text-[20px] font-bold text-[#FFB531]">120</p>
						</div>
						<div class="grid grid-cols-2 gap-1">
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Бонус:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">2%</p>
							</div>
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Скидка:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">20%</p>
							</div>
						</div>
					</div>
				</div>
				<div class="sm:col-span-2 md:col-span-3 lg:col-span-1 p-[10px] rounded-[12px] bg-[#1A1D1A] flex items-center flex-col gap-[10px]">
					<div class="flex items-center justify-center py-4">
						<div class="flex items-center justify-center w-10 h-10 relative z-2">
							<div :class="{ 'border-[#FFB531] border-[2px]' : percent === 100 }" class="w-10 h-10 flex items-center justify-center rotate-45 bg-[#141714] rounded-[5px]">
								<p :class="{ 'text-[#FFB531]' : percent === 100 }" class="text-[20px] font-bold text-[#839280] -rotate-45">5</p>
							</div>
						</div>
					</div>
					<p class="font-bold text-[15px] text-center uppercase">Пятый уровень</p>
					<div class="w-full flex flex-col gap-1">
						<div class="bg-[#141714] px-5 min-h-[48px] flex items-center justify-between w-full rounded-[12px]">
							<p class="text-[#839280] text-[12px] font-medium">Промокодов:</p>
							<p class="text-[20px] font-bold text-[#FFB531]">120</p>
						</div>
						<div class="grid grid-cols-2 gap-1">
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Бонус:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">2%</p>
							</div>
							<div class="bg-[#141714] p-3 min-h-[48px] flex items-center flex-col justify-center w-full gap-1 rounded-[12px]">
								<p class="text-[#839280] text-[12px] font-medium leading-none">Скидка:</p>
								<p class="text-[20px] font-bold text-[#FFB531] leading-none">20%</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-[#1A1D1A] p-3 sm:p-5 rounded-[20px] gap-5 flex flex-col">
			<p class="font-bold">Статистика промокодов</p>
			<div class="flex flex-col gap-2">
				<div class="flex items-center md:px-[26px] px-[10px]">
					<div class="w-[5%] min-w-[30px] flex items-center">
						<p class="text-[#839280] text-[10px] sm:text-[12px] font-semibold leading-none">ID</p>
					</div>
					<div class="w-[25%] min-w-[70px] flex items-center justify-center">
						<p class="text-[#839280] text-[10px] sm:text-[12px] font-semibold leading-none">Промокод</p>
					</div>
					<div class="w-[30%] min-w-[70px] flex items-center justify-center">
						<p class="text-[#839280] text-[10px] sm:text-[12px] font-semibold leading-none">Активации</p>
					</div>
					<div class="w-[30%] min-w-[70px] flex items-center justify-center">
						<p class="text-[#839280] text-[10px] sm:text-[12px] font-semibold leading-none">Заработано</p>
					</div>
					<div class="w-[10%] min-w-[70px] flex items-center justify-end">
						<p class="text-[#839280] text-[10px] sm:text-[12px] font-semibold leading-none">Статистика</p>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<div v-for="i in 10" class="flex items-center bg-[#141714] rounded-[12px] md:px-[26px] px-[10px]">
						<div class="w-[5%] min-w-[30px] min-h-[48px] flex items-center">
							<p class="text-[10px] sm:text-[12px] font-semibold leading-none">{{ i }}</p>
						</div>
						<div class="w-[25%] min-w-[70px] min-h-[48px] flex items-center justify-center">
							<p class="text-[10px] sm:text-[12px] font-semibold leading-none uppercase">D7F9K2M4R8</p>
						</div>
						<div class="w-[30%] min-w-[70px] min-h-[48px] flex items-center justify-center">
							<p class="text-[10px] sm:text-[12px] font-semibold leading-none">200</p>
						</div>
						<div class="w-[30%] min-w-[70px] min-h-[48px] flex items-center justify-center">
							<div class="flex items-center gap-1">
								<p class="text-[10px] text-[#FFB531] sm:text-[12px] font-semibold leading-none">200</p>
								<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.8 6.56836C13.8 10.1582 10.8899 13.0684 7.30005 13.0684C3.7102 13.0684 0.800049 10.1582 0.800049 6.56836C0.800049 2.97851 3.7102 0.0683594 7.30005 0.0683594C10.8899 0.0683594 13.8 2.97851 13.8 6.56836Z" fill="#E09B2D"/>
									<path d="M12.63 6.56836C12.63 9.51204 10.2437 11.8984 7.30005 11.8984C4.35637 11.8984 1.97005 9.51204 1.97005 6.56836C1.97005 3.62468 4.35637 1.23836 7.30005 1.23836C10.2437 1.23836 12.63 3.62468 12.63 6.56836Z" fill="#FFB531"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M6.93853 3.5419C7.07903 3.44625 8.31402 2.6638 9.38216 3.78557C9.38216 3.78557 10.5829 4.19215 11.4172 5.92931C11.4527 6.0031 11.512 6.0819 11.59 6.16373C11.3666 7.84169 10.2841 9.25148 8.79363 9.9475C8.6345 9.52095 8.60089 9.24956 8.47489 9.01289C8.03583 8.18806 7.49011 8.12596 6.85807 8.15941C6.47549 8.17965 5.6515 8.78516 5.34011 8.77045C5.02883 8.75572 4.29394 8.31931 4.55634 8.18717C4.5846 8.1728 4.62649 8.1483 4.67517 8.11838C4.63313 7.99357 4.57959 7.78014 4.62714 7.59864C4.6292 7.5956 4.67784 7.52517 4.72819 7.60944C4.76594 7.6732 4.90228 7.83977 4.97365 7.92529C5.02157 7.89342 5.071 7.86007 5.12211 7.82505C5.08203 7.69755 5.03927 7.50167 5.08343 7.33338C5.08343 7.33338 5.1328 7.25755 5.18448 7.34448C5.21789 7.40085 5.32961 7.53857 5.40405 7.62918C5.46431 7.58646 5.52378 7.54408 5.58214 7.5021C5.54714 7.37651 5.51806 7.20654 5.55719 7.05762C5.55775 7.05677 5.607 6.9829 5.65824 7.06903C5.68699 7.11691 5.77222 7.22402 5.84288 7.31024C5.94096 7.23715 6.02655 7.17112 6.08927 7.119C6.06488 7.0055 6.05192 6.87144 6.08334 6.75133C6.08334 6.75133 6.13295 6.67595 6.1847 6.76305C6.2026 6.793 6.24346 6.84694 6.28856 6.90401C6.39725 6.7606 6.49951 6.59611 6.50189 6.49192C6.50659 6.28786 6.40618 6.07521 6.10829 5.7794C6.02336 5.69514 5.85058 5.63593 5.63329 5.61654C5.63233 5.69466 5.6331 5.76704 5.63765 5.80438C5.65123 5.91403 5.55688 5.88057 5.55688 5.88057C5.46675 5.81065 5.3968 5.71196 5.34417 5.61407C5.26242 5.61947 5.17749 5.62934 5.09123 5.64492C5.08789 5.76307 5.086 5.90075 5.0931 5.9583C5.10626 6.06626 5.01513 6.03546 5.01232 6.03449C4.90755 5.95363 4.83021 5.83311 4.7756 5.7211C4.69036 5.74244 4.60564 5.75999 4.52172 5.77477C4.51838 5.89408 4.5165 6.03444 4.5236 6.09279C4.53665 6.20065 4.44691 6.1713 4.44282 6.1699C4.32569 6.07855 4.24273 5.9388 4.18769 5.81672C4.09747 5.8237 4.0098 5.82771 3.92508 5.82844C3.91957 5.98314 3.91372 6.21863 3.92415 6.305C3.93986 6.43424 3.83191 6.39855 3.82715 6.39692C3.62589 6.24061 3.5082 5.96594 3.45258 5.80192C3.25603 5.77664 3.10062 5.73656 3.01001 5.69303C3.0108 5.68474 3.0476 5.2994 3.08174 5.17206C3.20597 4.71187 3.45472 4.34775 4.09101 4.20507C4.43605 4.12815 5.07297 4.31102 5.41497 4.15911C5.75716 4.00673 5.89408 3.56526 6.30228 3.55362C6.71036 3.5412 6.79784 3.63672 6.93853 3.5419ZM3.61445 4.64091C3.49981 4.67128 3.40949 4.97367 3.47503 5.02524C3.58712 5.11228 3.72902 4.61018 3.61445 4.64091ZM6.05589 4.09927C6.05589 4.11168 6.0571 4.12417 6.05964 4.13659C6.0811 4.2442 6.18703 4.3146 6.29605 4.29328C6.40511 4.27189 6.47612 4.16724 6.45449 4.05917C6.44603 4.01607 6.4236 3.97963 6.39336 3.95244L6.05589 4.09927Z" fill="#D69123"/>
								</svg>
							</div>
						</div>
						<div class="w-[10%] min-w-[70px] min-h-[48px] flex items-center justify-end">
							<button @click="openModal('infoReferrals')" class="rounded-[8px] items-center justify-center cursor-pointer active:scale-95 hover:opacity-80 duration-200 green-btn flex w-10 h-10">
								<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M4.40002 5.56836V19.5684C4.40002 21.2253 5.74317 22.5684 7.40002 22.5684H17.4C19.0569 22.5684 20.4 21.2253 20.4 19.5684V9.56836C20.4 7.91151 19.0569 6.56836 17.4 6.56836H5.40002C4.84774 6.56836 4.40002 6.12064 4.40002 5.56836ZM7.65002 12.5684C7.65002 12.1542 7.98581 11.8184 8.40002 11.8184H16.4C16.8142 11.8184 17.15 12.1542 17.15 12.5684C17.15 12.9826 16.8142 13.3184 16.4 13.3184H8.40002C7.98581 13.3184 7.65002 12.9826 7.65002 12.5684ZM7.65002 16.0684C7.65002 15.6542 7.98581 15.3184 8.40002 15.3184H13.9C14.3142 15.3184 14.65 15.6542 14.65 16.0684C14.65 16.4826 14.3142 16.8184 13.9 16.8184H8.40002C7.98581 16.8184 7.65002 16.4826 7.65002 16.0684Z" fill="#839280"/>
									<path d="M4.80884 4.65644C5.15732 4.81272 5.40005 5.16268 5.40005 5.56934H17.4C17.7453 5.56934 18.0804 5.61309 18.4 5.69536V4.87538C18.4 3.65828 17.322 2.72336 16.1172 2.89548L5.31964 4.43799C5.12717 4.46549 4.95276 4.54308 4.80884 4.65644Z" fill="#839280"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>