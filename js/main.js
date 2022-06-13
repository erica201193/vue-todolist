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
    },
	
	methods: {

	}
});