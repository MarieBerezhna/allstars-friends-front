<template>
    <div class="bg-dark pt-lg-5">
        <div class="container text-light pt-5">
            <div class="row">
                <div class="col-12 col-lg-6">
                     <img :src="require('@/assets/logo.png')" alt="Allstars-IT" width="250" height="auto">
                    <ul class="row py-4">
                        <div class="col-12 col-lg-6">
                            <a href="">About us</a>
                            <a href="">Contact us</a>
                            <a href="">Blog</a>
                        </div>
                        <div class="col-12 col-lg-6">
                            <a href="">Careers</a>
                            <a href="">Services</a>
                            <a href="">Terms and conditions</a>
                        </div>
                        
                    </ul>
                </div>
                <div class="col-10 col-lg-5 py-5 pl-lg-5 text-center text-dark social-links mx-auto">
                    <div class="row pt-lg-5 pl-lg-5 mt-lg-5">
 
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-telegram" ></a>
    

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img {
    margin-left: 40px;
}
ul {
    list-style: none;
}
a {
    display: block;
    color: #fff;
    margin: 20px 0;
}
.social-links a {
    color:#343A40;
    background: #fff;
    width: 40px;
    height: 40px;
    padding: 10px 4px;
    font-size: 20px;
    margin: 10px;
    border-radius: 50%;
}
.social-links a:hover {
     text-decoration: none;
}
  @media (min-width: 992px) {
      .social-links a {

              width: 50px;
    height: 50px;
              padding: 10px 4px;
    font-size: 30px;
    margin: 10px;
      }
  }

</style>