<template>
  <the-header />
  <div class="container page">
    <p class="message" v-if="isEmpty">Please fill in the fields</p>
    <form>
      <input type="text" placeholder="Title" v-model="book.title" />
      <input type="text" placeholder="Author" v-model="book.author" />
      <textarea
        name="summary"
        id="summary"
        cols="30"
        rows="5"
        placeholder="Summary"
        v-model="book.summary"
      ></textarea>
      <textarea
        name="quotes"
        id="quotes"
        cols="30"
        rows="5"
        placeholder="Quotes from Book"
        v-model="book.quotes">
        </textarea>
        <div class="rating">
          <p>Rating:</p>
         
          <Rating :grade="3" :maxStars="5" :hasCounter="false" v-model="book.rating" ref="bookRating" />
         
        </div>
      
     
      <button class="btn" @click.prevent="getBookData">Add Book</button>
     
     
    </form>
  </div>
</template>

<script>
import Rating from '../components/AppRating.vue'
export default {

  props: ["id"],
  data() {
    return {
      book: {
        id: "",
        title: "",
        author: "",
        summary: "",
        quotes: "",
        rating: "",
      },
      books: [],
      isEmpty: false,
      bookRating: '',
    }
  },
  components: {
    Rating
  },
  methods: {
    getBookData() {
      if (this.book.title === "" || this.book.author === "") {
        this.isEmpty = true
        console.log("fill the entire form");
      } else {
        this.book.id = new Date().valueOf();
        this.book.rating = this.$refs.bookRating.stars
        this.$store.dispatch("addBook", this.book);
        
      //  console.log(this.$refs.bookRating)
        this.$router.push({ path: "/books" });
        this.isEmpty = false
        console.log(this.book)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.message{
  background-color: var(--main-color);
  padding: 10px;
  color: #cc0000;
  margin-bottom: 15px;
}
.container {
  padding: 0px 40px;
  margin-top: 20px;
}
form {
  input {
    outline: none;
    display: block;
    outline: none;
    margin-bottom: 10px;
    padding: 10px;
    background: none;
    border: none;
    border-bottom: 1px solid var(--dark-color);
    width: 280px;
  }
  textarea {
    outline: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: none;
    border: 1px solid var(--dark-color);
  }
  .rating{
    display: flex;
    align-items: center;
    p{
      margin-right: 10px;
    }
  }
  .btn {
    color: var(--main-color);
    text-decoration: none;
    background: var(--dark-color);
    padding: 8px 15px;
    display: block;
    width: 150px;
    text-align: center;
    margin-top: 2em;
    transition: all 0.3s ease;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .btn:hover {
    color: var(--dark-color);
    background: none;
    border: 1px solid var(--dark-color);
  }
}
@media screen and (min-width: 650px) {
  form {
    input {
      width: 400px;
    }
    textarea {
      width: 400px;
    }
  }
}
</style>