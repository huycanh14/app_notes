<template>
    
      <div class="container" id="list-notes">
        <div class="text-center h3 text-uppercase font-weight-bold pb-3">Danh sách cuộc hẹn sắp tới</div>
        <div class="row">
          <div class="col-3 pb-5" v-for="(item,index) in notes" :key="item.time">
            <div class='content'>
              <div class='card d-flex align-items-stretch'>
                <div class='card-body' :style="{'background-color': rendBackgroundColor() }"> 
                  <h5 class='card-title'>{{item.time}}</h5>
                  <small><i> {{item.date}}</i></small>
                  <p class='card-text'>{{item.content}}</p>
                </div> </div>

              <div class="delete-card">
                <div class="pb-5">
                  <i class="fas fa-2x fa-minus-circle" @click="deleteNote(index)"></i>
                </div>
                <div >
                  <i class="fas fa-2x fa-pencil-alt"></i>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  computed: mapState({
    notes: (state) => state.note.notes
  }),
  methods: {
    ...mapMutations({
      remove: "note/remove"
    }),
    rendBackgroundColor() {
      return '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    },
    deleteNote(index){
      var vm = this;
       alertify.confirm("Chắc chắn muốn xóa ghi chú này?", function (e) {
          if (e) {
              vm.remove(index);
              alertify.success("Xóa thành công");
          }
      });
    }
  },
}
</script>
