<template>
	<div>
		<div>
			<div>Свойства</div>
			<b-form-checkbox
				id="checkbox-alpha"
				v-model="isAlphaChannel"
				name="checkbox-alpha"
				size="lg"
			>
				Альфа-канал
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-loop"
				v-model="isLoop"
				name="checkbox-loop"
				size="lg"
			>
				Зацикленные
			</b-form-checkbox>
		</div>

		<div class="mt-3">
			<div>Частота кадров</div>
			<b-form-checkbox
				id="checkbox-24-fps"
				v-model="is24fps"
				name="checkbox-24-fps"
				size="lg"
			>
				24 кадров/с
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-25-fps"
				v-model="is25fps"
				name="checkbox-25-fps"
				size="lg"
			>
				25 кадров/с
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-30-fps"
				v-model="is30fps"
				name="checkbox-30-fps"
				size="lg"
			>
				30 кадров/с
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-50-fps"
				v-model="is50fps"
				name="checkbox-50-fps"
				size="lg"
			>
				50 кадров/с
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-60-fps"
				v-model="is60fps"
				name="checkbox-60-fps"
				size="lg"
			>
				60 кадров/с
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-more-60-fps"
				v-model="isMore60fps"
				name="checkbox-more-60-fps"
				size="lg"
			>
				больше 60 кадров/с
			</b-form-checkbox>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isAlphaChannel: false,
			isLoop: false,
			is24fps: false,
			is25fps: false,
			is30fps: false,
			is50fps: false,
			is60fps: false,
			isMore60fps: false,
		};
	},
};
</script>

<style scoped></style>
