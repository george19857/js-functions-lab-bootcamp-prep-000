function happyHolidays() {
   returns("Happy holidays!")
function happyHolidaysTo  ()
 show "Happy holidays, ${name}!"
function happyHolidaysTo() show "Happy summer {$holidays}, ${name}!"
function holidayCountdown() 
  show "It's ${days} days until ${holiday}!"
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })}