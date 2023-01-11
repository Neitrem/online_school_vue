<template>
  <div class="reviews">
            <h3 v-if="reviews" class="title">Отзывы</h3>
             <div class="reviews__container">
                <MyReview v-bind:review="review" v-for="review in reviews" v-bind:key="review"></MyReview>
             </div>
        </div>
</template>

<script>

import MyReview from '@/components/MyReview.vue';

export default {
    components:
    {
        MyReview
    },
    data() {
        return {
            reviews: []
        };
    },
    methods: {
        getData() {
            fetch("/reviews.json")
                .then(response => response.json())
                .then(data => (this.reviews = data));
        }
    },
    beforeMount() {
        this.getData();
    }
}
</script>

<style scoped>
.reviews
{
    width: 80%;
    margin-bottom: 40px;
}

.reviews__container
{
    display: flex;
    flex-direction: column;
    align-items: center;
}



</style>