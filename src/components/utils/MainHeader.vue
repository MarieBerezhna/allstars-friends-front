<template>
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-1">
        <a class="navbar-brand logo" href="/">
            <img :src="require('@/assets/logo.png')" alt="Allstars-IT" width="150" height="auto">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav navbar-center">
                <li class="nav-item">
                    <a class="nav-link" href="/#how">How It Works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#why">Why Work With Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#jobs">Hot Jobs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/terms">Terms And Conditions</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import $ from 'jquery';
    export default {
        data () {
            return {
                base: location ? location.origin + '/' : ''
            }
        },
        methods: {
            menuActivateSwitch () {
               if (window.location.pathname === '/terms') {
                   $('.nav-item:last-child .nav-link').addClass('active');
               }
                let mainNavLinks = $(".nav-link");
                window.document.body.onscroll = (() => {
                    let fromTop = $(window).scrollTop() + 300;
                    $(mainNavLinks).each((el) => {
                        let item = $(mainNavLinks[el])[0];
                        if ($(item).attr('href') === '/terms') return;
                        let sid = $(item).attr('href').replace('/', '');
                        let s = $(sid)[0];
                        if (s && s.offsetTop <= fromTop &&
                            s.offsetTop + s.offsetHeight > fromTop) {
                            $(item).addClass("active");
                        } else {
                            $(item).removeClass("active");
                        }
                    })
                })
            }
        },
        mounted() {
            this.menuActivateSwitch();
        }
    }
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 20;
}
    .navbar, .navbar-dark {
        background: black;
        opacity: 0.7;
    }
    @media (min-width: 992px) {
        .navbar-center {
            position: absolute;
            left: 50%;
            transform: translatex(-40%);
        }
        .navbar-brand {
            margin-left: 15vw;
        }
        .nav-item {
            margin-left: 1vw;
            font-size: 1rem !important;
        }
    }
</style>