// export const monthList = [
//   '1월',
//   '2월',
//   '3월',
//   '4월',
//   '5월',
//   '6월',
//   '7월',
//   '8월',
//   '9월',
//   '10월',
//   '11월',
//   '12월',
// ]

export const monthList = Array.from(Array(12), (_, index) => `${index + 1}월`)
export const dayList = Array.from(Array(31), (_, index) => `${index + 1}`)

const year = (new Date()).getFullYear()
console.log('year: ', year)
export const yearList = Array.from(Array(121), (_, index) => `${year - index}`)
