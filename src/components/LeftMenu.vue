<template>
    <div class="wrap">
        <div class="container__left">
            <ul class="menu">
                <li class="menu-item">
                    <router-link 
                            class="menu-item__button" 
                            :to="{ name: 'main'}" 
                        >
                        <button type="button" class="btn btn-primary menu-item__button">Главная</button>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link 
                            class="menu-item__button" 
                            :to="{ name: 'lessonsList'}" 
                        >
                        <button type="button" class="btn btn-primary menu-item__button">Курсы</button>
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
    width: 300px;
    
}

.menu-item
{
    display: flex;
    
    width: 200px;
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
    
    background: #1e88e5;
    border-color: #1e88e5;
    border-radius: 15px;

    width: 100%;
    line-height: 100px;
    text-align: center;
}
</style>