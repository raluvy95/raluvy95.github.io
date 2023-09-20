export function yearsOld(current: number, previous: number) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerYear = msPerDay * 365.242375; // with leap day

    var elapsed = current - previous;

    return Math.floor(elapsed / msPerYear) + ' years old';

}
export function timeFormat(second: number) {
    const seconds = second % 60
    const minute = second / 60
    const hour = minute / 60
    const day = hour / 24

    return (day < 1 ? '' : `${Math.floor(day)} d, `) + (hour < 1 ? '' : `${Math.floor(hour)}h `) + (minute < 1 ? '' : `${Math.floor(minute)}m `) + `${Math.floor(seconds)}s`
}