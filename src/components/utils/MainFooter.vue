<template>
    <div class="bg-dark pt-lg-5">
        <div class="container text-light pt-5">
            <div class="row">
                <div class="col-12 col-lg-6">
                     <img :src="require('@/assets/logo.png')" alt="Allstars-IT" width="150" height="auto">
                    <ul class="row py-4">
                        <div class="col-12 col-lg-6">
                            <a target="_blank" href="https://allstars-it.com/">About us</a>
                            <a target="_blank" href="https://allstars-it.com/ukraine/contact-us/">Contact us</a>
                            <a target="_blank" href="https://allstars-it.com/ukraine/blog/">Blog</a>
                        </div>
                        <div class="col-12 col-lg-6">
                            <a target="_blank" href="https://allstars-it.com/ukraine/careers/">Careers</a>
                            <a target="_blank" href="https://allstars-it.com/ukraine/services/">Services</a>
                            <a target="_blank" href="/terms">Terms and conditions</a>
                        </div>
                        
                    </ul>
                </div>
                <div class="col-10 col-lg-5 py-5 pl-lg-5 text-center text-dark social-links mx-auto">
                    <div class="row pt-lg-5 pl-lg-5 mt-lg-5">
 
                    <a target="_blank" href="https://www.facebook.com/allstarsitcom" class="fa fa-facebook"></a>
                    <a target="_blank" href="https://www.linkedin.com/company/allstars-it-ukraine/" class="fa fa-linkedin"></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCDy8_6Z0qY8RxDVrxTXGazA" class="fa fa-youtube"></a>
                    <a target="_blank" href="https://www.instagram.com/allstarsitcom/" class="fa fa-instagram"></a>
                    <a target="_blank" href="https://t.me/links4yourobot?start=allstarsitukraine" class="fa fa-telegram" ></a>
    

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
a:hover {
    color: #CCC;
    text-decoration: none;
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