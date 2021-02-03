// Cach 1: export module

const valueDemoToday = [
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
];

var getList = () => {
	return [...valueDemoToday];
}

export default getList;