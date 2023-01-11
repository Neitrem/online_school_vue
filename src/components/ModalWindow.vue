<template>
   <div class="modal-window">
            <h2 class="title">Запись на курс</h2>
            <form @submit.prevent class="join-form">
                <div class="inp">
                    <p class="inp__description">Введите ваше имя:</p>
                    <input type="text" class="inp__text" placeholder="Ваше имя" name="name">
                </div>

                <div class="inp">
                    <p class="inp__description">Введите контактный телефон:</p>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="inp__text" placeholder="+7 900 900 90 90" name="phone_number">
                </div>

                <button @click="this.$store.commit('changeVisibility')"  class="modal-submit-btn btn btn-primary">Отправить</button>
            </form>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.modal-window
{

    position: fixed;

    top: 30%;

    z-index: 9999;

    border: 1px gray solid;
    border-radius: 15px;
    padding: 20px;

    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #fff;
}

.title
{
    text-align: center;
    margin-bottom: 30px;
}

.join-form
{
    width: 50%;

    display: flex;
    flex-direction: column;
    
}


.inp
{
    margin-bottom: 40px;
}

.inp__description
{
    margin-bottom: 10px;
}
.inp__text
{
    width: 100%;

    font-size: 20px;

    border: #1e88e5 1px solid;
    border-radius: 15px;
    
    padding-left: 10px;
}

.modal-submit-btn
{
    font-size: 20px;

    width: 80%;
    line-height: 30px;
    border: none;
    background: #1e88e5;

    border-radius: 15px;
    color: #fff;
    margin: 0 auto 0 auto;

    cursor: pointer;
}
</style>