<template>
  <div id="form">
    <div class="container" id="add-appoinment">
      <div class="row">
        <div class="col-8 col-md-6 offset-2 offset-md-3">
          <form>
            <div class="form-group">
              <label for="timeForAppointment">Thời gian</label>
              <input type="time" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="dateForAppointment">Ngày hẹn</label>
              <input type="date" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="contentForAppointment">Nội dung cuộc hẹn</label>
              <input type="text" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
