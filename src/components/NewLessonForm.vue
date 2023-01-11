<template>
    <button @click="CloseOpen()" class="open-form-btn btn btn-secondary">Создать новый курс</button>
    <div v-if="this.isFormOpen" class="create-new">
        <div  class="new-item-form">
            <p v-if="this.errors.length">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                    <li style="color: brown" v-for="error in this.errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>
            <form @submit.prevent class="join-form">
                <div class="form-group">
                    <label for="name">Lesson name</label>
                    <input  v-model="newLesson.name" type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name">
                </div>
                <div class="form-group">
                    <label for="cost">Leson cost</label>
                    <input v-model="newLesson.cost" type="text" class="form-control" id="cost" placeholder="Enter cost">
                </div>
                <div class="form-group">
                    <label for="duration">Leson duration</label>
                    <input v-model="newLesson.duration" type="text" class="form-control" id="duration" placeholder="Enter duration">
                </div>
                <div class="form-group">
                    <label for="description">Leson description</label>
                    <input v-model="newLesson.description" type="text" class="form-control" id="description" placeholder="Enter description">
                </div>
                <p class="tasks">Tasks:</p>
                <div class="inp-group">
                    <ul class="tasks__list">
                        <li v-for="task in this.newLesson.tasks" v-bind:key="task" class="task-el">{{ task }}</li>
                    </ul>
                    <div class="form-group">
                        <label for="description">Task</label>
                        <input v-model="currentTask" type="text" class="form-control" id="description" placeholder="Enter task">
                    </div>
                    <button @click="addTask()" class="btn btn-secondary">Добавить задачу</button>
                </div>


                <button  @click="checkForm(); " type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
		return {
            isFormOpen: true,
			errors: [],
            currentTask: '',
			newLesson: {
                id: 1,
				name: '',
				cost: [],
				duration: '',
				description: '',
				tasks: [],
                
			}
		}
	},
    methods:
    {
        addTask()
        {
            if(this.currentTask)
            {
                this.newLesson.tasks.push({"text" :this.currentTask});
                this.currentTask = '';
            }
            
        },
        sendRequest(){
            this.$store.commit('addNewLesson', this.newLesson);

            this.newLesson.name = '';
            this.newLesson.cost = [];
            this.newLesson.duration = '';
            this.newLesson.description = '';
            this.newLesson.tasks = [];
        },
        checkForm: function (e) {

            this.errors = [];

            if (!this.newLesson.name) {
                this.errors.push('Требуется ввести название.');
            }
            if (!this.newLesson.cost) {
                this.errors.push('Требуется ввести цену.');
            } else if (!Number(this.newLesson.cost))
            {
                this.errors.push('Цена должна быть числом.');
            }
            if (!this.newLesson.duration) {
                this.errors.push('Требуется ввести продолжительность.');
            } else if (!Number(this.newLesson.cost))
            {
                this.errors.push('Продолжительность должна быть числом.');
            }
            if (!this.newLesson.description) {
                this.errors.push('Требуется ввести описание.');
            }

            if(!this.errors.length)
            {
                this.newLesson.id = this.$store.getters.getCurrentId
                this.sendRequest();
                this.CloseOpen();
                return true;
            }
            
        },
        CloseOpen()
        {
            this.isFormOpen = !this.isFormOpen;
        }

    }
}
</script>

<style scoped>

.tasks
{
    margin-top: 20px;
}
.inp-group
{
    margin: 10px;
    border: 1px gray solid;
    border-radius: 15px;
    padding: 20px;
}

.btn 
{
    margin-top: 20px;
}
.create-new
{
    margin: 20px;

    width: 80%;
    border: 1px gray solid;
    border-radius: 15px;

    padding: 20px;

}
</style>