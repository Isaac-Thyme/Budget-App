var getRemainingDays = function () {
    var date = new Date();
    var time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    return (time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0) + 1;
}

export { getRemainingDays };