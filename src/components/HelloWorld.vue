<template>
  <div class="hello">
    <div id="hero" class="container position-relative">
      <div class="row hero-content mx-auto position-lg-absolute w-100 h-100">
        <div class="col-12 col-lg-8 text-white pt-lg-5">
          <h1 class="display-lg-4 pt-lg-5">RECOMMEND YOUR <br>
            FRIEND AND GET <br>
            1000$ - 2000$ BONUS!

          </h1>
          <p class="h3">Tell your friends about the opportunities <br> at AllStarsIT</p>
        </div>
        <div class="col-12 col-lg-4 p-3 pt-0">
          <form action="/" class="bg-white position-relative h-auto pb-3 row p-3 pt-0 border-radius-big">
            <div class="col-12 col-lg-6">
              <label for="name">name</label>
              <input type="text" name="name" id="name" v-model="name" placeholder="name"
                class="w-100 border-radius my-2 p-2 border">
            </div>
            <div class="col-12 col-lg-6">
              <label for="email">email</label>
              <input type="text" name="email" id="email" v-model="email" placeholder="email"
                class="w-100 border-radius my-2 p-2 border" pattern="/^\S+@\S+\.\S+$/">
            </div>
            <div class="col-12 col-lg-6">
              <label for="fname">fname</label>
              <input type="text" name="fname" id="fname" v-model="fname" placeholder="friend's name"
                class="w-100 border-radius my-2 p-2 border">
            </div>
            <div class="col-12 col-lg-6">
              <label for="femail">femail</label>
              <input type="text" name="femail" id="femail" v-model="femail" placeholder="friend's email"
                class="w-100 border-radius my-2 p-2 border">
            </div>
            <div class="col-12">
              <input @change="getFileName" type="file" id="file" class="d-none file">
              <input @click="triggerUpload($event)" type="button" :value="resume"
                class="w-100 border-radius my-2 p-2 border cursor-pointer">
            </div>
            <div class="col-12 position-relative pt-3 mt-4" style="min-height: 40px">
              <button @click.prevent="submit()" type="submit" class="btn btn-purple w-100 border-radius">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <HowItWorks id="how" class="section" />
    <WhyUs id="why" class="section" />
    <JobOpenings id="jobs" class="section" />
    <ModalWindow :heading="modalHeading" :text="modalText" :show="modalShow" />
  </div>
</template>

<script>
  import $ from 'jquery';
  import HowItWorks from '@/components/sections/HowItWorks';
  import WhyUs from '@/components/sections/WhyUs';
  import JobOpenings from '@/components/sections/JobOpenings';
  import ModalWindow from '@/components/utils/ModalWindow';
  export default {
    components: {
      HowItWorks,
      WhyUs,
      JobOpenings,
      ModalWindow
    },
    data() {
      return {
        name: '',
        email: '',
        fname: '',
        femail: '',
        resume: 'CV',
        modalHeading: 'frre',
        modalText: 'frwerg',
        modalShow: false
      }
    },
    computed: {
      upload_val() { return document.getElementById('file') && 
      document.getElementById('file').files.length ? 
      document.getElementById('file').files[0].name : 'CV' }
    },
    
    methods: {
      triggerUpload(e) {
        let fileInp = $(e.target).parent().find('.file')[0];
        $(fileInp).trigger('click');
      },
      getFileName() {
        this.resume = document.getElementById('file').files[0].name;
      },
      submit() {
        let data = {
          name: this.name,
          email: this.email,
          fname: this.fname,
          femail: this.femail,
          
        };
        const file = document.getElementById('file').files[0];
        console.log(file)
        this.$store.dispatch('apply', data);
        if (data.name.length && data.email.length && data.fname.length && data.femail.length && file) {
          // send to server
        } else {
          // display err
        }
      }
    }
  }
</script>
<style scoped>
  #hero {
    height: auto;
    min-height: 100vh;
  }

  .hero-content {
    padding-top: 15vh;
  }

  h1 {
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
    font-weight: bold;
    font-size: 1.5rem;
  }

  form input {
    background-color: #ddd;
  }

  label {
    font-size: 0;
  }

  .section {
    min-height: 100vh;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }

    .hero-content {
      padding-top: 50vh;
    }

    .section {
      padding: 70px;
    }
  }
</style>