<template>
	<b-card
		title="Lorem Title Lorem Title Lorem Title"
		tag="article"
		style="min-width: 100%"
		class="mb-2"
	>
		<b-card-text>
			<span>От Lorem</span>
			<span>
				<span>
					<b-icon icon="clock" />
					<span>1:00</span>
				</span>
				<span class="ml-2">150 BPM</span>
			</span>
		</b-card-text>

		<hr />

		<div class="card-actions">
			<b-button variant="primary">
				<b-icon icon="download"></b-icon>
			</b-button>
			<b-button variant="light">
				<b-icon icon="bookmark"></b-icon>
			</b-button>
		</div>
	</b-card>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.card-title {
  font-size 1.5rem
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
}
.card-text {
  display flex
  justify-content space-between
  font-size 0.8rem
  color #999999
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
}
.card-actions {
  display flex
  justify-content space-between
}
</style>
