import { createStore } from 'vuex';

export default createStore({
    state: { // начальное состояние

        paymentList: []
    },
    mutations: { // методы для изменения состояния

        SET_PAYMENT(state, payments) {
            state.paymentList = payments;
        },
        ADD_PAYMENT(state, pay) {
            state.paymentList.push(pay);
        }
    },
    actions: {
        // методы для асинхронных операций
        fetchData({
            commit
        }) {
            setTimeout(() => {
                const paymentList = [{
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
                commit('SET_PAYMENT', paymentList)
            }, 1000);
        }
    },
    getters: { // методы для чтения состояния
        getPayment: (state) => state.paymentList, //получает массив
        getFullPayment: (state) => {
                return state.paymentList
                    .reduce((a, b) => a + b.value, 0)
            } //возвращает значение
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    }
});