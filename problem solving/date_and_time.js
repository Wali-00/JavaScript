// Current Date & Time
const now = new Date();

console.log(now);

// =======================
// GET METHODS
// =======================

// Year (e.g. 2026)
console.log(now.getFullYear());

// Month (0-11)
// January = 0, December = 11
console.log(now.getMonth());

// Date of month (1-31)
console.log(now.getDate());

// Day of week (0-6)
// Sunday = 0, Saturday = 6
console.log(now.getDay());

// Hours (0-23)
console.log(now.getHours());

// Minutes (0-59)
console.log(now.getMinutes());

// Seconds (0-59)
console.log(now.getSeconds());

// Milliseconds (0-999)
console.log(now.getMilliseconds());

// Time in milliseconds since Jan 1, 1970
console.log(now.getTime());

// =======================
// SET METHODS
// =======================

let date = new Date();

// Set Year
date.setFullYear(2030);

// Set Month
date.setMonth(11); // December

// Set Date
date.setDate(25);

// Set Hour
date.setHours(10);

// Set Minutes
date.setMinutes(30);

// Set Seconds
date.setSeconds(45);

// Set Milliseconds
date.setMilliseconds(500);

console.log(date);

// =======================
// DATE FORMATTING
// =======================

// Full Date String
console.log(now.toDateString());

// Full Time String
console.log(now.toTimeString());

// Local Date & Time
console.log(now.toLocaleString());

// Local Date
console.log(now.toLocaleDateString());

// Local Time
console.log(now.toLocaleTimeString());

// ISO Format
console.log(now.toISOString());

// UTC String
console.log(now.toUTCString());

// =======================
// STATIC METHODS
// =======================

// Current timestamp
console.log(Date.now());

// Parse Date String
console.log(Date.parse("2026-06-11"));

// =======================
// CREATE CUSTOM DATE
// =======================

// Year, Month, Date
const d1 = new Date(2026, 5, 11);

// Year, Month, Date, Hour, Minute
const d2 = new Date(2026, 5, 11, 10, 30);

console.log(d1);
console.log(d2);

// =======================
// UTC METHODS
// =======================

// UTC Year
console.log(now.getUTCFullYear());

// UTC Month
console.log(now.getUTCMonth());

// UTC Date
console.log(now.getUTCDate());

// UTC Hours
console.log(now.getUTCHours());

// UTC Minutes
console.log(now.getUTCMinutes());

// UTC Seconds
console.log(now.getUTCSeconds());

// =======================
// USEFUL EXAMPLES
// =======================

// Current Timestamp
const timestamp = Date.now();

// Convert Timestamp to Date
const dateObj = new Date(timestamp);

// Difference Between Two Dates
const start = new Date("2026-01-01");
const end = new Date("2026-01-10");

const diff = end - start;

// Convert milliseconds to days
const days = diff / (1000 * 60 * 60 * 24);

console.log(days); // 9
