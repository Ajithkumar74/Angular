function isleap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0);
}
var yeardate = isleap(2000);
console.log(yeardate);
