<template>
	<b-breadcrumb class="mt-4">
		<b-breadcrumb-item to="/"> Главная </b-breadcrumb-item>
		<b-breadcrumb-item
			to="/stock-videos"
			v-if="$route.path === '/stock-videos'"
			active
		>
			Стоковое видео
		</b-breadcrumb-item>
		<b-breadcrumb-item
			to="/stock-videos"
			v-if="$route.path === '/graphics'"
			active
		>
			Графика
		</b-breadcrumb-item>
		<b-breadcrumb-item
			to="/stock-videos"
			v-if="$route.path === '/photos'"
			active
		>
			Фотографии
		</b-breadcrumb-item>
		<b-breadcrumb-item
			to="/stock-videos"
			v-if="$route.path === '/musics'"
			active
		>
			Музыка
		</b-breadcrumb-item>
	</b-breadcrumb>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style scoped></style>
