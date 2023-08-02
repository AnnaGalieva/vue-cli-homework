<template>
    <div>
        <!-- {{ items }}
        {{ info }} -->
        <div v-for="item in items" :key="item.id">
            <div class="content">
                <div class="content__item">{{ item.date }}</div>
                <div class="content__item">{{ item.category }}</div>
                <div class="content__item">{{ item.value }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    //props: ['items', 'info'],
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        fetchData() {
            return [
                {
                    date: '28.03.2020',
                    category: 'Food',
                    value: 169,
                },
                {
                    date: '24.03.2020',
                    category: 'Transport',
                    value: 360,
                },
                {
                    date: '24.03.2020',
                    category: 'Food',
                    value: 532,
                },
            ]
        },
    },
};
</script>

<style lang="scss" scoped>
.content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.content__item {
    padding: 8px 16px;
    border: 1px solid #ccc;
}
</style>