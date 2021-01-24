<template>
	<div>
		<div>
			<div>Свойства</div>
			<b-form-checkbox
				id="checkbox-vector"
				v-model="isVector"
				name="checkbox-vector"
				size="lg"
			>
				Векторная
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-many-layers"
				v-model="isManyLayers"
				name="checkbox-many-layers"
				size="lg"
			>
				Многослойные
			</b-form-checkbox>
		</div>

		<div class="mt-3">
			<div>Типы файлов</div>
			<b-form-checkbox
				id="checkbox-jpg"
				v-model="isJPG"
				name="checkbox-jpg"
				size="lg"
			>
				JPG
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-png"
				v-model="isPNG"
				name="checkbox-png"
				size="lg"
			>
				PNG
			</b-form-checkbox>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isVector: false,
			isManyLayers: false,
			isJPG: false,
			isPNG: false,
		};
	},
};
</script>

<style scoped></style>
