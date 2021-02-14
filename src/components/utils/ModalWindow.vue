<template>
<div class="modal" tabindex="-1" role="dialog" :class="{ show: show }">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ heading }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p> {{ text }} </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" 
        @click="modalHide()"
        data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        props: {
            heading: String,
            text: String,
            show: Boolean
        },
        methods: {
            modalHide () {
                document.getElementsByClassName('modal')[0].style.display = 'none';
            }
        }
    }
</script>

<style scoped>
.show {
    display: block;
}
</style>