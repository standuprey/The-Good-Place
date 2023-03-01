<template>
  <div class="contact-component inner">
    <div class="hi">
      <div class="hello">Say hello!</div>
      <div class="hola">hola!</div>
      <div class="salut"><img src="@/assets/hi.svg" />salut!</div>
    </div>
    <p>
      We are always happy to answer questions, listen to new ideas, and meet new
      and interesting people. We love to work with like-minded people who
      believe in the power of great creative ideas and collaboration, if that's
      you, here's us:
    </p>
    <div class="separator" />
    <div class="social">
      <a href="https://www.instagram.com/thegoodplaceinc/" target="_blank"
        ><img src="@/assets/social/instagram.svg"
      /></a>
      <a href="https://www.pinterest.com/thegoodplaceinc/" target="_blank"
        ><img src="@/assets/social/pinterest.svg"
      /></a>
    </div>
    <a class="mailto" href="mailto:info@thegoodplaceinc.com"
      >info@thegoodplaceinc.com</a
    >
    <div class="address">5550 Hollywood Blvd, Los Angeles, CA 90028</div>
  </div>
</template>
<script>
export default {
  name: `contact-component`,
};
</script>
<style lang="scss" scoped>
.contact-component {
  color: #fff;
  text-align: center;
  padding-bottom: 50px;
}
.hi {
  font-family: "Recoleta";
  font-weight: 600;
  text-align: left;
  margin: 0 auto;
  line-height: 1;
}
.salut {
  position: relative;
  img {
    animation: wave 2s ease-in-out 0s infinite normal forwards;
    position: absolute;
  }
}
p {
  font-size: 22px;
  line-height: 1.8;
  text-align: justify;
}
.separator {
  width: 100px;
  height: 0;
  margin: 40px auto;
  border-top: 1px solid #fff;
}
a.mailto {
  font-family: "Sharp";
  font-weight: 600;
  text-decoration: none;
  color: #fff;
}
.social {
  text-align: center;
  img {
    padding: 0 20px 35px 20px;
    width: 40px;
  }
}
.address {
  font-family: "Sharp";
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
}
@media (min-width: 651px) {
  .hi {
    font-size: 100px;
    width: 500px;
  }
  .hola,
  .salut {
    margin-left: 200px;
  }
  .hola {
    letter-spacing: 4px;
  }
  .salut {
    letter-spacing: -3px;
    img {
      top: 13px;
      left: -45px;
      width: 60px;
    }
  }
  p {
    width: 700px;
    margin: 20px auto 0;
  }
  a.mailto {
    font-weight: 400;
    font-size: 20px;
  }
  @keyframes wave {
    0%,
    40%,
    60%,
    80%,
    100% {
      transform: rotate(0deg);
      top: 13px;
      left: -45px;
    }
    50%,
    70% {
      transform: rotate(20deg);
      top: 5px;
      left: -35px;
    }
  }
}
@media (max-width: 650px) {
  .hi {
    font-size: 50px;
    width: 250px;
  }
  .hola,
  .salut {
    margin-left: 100px;
  }
  .hola {
    letter-spacing: 2.4px;
  }
  .salut {
    letter-spacing: -1px;
    img {
      transform: rotate(20deg);
      top: -1px;
      left: -30px;
      width: 37px;
    }
  }
  p {
    font-size: 16px;
    margin: 10px;
  }
  .separator {
    margin: 20px auto;
  }
  a.mailto {
    font-size: 20px;
    font-weight: 400;
  }
  .social img {
    padding: 0 10px 20px 10px;
    width: 20px;
  }
  .address {
    font-size: 20px;
    padding: 0 20px;
  }
  @keyframes wave {
    0%,
    40%,
    60%,
    80%,
    100% {
      transform: rotate(0deg);
      top: -1px;
      left: -30px;
    }
    50%,
    70% {
      transform: rotate(20deg);
      top: -7px;
      left: -24px;
    }
  }
}
</style>
