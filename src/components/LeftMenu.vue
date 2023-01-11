<template>
    <div class="wrap">
        <div class="container__left">
            <ul class="menu">
                <li class="menu-item">
                    <router-link 
                            class="menu-item__button" 
                            :to="{ name: 'main'}" 
                        >
                            Главная
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link 
                            class="menu-item__button" 
                            :to="{ name: 'lessonsList'}" 
                        >
                            Курсы
                    </router-link>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.wrap
{
    display: inline-flex;

}

.menu
{
    margin: 80px auto 80px auto;
    list-style: none;
    width: 200px;
    
}

.menu-item
{
    display: flex;
    background-color: #1e88e5;
    height: 100px;
    margin: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
}

.menu-item__button
{
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
</style>