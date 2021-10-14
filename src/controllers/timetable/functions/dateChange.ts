
export default function dateChange(prop:any){

    let preday = prop.slice(0,15).split(" ");
    let day = preday[2];
    let year = preday[3];
    let monthName = preday[1];
    let monthNumber = (new Date(monthName + "1").getMonth() + 1).toString();
    let dayMonthYear = day+"/"+monthNumber+"/"+year;

    return dayMonthYear;
}