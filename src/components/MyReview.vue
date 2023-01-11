<template>
    <div class="review">
        <img src="@/assets/character_1.png" alt="" class="review__character">
        <p class="review__text">{{ review.text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        review: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.review
{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin: 20px;
    border: #1e88e5 1px solid;
    border-radius: 15px;

    padding: 10px;
}

.review__character
{
    width: 150px;
    margin-left: 40px;
    margin-right: 80px;
}

.review__text
{
    margin-right: 80px;
}
</style>