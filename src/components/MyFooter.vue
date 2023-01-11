<template>
    <div class="wrap">
        <router-link 
                class="menu-item__button" 
                :to="{ name: 'main'}" 
            >
                Главная
        </router-link>
        <router-link 
                class="menu-item__button" 
                :to="{ name: 'lessonsList'}" 
            >
                Курсы
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap
{
    display: flex;
    justify-content: right;
    align-items: center;
    height: 50px;
    background: #000;
}

.menu-item__button
{
    color: #fff;
    text-decoration: none;
    margin-right: 90px;
}
</style>