const NOTE = {
    // time:  new Date().toLocaleTimeString('vi-VN', { hour: "numeric",  minute: "numeric"}),
    time:  "",
    // date: new Date().toLocaleDateString('vi-VN'),
    date: "",
    content: ""
}
var state = {
    notes: [
        {
            time: "10:30",
            date : "04-02-2020",
            content: "Có một cuộc họp"
        },{
            time: "11:30",
            date : "04-02-2020",
            content: "Ăn trưa"
        },{
            time: "13:30",
            date : "04-02-2020",
            content: "Bắt đầu làm việc, đọc qua lại tài liệu"
        },{
            time: "14:00",
            date : "04-02-2020",
            content: "Xây dựng nội dung mới"
        },{
            time: "17:30",
            date : "04-02-2020",
            content: "Kết thúc giờ làm việc"
        },{
            time: "19:30",
            date : "04-02-2020",
            content: "Có một hẹn với A"
        }
    ],
    note:  {...NOTE},
}
var getters = {};

var mutations = {
    remove(state, index) {
        state.notes = state.notes.filter((item, i) => i !== index);
    },
    add(state) {
        state.notes.unshift(state.note);
    }
};

var actions = {};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};