<template>
  <the-header />
  <div class="container page">
    <h1>{{ bookTitle }}</h1>
    
    <p>by {{ bookAuthor }}</p>
    
    <div class="summary">
      <div class="rating">
        <p>Rating:</p>
       {{ bookRating }} stars
       <!-- <font-awesome-icon icon="star" v-for="rate in bookRating" :key="rate" /> -->
      </div>
    </div>
    <div class="summary">
      <p>Summary:</p>
      <p>
        {{ bookSummary }}
      </p>
    </div>
    <div class="summary">
      <p>Quotes:</p>
      <p>
        {{ bookQuotes }}
      </p>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  props: ["title", "id", "author", "rating", "summary", "quotes"],
  data() {
    return {};
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
    console.log(this.title);
  },
  methods: {
    fetchData(){
      const fetchId = this.$route.query
      console.log(fetchId)
    }
  },
  computed: {
    bookTitle(){
      return this.$route.query.title
    },
    bookAuthor(){
      return this.$route.query.author
    },
    bookSummary(){
      return this.$route.query.summary
    },
    bookRating(){
      return this.$route.query.rating
    },
    bookQuotes(){
      return this.$route.query.quotes
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 40px;
  h1 {
    margin-bottom: 10px;
    font-weight: 400;
  }
  > p {
    color: var(--secondary-color);
  }
}
.rating {
  display: flex;
  align-items: center;
}
.summary {
  margin-top: 2em;
  text-align: justify;
  text-justify: inter-word;
  display: flex;
  p {
    line-height: 25px;
  }
  p:nth-of-type(1) {
    margin-right: 5px;
  }
  p:nth-of-type(2) {
    color: var(--secondary-color);
    line-height: 25px;
  }
}
</style>