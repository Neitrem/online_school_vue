<template>
	<div class="wrap">
		<div class="container__left">
			<div class="inner">
				<div class="logo">
					<p class="logo__text">
						WEBclass
					</p>
				</div>
			</div>
		</div>
		

		<div class="inner">
			<div class="search">
				<input class="search__input" type="text" placeholder="Поиск">
			</div>
		</div>

  	</div>
</template>

<script>

export default {
	name: 'MyHeader'
}
</script>

<style scoped>

.inner
{
	margin: 40px auto 40px auto;
	
}

.wrap
{
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;

	border-bottom: 1px gray solid;
}

.logo
{
	color: #1e88e5;
	
}

.logo__text
{
	text-align: center;
	font-size: 40px;
	font-family: fantasy;
}

.search{
	
}
.search__input
{
	padding-left: 10px;
	border-radius: 15px;
	font-size: 20px;
}
</style>