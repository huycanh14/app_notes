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
    note:  {},
}
var getters = {};

var mutations = {
    remove(state, index) {
        state.notes = state.notes.filter((item, i) => i !== index);
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