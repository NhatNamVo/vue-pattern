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
            itemlists: [
                {
                    category:"Fruit & Vegetables",
                    expireDate:"2022-04-29",
                    id:1,
                    leftQty:0,
                    name:"Carrots",
                    oriQty:15,
                },
                {
                    category:"Fruit & Vegetables",
                    expireDate:"2022-04-23",
                    id:2,
                    leftQty:0,
                    name:"Orange",
                    oriQty:100,
                },
                {
                    category:"Meat & Seafood",
                    expireDate:"2022-04-15",
                    id:3,
                    leftQty:0,
                    name:"Beef",
                    oriQty:120,
                },
                {
                    category:"Rice & Noodles",
                    expireDate:"2022-04-16",
                    id:4,
                    leftQty:0,
                    name:"Bread",
                    oriQty:120,
                },
                {
                    category:"Dairy, Chilled & Eggs",
                    expireDate:"2022-04-30",
                    id:5,
                    leftQty:0,
                    name:"Eggs",
                    oriQty:150,
                },
                {
                    category:"Food Cubboard",
                    expireDate:"2022-04-30",
                    id:6,
                    leftQty:14,
                    name:"Food Box",
                    oriQty:123,
                },
            ],
            itemSelected: null,
            search: '',
        }
    },
    getters: {
        getSelectedItem(state){
            return state.itemlists.find(item => item.id === state.itemSelected) || null;
        },
        getItemLists(state) {
            let itemRes = [];
            const activeCategories = state.categories[state.activeCategory] || '';
            const filterByCategory = state.itemlists.filter(item => item.category === activeCategories) || [];
            if(state.activeCategory !== null) {
                itemRes = filterByCategory;
            }
            else{
                itemRes = state.itemlists;
            }
            if(state.search) return itemRes.filter(item => item.name.toLowerCase().indexOf(state.search.toLowerCase()) !== -1);
            return itemRes;
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