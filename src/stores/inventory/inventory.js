const inventory = {
    state() {
        return {
            categories: [
                'Fruit & Vegetables',
                'Rice & Noodles',
                'Dairy, Chilled & Eggs',
                'Meat & Seafood',
                'Frozen Food',
                'Food Cubboard',
            ],
            activeCategory: null,
            itemlists: [],
            itemSelected: null
        }
    },
    getters: {
        getOneItem(state){
            if(state.itemSelected){
                return state.itemLists.find(item => item.id === state.itemSelected);
            }
            else{
                return null;
            }
        }
    },
    mutations: {
        // addNewItem({state}, items) {
            
        // }

    },
    actions: {

    },
};

export default inventory;