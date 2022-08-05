<template>
    <div class="container mx-auto">

        <div class="grid grid-cols-1 gap-4 place-items-center py-10 px-10">
            <div class="bg-white rounded-md border-indigo-400 shadow-xl p-5 ">
                <h2 class="text-3xl text-center py-2">ToDO List</h2>
                <todo-form v-on:itemAdded="getItems()"></todo-form>
                <ul class="grid grid-cols-1 gap-4 py-4" v-for="(item, index) in items" :key="index">
                    <todo :item="item" class="w-full" v-on:itemChanged="getItems()"></todo>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoForm from './TodoForm';
    import Todo from './Todo';
    export default {
        components: {TodoForm, Todo},
        data: function() {
          return {
            items: []
          }
        },
        methods: {
            getItems() {
                axios.get('/api/items')
                .then(response => {
                    this.items = response.data
                })
                .catch(error => {
                    console.log(error);
                })
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        created() {
            this.getItems();
        }
    }
</script>
