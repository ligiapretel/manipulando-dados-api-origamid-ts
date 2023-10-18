export default function stringToDate(payDay) {
    const [date, time] = payDay.split(" ");
    const [dd, mm, yyyy] = date.split("/").map(Number);
    const [hour, minutes] = time.split(":").map(Number);
    return new Date(yyyy, mm - 1, dd, hour, minutes);
}
//# sourceMappingURL=stringToDate.js.map