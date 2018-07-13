import moment from 'moment';

export default class Common {
    static constants() {
        return {
            SUCCESS: "success",
            ERROR: "error"
        }
    }

    static parseMessage(data, id) {
        return {
            name: data.userId.toString() == id ? data.userId : data.receiverId,
            date: this.parseDate(new Date(data.updatedDate).toString()),
            isMe: data.userId.toString() == id ? true : false,
            message: data.message
        }
    }

    static parseDate(date) {
        return moment(new Date(date).toString()).format("MM.DD.YYYY") + ' in ' + moment(new Date(date).toString()).format("hh:mma");
    }
}