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
                <div class="col-12 col-lg-6 text-center">
                    social stuff
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
</style>