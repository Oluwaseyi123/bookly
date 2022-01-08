<template>
  <nav>
    <router-link to="/">
      <img src="../assets/images/logo.svg" alt="" />
    </router-link>
    <div class="bars" @click="animateNav" :class="{ animate: isClicked }">
      <div class="bar one"></div>
      <div class="bar two"></div>
    </div>
    <ul :class="{ show: isClicked }">
      <div class="flex">
        <img src="../assets/images/book.svg" class="book" alt="" v-if="isClicked" />
         <li><router-link to="/about">About Bookly</router-link></li>
      </div>
      <div class="flex">
        <img src="../assets/images/book.svg" class="book" alt="" v-if="isClicked" />
         <li><router-link to="/">Contact</router-link></li>
      </div>
       <div class="flex">
        <img src="../assets/images/book.svg" class="book" alt="" v-if="isClicked" />
        <li><router-link to="/books">My Books</router-link></li>
      </div>
      
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    animateNav() {
      this.isClicked = !this.isClicked;
      console.log(this.isClicked);
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  padding: 30px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  width: 25px;
}
.bars {
  cursor: pointer;
  .bar {
    width: 20px;
    height: 2px;
    background: var(--dark-color);
    transition: all 0.2s ease;
  }
  .one {
    margin-bottom: 5px;
    width: 25px;
  }
}
.flex{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  img{
    width: 20px;
    user-select: none;
  }
}
.animate {
  transform-origin: -100% 50%;
  .one {
    transform: rotate(45deg);
    width: 20px;
  }
  .two {
    transform: rotate(-45deg) translate(5px, -5px);
    width: 20px;
  }
}
ul {
  list-style: none;
  display: none;
  li {
    a {
      text-decoration: none;
      color: var(--dark-color);
      transition: all 0.2s ease;
      font-size: 20px;

      &.router-link-exact-active {
        color: var(--hover-color);
      }
    }
    a:hover {
      color: var(--hover-color);
    }
  }
}
.show {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: var(--main-color);
  padding-top: 10em;
  animation: slideIn 0.2s linear alternate;

  // top: 5em;
  // right: 2em;
  top: 4.3em;
  left: 0;
  width: 100%;
  height: 100vh;

  li {
    margin-bottom: 10px;
  }
  &.router-link-exact-active {
    color: #42b983;
  }
}
.images {
  img {
    position: absolute;
    z-index: 10;
    width: 40px;
    transition: all 0.3s ease;
    user-select: none;
  }

}
@keyframes slideIn {
  from {
    left: -10em;
  }
  to {
    left: 0;
  }
}
@media screen and (min-width: 800px) {
  nav {
    padding: 30px 50px;
  }
  .bars {
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 30vw;
    max-width: 300px;
    li{
      a{
        font-size: 16px;
      }
    }
  }
}
</style>
