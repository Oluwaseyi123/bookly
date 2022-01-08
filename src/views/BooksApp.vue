<template>
  <the-header />
  <div class="container page">
    <table>
      <thead>
        <td>Title</td>
        <td>Author</td>
        <td>Rating</td>
      </thead>
      <tbody>
        <p v-if="isEmpty">There are no books currently</p>
        <tr v-for="(book, index) in books" :key="book">
          <router-link
            :to="{
              path: `/books/${book.id}`,
              query: { 
                title: book.title, 
                id: book.id, 
                author: book.author,
                rating: book.rating,
                summary: book.summary,
                quotes: book.quotes,
                
                },
            }"
            
          >
            <td>{{ book.title }}</td>
          </router-link>
          <td>{{ book.author }}</td>
          <td>
            <font-awesome-icon
              icon="star"
              v-for="star in book.rating"
              :key="star"
            />
          </td>
          <td><img src="../assets/images/edit.svg" alt="" /></td>
          <td>
            <img
              @click="deleteBook(index)"
              src="../assets/images/delete.svg"
              alt=""
            />
          </td>
        </tr>
      </tbody>
    </table>

    <router-link to="/add-book">Add new book</router-link>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  props: [],
  components: {
    TheHeader,
  },
  data() {
    return {
      books: JSON.parse(localStorage.getItem("books")),
      isClicked: false,
      isEmpty: false,
    };
  },
  mounted() {
    if (localStorage.getItem("books") === null  || localStorage.getItem("books").length === 0) {
      this.isEmpty = true;
      console.log(this.isEmpty);
    } else {
      this.isEmpty = false;
    }
  },
  computed: {},
  methods: {
    deleteBook(index) {
      this.books.splice(index, 1);
      // this.$store.state.splice(index,1)
      console.log(this.$store.state.books)
      localStorage.setItem("books", JSON.stringify(this.books));
      this.isClicked = !this.isClicked;
    },
    toggleModal() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 20px;
  > a {
    background: var(--dark-color);
    text-decoration: none;
    padding: 7px 15px;
    color: var(--main-color);
    display: block;
    margin: 3em auto 0;
    width: 140px;
    text-align: center;
  }
  > a:hover {
    color: var(--dark-color);
    border: 1px solid var(--dark-color);
    background: none;
  }
  a {
    transition: all 0.3s ease;
  }
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  thead {
    font-size: 16px;
    font-weight: 500;
  }
  tr {
    padding: 10px;
  }
  td {
    padding: 10px;
    img {
      width: 15px;
      cursor: pointer;
    }
  }
  tr:nth-child(even) {
    background: var(--main-color);
  }
  a {
    text-decoration: none;
    color: var(--dark-color);
  }
  a:hover {
    color: var(--hover-color);
  }
}
.modal {
  .ctas {
    display: flex;
    align-items: center;
    width: 150px;
    button {
      margin: 0 auto;
      padding: 7px 25px;
      border: none;
      display: block;
      cursor: pointer;
      background: var(--off-color);
    }
    button:hover {
      background: white;
    }
  }
  p {
    margin-bottom: 10px;
  }
}
.modal-container {
  background: rgba($color: #000000, $alpha: 0.2);
  align-items: center;
  display: flex;
  padding: 20px;
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  .modal {
    background: var(--main-color);
    margin: 0 auto;
    padding: 20px;
  }
}
@media screen and (min-width: 600px) {
  .container {
    padding: 20px 40px;
  }
}
</style>