<template>
	<div>
		<div>
			<div>Свойства</div>
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
			<div>Темп</div>
			<b-form-checkbox
				id="checkbox-very-slow"
				v-model="isVerySlow"
				name="checkbox-very-slow"
				size="lg"
			>
				Очень медленный (менее 60 уд./мин.)
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-slow"
				v-model="isSlow"
				name="checkbox-slow"
				size="lg"
			>
				Замедленный (60-90 уд./мин.)
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-medium"
				v-model="isMedium"
				name="checkbox-medium"
				size="lg"
			>
				Средний (90-110 уд./мин.)
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-fast"
				v-model="isFast"
				name="checkbox-fast"
				size="lg"
			>
				Быстрый (110-160 уд./мин.)
			</b-form-checkbox>
			<b-form-checkbox
				id="checkbox-very-fast"
				v-model="isVeryFast"
				name="checkbox-slow"
				size="lg"
			>
				Очень быстрый (160 и выше уд./мин.)
			</b-form-checkbox>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLoop: false,
			isVerySlow: false,
			isSlow: false,
			isMedium: false,
			isFast: false,
			isVeryFast: false,
		};
	},
};
</script>

<style scoped></style>
