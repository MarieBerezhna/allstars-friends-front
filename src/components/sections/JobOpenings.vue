<template>
    <div class="container-fluid bg-white  pt-5">
        <h2 class="font-size-bold w-100 text-center my-3">Hot Jobs</h2>
        <div class="container py-3">
            <div class="row">
                <div class="col-12 col-lg-5  text-center">
                    <img :src="require('@/assets/jobs.png')" alt="hot job openings" class="w-75">
                    <p class="text-left p-3 font-weight-bold lead">
                        Get $1000 for recommending your friend or colleague for Middle/Senior position after they sign
                        an offer.
                    <br><br>
                        Get $2000 for recommending your friend or colleague for Team Lead, Tech Lead, Senior Devops or
                        Software Artichects position after they sign an offer.
                    </p>
                </div>
                <div class="col-12 col-lg-7">
                    <div class="row">
                        <div class="col-12 col-lg-6 my-3">
                            <div class="card p-3 border-radius box-shadow">
                                <div class="row details position-relative">
                                    <div class="col-5">
                                        <img :src="require('@/assets/location.png')" alt="job location" width="20"
                                            height="20">
                                        Kyiv, Ukraine
                                    </div>
                                    <div class="col-7">
                                        <span class="border badges mx-1">Remote</span>
                                        <span class="border badges">Full-Time</span>
                                    </div>
                                </div>
                                <div class="row m-3">
                                    <h3>
                                        .Net <br>
                                        Team Lead
                                    </h3>
                                </div>
                                <div class="row mx-3">
                                    <img :src="require('@/assets/job1.png')" alt="Insurance tech needed">
                                    <br>
                                    <span class="w-100 mt-2">Insurance tech</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 my-3">
                            <div class="card p-3 border-radius box-shadow">
                                <div class="row details position-relative">
                                    <div class="col-5">
                                        <img :src="require('@/assets/location.png')" alt="job location" width="20"
                                            height="20">
                                        Kyiv, Ukraine
                                    </div>
                                    <div class="col-7">
                                        <span class="border badges mx-1">Remote</span>
                                        <span class="border badges">Full-Time</span>
                                    </div>
                                </div>
                                <div class="row m-3">
                                    <h3>
                                        .Net <br>
                                        Developer
                                    </h3>
                                </div>
                                <div class="row mx-3">
                                    <img :src="require('@/assets/job2.png')" alt="Cybersecurity specialist needed">
                                    <br>
                                    <span class="w-100 mt-2">Cybersecurity</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 my-3">
                            <div class="card p-3 border-radius box-shadow">
                                <div class="row details position-relative">
                                    <div class="col-5">
                                        <img :src="require('@/assets/location.png')" alt="job location" width="20"
                                            height="20">
                                        Kyiv, Ukraine
                                    </div>
                                    <div class="col-7">
                                        <span class="border badges mx-1">Remote</span>
                                        <span class="border badges">Full-Time</span>
                                    </div>
                                </div>
                                <div class="row m-3">
                                    <h3>
                                        FullStack Developer<br>
                                        (React, NodeJS)
                                    </h3>
                                </div>
                                <div class="row mx-3">
                                    <img :src="require('@/assets/job3.png')" alt="Marketing automation tech needed">
                                    <br>
                                    <span class="w-100 mt-2">Marketing automation</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 my-3">
                            <div class="card p-3 border-radius box-shadow">
                                <div class="row details position-relative">
                                    <div class="col-5">
                                        <img :src="require('@/assets/location.png')" alt="job location" width="20"
                                            height="20">
                                        Kyiv, Ukraine
                                    </div>
                                    <div class="col-7">
                                        <span class="border badges mx-1">Remote</span>
                                        <span class="border badges">Full-Time</span>
                                    </div>
                                </div>
                                <div class="row m-3">
                                    <h3>
                                        QA <br>
                                        Automation
                                    </h3>
                                </div>
                                <div class="row mx-3">
                                    <img :src="require('@/assets/job4.png')" alt="QA specialist needed">
                                    <br>
                                    <span class="w-100 mt-2">Cloud automation</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    height: 260px;
    position: relative;
}
.card .row:last-child {
    position: absolute;
    bottom: 20px;
}
    .details {
        font-size: 0.8rem;
    }

    .badges {
        background: #ccb3f5;
        color: #612DB6;
        padding: 5px 10px;
        border-radius: 4px;
        width: 100%;
        font-weight: bold;
        font-size: 0.6rem;
    }

    .details>div {
        padding-right: 4px !important;
    }
</style>