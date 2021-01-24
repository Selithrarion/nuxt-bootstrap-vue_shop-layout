<template>
	<div>
		<div>
			<div>Ориентация</div>
			<b-form-checkbox
				id="checkbox-album"
				v-model="isAlbum"
				name="checkbox-album"
				size="lg"
			>
				Альбомная
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-portrait"
				v-model="isPortrait"
				name="checkbox-portrait"
				size="lg"
			>
				Портретная
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-square"
				v-model="isSquare"
				name="checkbox-square"
				size="lg"
			>
				Квадратная
			</b-form-checkbox>
		</div>

		<div class="mt-3">
			<div>Фон</div>
			<b-form-checkbox
				id="checkbox-clear"
				v-model="isClearBack"
				name="checkbox-clear"
				size="lg"
			>
				Чёткий
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-blur"
				v-model="isBlurBack"
				name="checkbox-blur"
				size="lg"
			>
				Размытый
			</b-form-checkbox>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isAlbum: false,
			isPortrait: false,
			isSquare: false,
			isClearBack: false,
			isBlurBack: false,
			selectedColor: null,
		};
	},
};
</script>

<style scoped></style>
