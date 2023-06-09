export const ChartData = (data) => {
    const year = new Date().getFullYear()

    let month1 = 0
    let month2 = 0
    let month3 = 0
    let month4 = 0
    let month5 = 0
    let month6 = 0
    let month7 = 0
    let month8 = 0
    let month9 = 0
    let month10 = 0
    let month11 = 0
    let month12 = 0

    data.map(complaint=>(
        complaint?.date?.year === JSON.stringify(year) && (
            complaint?.date?.month === "1" && (month1 = month1 + 1),
            complaint?.date?.month === "2" && (month2 = month2 + 1),
            complaint?.date?.month === "3" && (month3 = month3 + 1),
            complaint?.date?.month === "4" && (month4 = month4 + 1),
            complaint?.date?.month === "5" && (month5 = month5 + 1),
            complaint?.date?.month === "6" && (month6 = month6 + 1),
            complaint?.date?.month === "7" && (month7 = month7 + 1),
            complaint?.date?.month === "8" && (month8 = month8 + 1),
            complaint?.date?.month === "9" && (month9 = month9 + 1),
            complaint?.date?.month === "10" && (month10 = month10 + 1),
            complaint?.date?.month === "11" && (month11 = month11 + 1),
            complaint?.date?.month === "12" && (month12 = month12 + 1)
        )
    ))

    return {month1,month2,month3,month4,month5,month6,month7,month8,month9,month10,month11,month12}
}