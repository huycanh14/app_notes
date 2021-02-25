<template>
  <div id="form">
    <div class="container" id="add-appoinment">
      <div class="row">
        <div class="col-8 col-md-6 offset-2 offset-md-3">
          <form>
            <div class="form-group">
              <label for="timeForAppointment">Thời gian</label>
              <input type="time" class="form-control" required v-model="note.time">
            </div>
            <div class="form-group">
              <label for="dateForAppointment">Ngày hẹn</label>
              <input type="date" class="form-control" v-model="note.date" required>
            </div>
            <div class="form-group">
              <label for="contentForAppointment">Nội dung cuộc hẹn</label>
              <input type="text" class="form-control" required v-model="note.content">
            </div>
            <br>
            <button type="button" class="btn btn-primary" @click="addNote">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from "vuex";
export default {
  computed: mapState({
    note: (state) => state.note.note
  }),
  methods: {
    ...mapMutations({
      add: "note/add"
    }),
    addNote(){
      this.add();
      alertify.success("Thêm thành công");
    }
  },
}
</script>
