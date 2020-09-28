const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Ross'
    },
    methods: {
        addTodo() {
            console.log('Form submitted');
        }
    }
})