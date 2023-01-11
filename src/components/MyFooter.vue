<template>
    <footer class="footer">
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
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer
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