const {arr} = require('./array')

const matches = () => {
     return arr.filter(s => s.includes('job'));
}
console.log(matches());
module.exports = {matches}