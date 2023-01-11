<template>
    <div class="lesson">
            <router-link 
                class="link" 
                :to="{ name: 'lesson', params: {id : lesson.id}}" 
                >
                    <img src="@/assets/lesson-preview.png" alt="lesson-preview" class="lesson__img">
                    <div class="text-block">
                        <h3 class="lesson__name">{{lesson.name}}</h3>
                        <p class="lesson__description">{{ lesson.description }}</p>
                </div>
            </router-link>
        </div>
</template>

<script>
export default {
    props: {
        lesson: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

.lesson
{
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 20px auto;
    
    border-radius: 15px;
    border: 1px #fff solid;

    text-align: center;

}
.lesson:hover
{
    border-radius: 15px;
    border: 1px gray solid;
}

.text-block
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.lesson__img
{
    width: 300px;
    height: 270px;
}
.lesson__description
{
    width: 200px;
    text-align: center;

    font-size: 11px;

    height: 50px;
}
</style>