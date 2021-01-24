<template>
	<b-nav fill tabs>
		<b-nav-item
			to="/stock-videos"
			exact
			:active="$route.path === '/stock-videos'"
			>Стоковое видео</b-nav-item
		>
		<b-nav-item to="/graphics" exact :active="$route.path === '/graphics'"
			>Графика</b-nav-item
		>
		<b-nav-item to="/photos" exact :active="$route.path === '/photos'"
			>Фотографии</b-nav-item
		>
		<b-nav-item to="/musics" exact :active="$route.path === '/musics'"
			>Музыка</b-nav-item
		>
	</b-nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
