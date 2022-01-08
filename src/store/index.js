import { createStore } from "vuex";

export default createStore({
  state: {
    books:  JSON.parse(localStorage.getItem('books')) || []
  },
  mutations: { 
    addBook(state, payload) {
      state.books = payload
    },
    getBooks(state){
      if(localStorage.getItem('books')){
        console.log(JSON.parse(localStorage.getItem('books')))
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('books')))
        )
      }
    }
  },
  actions: {
    addBook(context, payload) {
      const books = context.state.books
      books.push(payload)
      localStorage.setItem('books', JSON.stringify(books))
      context.commit('addBook', books)
    }
  },
  getters: {
    getBooks(state) {
      return state.books
    }
  },
  modules: {},
});
