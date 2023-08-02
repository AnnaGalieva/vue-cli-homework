<template>
    <div>
        <button @click="upCounter">Значение счетчика равно: {{ counter }}</button>
    </div>
</template>

<script>
export default {
    name: 'AddCount',

    data() {
        return {
            counter: 0,
        };
    },

    methods: {
        upCounter() {
            this.counter++;
        }
    }, beforeCreate() {
        this.counter = 1;
    }, created() {
        this.counter = 2;
    }, beforeUnmount() {
        console.log('beforeUnmount');
    }, mounted() {
        console.log('mounted');
    }, updated() {
        console.log('updated');
    },
};
</script>

<style lang="scss" scoped></style>