<template>
  <div class="wrap">
	<NewLessonForm></NewLessonForm>
    <div class="items-container">
        <LessonLink v-bind:lesson="lesson" v-for="lesson in this.$store.getters.getAll" v-bind:key="lesson.id"></LessonLink>
    </div>
  </div>
</template>

<script>

import LessonLink from '@/components/LessonLink.vue';
import NewLessonForm from '@/components/NewLessonForm.vue';

export default {
	
    components: {
        LessonLink, NewLessonForm
    }
}
</script>

<style scoped>
.items-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.wrap
{
	display: flex;
	flex-direction: column;
	align-items: center;
}


</style>