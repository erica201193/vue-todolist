const toDoList = [{
        text: "Fare la spesa",
        done: true,
    },
    {
        text: "Chiamare Giovanni",
        done: false,
    },
    {
        text: "Fare riunione con Andrea",
        done: true,
    },

]


const appVue = new Vue({
    el: "#app",

    data: {
        taskList: toDoList,
        newTask: "",
    },
	
	methods: {
        deleteItem: function (item, oneitem) {
            this.taskList.splice(item, 1)
        },

        addItem: function () {
            return this.taskList.newTask.push
        }

	}
});