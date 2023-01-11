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
		

		<div class="inner right-inner">
			<div class="source-links">
				<a href="/all.json" class="link-secondary">JSON</a>
				<a href="https://github.com/Neitrem/online_school_vue" class="link-secondary">GIT</a>
			</div>
			<div class="search">
				<input class="search__input" type="text" placeholder="Поиск">
			</div>
			<div class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="gray" class="bi bi-person-circle" viewBox="0 0 16 16">
					<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
					<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
				</svg>
				<p class="icon__text">Gorshenin Andrew</p>
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

.source-links
{
	width: 200px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-right: 20px;
}
.inner
{
	width: fit-content;
	
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 40px auto 40px auto;
}

.right-inner
{
	justify-content: space-between;
	margin: 30px 0;

	margin-right:30px;

}

.icon 
{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 20%;
}

.icon__text
{
	margin: 0;
	text-align: center;
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
	color: #1e88e5 !important;
	
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