<template>
  <div class="home page">
    <img src="../assets/images/book.svg" class="book" alt="book" />
    <img src="../assets/images/pencil.svg" class="pencil" alt="pencil" />
    <div class="content">
      <h1>Welcome to Bookly</h1>
      <p>Keep track of every book you have read</p>
      <div class="ctas">
        <router-link to="/books">View Books</router-link>
        <router-link to="/add-book">Keep Track</router-link>
        <!-- <a href="#">Keep Track</a> -->
      </div>
    </div>
    <img src="../assets/images/pen.svg" class="pen" alt="pen" />
    <img
      src="../assets/images/paperclip.svg"
      class="paperclip"
      alt="paper clip"
    />
  </div>



  
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  background: var(--main-color);
}
img {
  position: absolute;
  width: 50px;
}
.book,
.pencil {
  animation: float 3s linear 1s alternate infinite;
}
.pen,
.paperclip {
  animation: float2 3s linear 1s alternate infinite;
}
.book,
.pencil {
  top: 6em;
}
.book,
.pen {
  left: 4em;
}
.pencil,
.paperclip {
  right: 4em;
}
.pen,
.paperclip {
  bottom: 6em;
}
.paperclip {
  width: 40px;
}
.content {
  margin: 0 auto;
  text-align: center;
  width: 100vw;
}

h1 {
  font-weight: 500;
  color: var(--dark-color);
  font-size: 30px;
}
p {
  color: var(--secondary-color);
}
.ctas {
  display: flex;
  width: 250px;
  align-items: center;
  margin: 1em auto 0;
  a {
    text-decoration: none;
    padding: 7px 15px;
    margin: 0 auto;
    transition: all 0.1s ease-in;
  }
  a:nth-of-type(1) {
    color: var(--dark-color);
    border: 1px solid var(--dark-color);
  }
  a:nth-of-type(1):hover {
    color: var(--main-color);
    background: var(--dark-color);
    border: none;
  }
  a:nth-of-type(2) {
    color: var(--main-color);
    background: var(--dark-color);
  }
  a:nth-of-type(2):hover {
    color: var(--dark-color);
    border: 1px solid var(--dark-color);
    background: none;
  }
    @keyframes float {
    from {
      top: 4em;
    }
    to {
      top: 7em;
    }
  }
  @keyframes float2 {
    from {
      bottom: 4em;
    }
    to {
      bottom: 7em;
    }
  }
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 50px;
  }
}
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 70px;
  }
  p {
    font-size: 22px;
  }
  img {
    width: 80px;
  }
  .book,
  .pen {
    left: 7em;
  }
  .pencil,
  .paperclip {
    right: 7em;
  }
  .paperclip {
    width: 60px;
  }
  .ctas {
    width: 300px;
    a {
      padding: 10px 25px;
    }
  }

}
</style>