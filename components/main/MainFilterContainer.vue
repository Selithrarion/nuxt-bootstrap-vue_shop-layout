<template>
	<span>
		<b-button v-b-toggle.sidebar-1 variant="light">Фильтры</b-button>
		<b-sidebar id="sidebar-1" title="Фильтры" shadow>
			<div class="wrapper px-3 py-2">
				<MainFilterVideos v-if="isVideosPage" />
				<MainGraphicsFilter v-if="isGraphicsPage" />
				<MainPhotosFilter v-if="isPhotosPage" />
				<MainMusicsFilter v-if="isMusicsPage" />
			</div>
		</b-sidebar>
	</span>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		isVideosPage() {
			return this.$route.path === '/stock-videos';
		},
		isGraphicsPage() {
			return this.$route.path === '/graphics';
		},
		isPhotosPage() {
			return this.$route.path === '/photos';
		},
		isMusicsPage() {
			return this.$route.path === '/musics';
		},
	},
};
</script>

<style scoped lang="stylus">
.wrapper {
  user-select none
}
</style>
