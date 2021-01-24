<template>
	<div>
		<MainBreadcrumbs />
		<MainSortFilterContainer />
		<MainItemSoundContainer />

		<b-pagination
			v-model="currentPage"
			style="margin-top: 3rem"
			:total-rows="totalPages"
			:per-page="perPage"
			align="center"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPage: 1,
			totalPages: 10,
			perPage: 1,
		};
	},
};
</script>

<style scoped></style>
