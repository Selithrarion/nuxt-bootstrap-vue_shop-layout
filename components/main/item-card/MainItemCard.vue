<template>
	<b-card
		title="Lorem Title Lorem Title Lorem Title"
		img-src="https://picsum.photos/600/300/?image=25"
		img-alt="Image"
		img-top
		tag="article"
		class="mb-2"
	>
		<b-card-text>
			От Lorem
		</b-card-text>

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
