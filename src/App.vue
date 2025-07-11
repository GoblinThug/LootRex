<script setup>
	import {config} from "jenesius-vue-modal";
	import {container as WidgetContainerModal} from "jenesius-vue-modal";
	import { RouterView } from 'vue-router'

	import Header from "@/components/Header.vue";
	import LiveFeed from "@/components/LiveFeed.vue";
	import Footer from "@/components/Footer.vue";
	import BonusWindow from "@/components/BonusWindow.vue";
	import Notifications from "@/components/Notifications.vue";

	import AuthModal from "@/components/modals/AuthModal.vue";
	import RequirementModal from "@/components/modals/RequirementModal.vue";
	import HowItWorkModal from "@/components/modals/HowItWorkModal.vue";
	import CalendarInfoModal from "@/components/modals/CalendarInfoModal.vue";
	import CreatePromoModal from "@/components/modals/referral/CreatePromoModal.vue";
	import WithdrawModal from "@/components/modals/referral/WithdrawModal.vue";
	import InfoPromoModal from "@/components/modals/referral/InfoPromoModal.vue";

	config({
		store: {
			auth: AuthModal,
			requirement: RequirementModal,
			howItWork: HowItWorkModal,
			calendarInfo: CalendarInfoModal,
			createPromo: CreatePromoModal,
			referralWithdraw: WithdrawModal,
			infoReferrals: InfoPromoModal,
		}
	});
</script>

<template>
	<div class="h-full flex flex-col gap-10">
		<div class="flex flex-col gap-1 relative grow-0 shrink-0 basis-auto">
			<Header/>
			<LiveFeed/>
			<!-- Окно с бонусом -->
			<BonusWindow class="hidden"/>
			<!-- Окно с уведомлениями -->
			<Notifications class="hidden"/>
		</div>
		<div class="px-2 grow shrink-0 basis-auto">
			<WidgetContainerModal/>
			<Transition name="fade">
				<router-view/>
			</Transition>
		</div>
		<Footer class="grow-0 shrink-0 basis-auto"/>
	</div>
</template>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>