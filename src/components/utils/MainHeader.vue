<template>
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-1">
        <a class="navbar-brand logo" href="/">
            <img :src="require('@/assets/logo.png')" alt="Allstars-IT">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav navbar-center">
                <li class="nav-item active">
                    <a class="nav-link" href="#how">How it works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#why">Why work with us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#terms">Terms and conditions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#jobs">All vacancies</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {

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
        opacity: 0.75;

    }
    @media (min-width: 992px) {
        .navbar-center {
            position: absolute;
            left: 50%;
            transform: translatex(-50%);
        }
        .navbar-brand {
            margin-left: 10vw;
        }
        .nav-item {
            margin-left: 2vw;
        }
    }
</style>