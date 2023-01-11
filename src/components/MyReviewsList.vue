<template>
  <div class="reviews">
        <h3 v-if="reviews" class="title">Отзывы</h3>
        <button @click="this.newReviewForm.isOpen = true" type="button" class="btn btn-secondary menu-item__button">Оставить озыв</button>
        <div v-if="this.newReviewForm.isOpen" class="new-review-form">
            <p v-if="this.newReviewForm.errors.length">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>
            <form @submit.prevent class="join-form">
                
                <div class="inp">
                    <p  class="inp__description">Текст отзыва: <button  @click="this.newReviewForm.isOpen = false;" class=" btn btn-light close">Close</button></p>
                    <input v-model="this.newReviewForm.text" type="text" class="inp__text" placeholder="Введите текст" name="name"  required >
                </div>

                <button  @click="checkForm();"  class="review-submit-btn btn btn-primary">Оставить отзыв</button>
                <p class="mark">Коментарый будет проверен модератором</p>
            </form>
        </div>
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
            reviews: [],
            newReviewForm: {
                isOpen: false,
                text: '',
                errors: []
            }
        };
    },
    methods: {
        getData() {
            fetch("/reviews.json")
                .then(response => response.json())
                .then(data => (this.reviews = data));
        },
        checkForm: function (e) {
            if (this.newReviewForm.text) {
                this.newReviewForm.isOpen = false; 
                return true;
            }

            this.this.newReviewForm.errors = [];

            if (!this.newReviewForm.text) {
                this.this.newReviewForm.errors.push('Требуется ввести текст.');
            }

           
        }
    },
    beforeMount() {
        this.getData();
    }
}
</script>

<style scoped>

.close
{
    display: inline;
    margin-top: 0;
    margin-left: 70%;
}
.new-review-form
{
    border: 1px gray solid;
    border-radius: 15px;
    margin: 10px 10px 10px 0;
}
.review-submit-btn
{
    margin: 10px;
}

.inp__description
{
    margin: 10px;
}
.inp__text
{
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
}

.menu-item__button
{
    
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    

    border-radius: 15px;

    width: 30%;
    line-height: 20px;
    text-align: center;
}
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