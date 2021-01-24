<template>
	<b-form-select
		v-model="selected"
		:options="options"
		@change="sort"
	></b-form-select>
</template>

<script>
export default {
	data() {
		return {
			selected: 'popular',
			options: [
				{ value: 'popular', text: 'Сортировать по популярности' },
				{ value: 'date', text: 'Сортировать по новизне' },
			],
		};
	},
	methods: {
		sort() {
			console.log('sort', this.selected);
		},
	},
};
</script>

<style scoped lang="stylus">
.custom-select {
  width: 20rem
}
</style>
