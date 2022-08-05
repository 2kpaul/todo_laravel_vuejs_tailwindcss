<template>
    <div>
        <input type="text" name="todo" placeholder="add new todo in your list" v-model="item.title" v-on:keyup.enter="onEnter" />
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Form mounted.')
    },
    data: function() {
        return {
            item: {
                title: '',
            }
        }
    },
    methods: {
        onEnter: function() {
            if(this.item.title == '') {
                return;
            }

            axios.post('/api/item/store', {
                item: this.item
            })
            .then(response => {
                if(response.status == 201) {
                    this.$emit('itemAdded');
                    console.log(this.item.title + ' was added');
                    this.item.title = '';
                }
            })
            .catch(error => {
                console.log(error);
            });


        }
    }
}
</script>
