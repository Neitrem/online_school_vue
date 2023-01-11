<template>
    <div class="wrap">
        <ModalWindow v-show="this.$store.state.isOpenForm"></ModalWindow>
        <h2 v-if="lesson" class="name">
            {{ lesson.name }}
        </h2>
        <div class="params">
            <p v-if="lesson" class="cost param">Цена: <span class="value">{{ lesson.cost }}</span> р.</p>
            <p v-if="lesson" class="duration param">Продолжительность: <span class="value">{{ lesson.duration }} </span>мес.</p>
        </div>
        <button @click="this.$store.commit('changeVisibility')" class="join btn btn-primary">Записаться</button>
        <div v-if="lesson" class="description">
            <p class="description__text">{{ lesson.description }}</p>
            <img src="@/assets/lesson-preview.png" class="medium-img" alt="">
        </div>
        <div class="tasks">
            <h3 class="title">Примеры задач</h3>
            <div v-if="lesson" class="tasks__container">
                <p  v-for="task in lesson.tasks" v-bind:key="task" class="task">{{task.text}}</p>
                
            </div>
        </div>
        <button @click="this.$store.commit('changeVisibility')" class="join btn btn-primary">Записаться</button>
        <MyReviewsList></MyReviewsList>
    </div>
</template>

<script>

import MyReviewsList from '@/components/MyReviewsList.vue'
import ModalWindow from '@/components/ModalWindow.vue'

export default {
    data () {
        return {
            lesson: {}
        }
    },
    components: {
        MyReviewsList, ModalWindow
    },
    methods: {
        setLesson() {
                this.lesson = this.$store.getters.getById(this.$route.params.id);
        }
    },
    beforeMount () {
        this.setLesson();
    },
    mounted() {
        this.lesson = this.$store.getters.getById(this.$route.params.id);
    },
    beforeUnmount() {
        if(this.$store.state.isOpenForm){
            this.$store.commit('changeVisibility')
        }
    }
}
</script>

<style scoped>
.wrap
{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.name
{
    margin: 80px 0;

    font-size: 45px;
}

.params
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.param
{
    font-size: 20px;
    
    margin: 0 80px;
}

.value
{
    font-size: 20px;
    color: gray;
}

.join
{
    margin: 30px;

    width: 300px;
    height: 40px;

    border: none;
    background: #1e88e5;

    border-radius: 15px;
    color: #fff;

    cursor: pointer;
}

.description
{
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.medium-img
{
    margin-right: 80px;
}
@media (max-width: 1667px)
{
    .medium-img
    {
        display: none;
    }
}

.description__text
{
    font-size: 35px;
    width: 500px;
    margin-left: 80px;
}

.tasks
{
    margin: 40px;
    width: 80%;
}

.title
{
    font-size: 20px;
    margin-bottom: 20px;
}

.tasks__container
{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.task
{
    margin: 15px;
    width: 40%;
    text-align: left;

    border: #1e88e5 1px solid;
    border-radius: 15px;

    padding: 5px;
}


</style>