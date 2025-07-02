<script setup>
	import Header from "@/components/Header.vue";
	import LiveFeed from "@/components/LiveFeed.vue";
	import Footer from "@/components/Footer.vue";
</script>

<template>
	<div class="h-full flex flex-col gap-10">
		<div class="flex flex-col gap-1">
			<Header/>
			<LiveFeed/>
		</div>
		<div class="px-2">
			<router-view/>
		</div>
		<Footer/>
	</div>
</template>

<style scoped>

</style>
