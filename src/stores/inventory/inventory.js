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
            itemSelected: null,
            search: '',
        }
    },
    getters: {
        getOneItem(state){
            if(state.itemSelected){
                return state.itemlists.find(item => item.id === state.itemSelected);
            }
            else{
                return null;
            }
        },
        getActiveCategory(state) {
            if(state.activeCategory !== null) return state.categories[state.activeCategory];
        },
        getFilterByCategories(state, getters) {
            console.log('getters', getters);
            return ''
            // return state.itemlists.filter(item => item.category === inventory.getters.getActiveCategory(state));
        },
        getItemLists(state) {
            let itemLists = [];
            if(state.activeCategory !== null) {
                itemLists = inventory.getters.getFilterByCategories(state);
            }
            else{
                itemLists = state.itemlists;
            }
            if(state.search) return itemLists.filter(item => item.name.toLowerCase().indexOf(state.search.toLowerCase()) !== -1);
            return itemLists;
        }, 
    },
    mutations: {
        addNewItem(state, items) {
            state.itemlists.push(items);
        },
        selectItemEdit(state, itemId){
            state.itemSelected = itemId;
        },
        updateItem(state, itemEdited) {
            const index = state.itemlists.findIndex(item => item.id === state.itemSelected);
            if(index !== -1) {
                state.itemlists.splice(index, 1,itemEdited);
                state.itemSelected = null;
            }
        },
        deleteItem(state) {
            const index = state.itemlists.findIndex(item => item.id === state.itemSelected);
            if(index !== -1) {
                state.itemlists.splice(index, 1);
                state.itemSelected = null;
            }
        },
        selectCategory(state, categoryId) {
            state.search = '';
            state.activeCategory = categoryId;
        },
        searchItem(state, text) {
            state.search = text;
        }
    },
    actions: {

    },
};

export default inventory;