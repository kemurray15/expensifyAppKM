import moment from 'moment'

export default [{
    id: "1",
    description: 'bagel',
    note: 'everything',
    amount: 300,
    createdAt: 0
}, {
    id: "2",
    description: 'coffee',
    note: 'black',
    amount: 250,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: "3",
    description: 'CC',
    note: 'November',
    amount: 45000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]