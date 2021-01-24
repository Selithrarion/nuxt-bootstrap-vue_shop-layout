<template>
	<b-navbar toggleable="lg" type="light" variant="faded" fixed>
		<b-navbar-brand href="#">LOGO</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav class="ml-auto mr-4">
				<b-nav-form>
					<b-form-input
						size="sm"
						class="mr-sm-2"
						placeholder="Поиск"
					></b-form-input>
					<b-button size="sm" variant="light">
						<b-icon icon="search"></b-icon>
					</b-button>
				</b-nav-form>
			</b-navbar-nav>

			<b-navbar-nav>
				<b-nav-item>
					<b-icon icon="person-circle" class="mr-1"></b-icon>
					<span>Войти</span>
				</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {};
</script>

<style scoped></style>
