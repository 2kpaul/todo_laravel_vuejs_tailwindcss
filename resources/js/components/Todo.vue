<template>
    <div>
        <li>
            <input type="checkbox" @change="updateChecked" v-model="item.completed">
            <span :class="[item.completed ? 'line-through text-gray-300' : '', 'px-2']">{{ item.title }}</span>
            <button @click="removeItem"
                class="text-xs font-bold text-white border bg-red-400 border-red-400 rounded-md px-1 py-1 hover:bg-red-500"
                >delete</button>
        </li>
    </div>
</template>
<script>
export default {
    props: ['item'],
    mounted() {
        console.log('ToDo mounted')
    },
    methods: {
        updateChecked () {
            console.log('item checked');
            axios.put('/api/item/' + this.item.id, {
                item: this.item
            })
            .then(response => {
                if(response.status == 200) {
                    this.$emit('itemChanged');
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        removeItem () {
            axios.delete('/api/item/' + this.item.id)
            .then(response => {
                if(response.status == 200) {
                    this.$emit('itemChanged');
                    console.log('item removed');
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
}
</script>
