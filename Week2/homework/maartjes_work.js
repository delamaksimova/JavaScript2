'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here

// 1. map the tasks to durations in hours
const hourDurations = tasks.map((x) => x.duration / 60)

// 2. Filter out everything that took less than two hours
const longDurations = hourDurations.filter((x) => x >= 2)

// 3. Multiply the each duration by a per-hour rate for billing and sum it up
let hourRate = 7.25
const totalSalary = longDurations.reduce((sum, x) => {return sum + x * hourRate}, 0)

// 4. Output a formatted Euro amount, rounded to Euro cents
const euroFormatter = new Intl.NumberFormat('en-SWE', {
  style: 'currency',
  currency: 'EUR', 
  minimumFractionDigits: 2
})

console.log('For longer tasks the total payment for Maartje is ' + euroFormatter.format(totalSalary))

// euro sign - '\u20ac'