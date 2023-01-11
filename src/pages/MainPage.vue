<template>
    <div class="wrap">
        <section class="info-block left">
            <div v-if="mainPageData.section_first" class="text-block">
                <h2 class="section-main">{{mainPageData.section_first.main}}</h2>
                <p class="text">{{mainPageData.section_first.text}}</p>
            </div>
            <img src="@/assets/man-computer-book.png"  alt="man-computer-book" class="medium-img">
        </section>
        <section class="info-block right">
            <img src="@/assets/man-screen-book.png"  alt="man-computer-book" class="medium-img">
            <div v-if="mainPageData.section_second" class="text-block">
                <h2 class="section-main">{{mainPageData.section_second.main}}</h2>
                <p class="text">{{mainPageData.section_second.text}}
                </p>
            </div>
            
        </section>
        <router-link 
                class="to-lessons-btn" 
                :to="{ name: 'lessonsList'}" 
            >
                Посмотреть курсы
        </router-link>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainPageData: []
        };
    },
    methods: {
        getData() {
            fetch("mainPageData.json")
                .then(response => response.json())
                .then(data => (this.mainPageData = data));
        }
    },
    beforeMount() {
        this.getData();
    }
}
</script>

<style scoped>

.to-lessons-btn
{
    width: 30%;
    background: #1e88e5;
    margin: 40px auto 40px auto;

    height: 40px;
    line-height: 40px;
    text-align: center;

    border-radius: 15px;

    text-decoration: none;

    color: #fff;

    font-size: 20px;
}

.wrap
{
    width: 100%;
    display: inline-flex;
    flex-direction: column;
}

.info-block
{
    margin: 40px;

    display: flex;
    flex-direction: row;
    
    align-items: center;

    height: fit-content;

    width: 90%;
    
    height: 400px;
}

.left
{
    justify-content: right;
    margin-left: 40px;
}

.right
{
    justify-content: left;
}

.text-block
{
    display: inline-flex;
    position: relative;
    flex-direction: column;

    width:50%;
}


@media (max-width: 1667px)
{

    
    .info-block
    {    
        margin: 20px;
        height: 200px;
    }
    .img{
     display: none;
    }

    .left
    {
        justify-content: space-around;
    }

    .right
    {
        justify-content: space-around;
    }

    .text-block
    {
        width:80%;
    }
}

</style>