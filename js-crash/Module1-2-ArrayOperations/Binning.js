//* Binning is a technique used to group a range of values into smaller intervals, called bins.
//* This is particularly useful when you want to analyze data that has a wide range of values or
//* when you want to create histograms.

//? Usecase: You have an array of time durations (in seconds) for a set of tasks, and you want to group these durations into bins of 10 seconds each to see how many tasks fall into each time range.

const durations = [5, 12, 18, 25, 30, 35, 42, 50, 55, 60, 65, 70, 80, 90, 100];

//? Step 1: Define the bin size
const binSize = 10;

//? Step 2: Create an object to hold the bins
const bins = {};

//? Step 3: Iterate through the durations and assign them to the appropriate bins
durations.forEach((duration) => {
  const bin = Math.floor(duration / binSize) * binSize; // Calculate the lower bound of the bin
  bins[bin] = (bins[bin] || 0) + 1; // Increment the count for the bin
});

//? Step 4: Output the bins and their counts
console.log(bins);
//? Output will show how many durations fall into each time range (0-9s, 10-19s, etc.)
// Example output: { '0': 1, '10': 2, '20': 1, '30': 2, '40': 1, '50': 2, '60': 2, '70': 1, '80': 1, '90': 1, '100': 1 }

//? Another example with timestamps of events and we wantto group them into 30-minute intervals to analyze peak activity times.

//Input:
const events = [
  { timestamp: "2024-06-01T08:15:00Z", event: "Login" },
  { timestamp: "2024-06-01T08:45:00Z", event: "Logout" },
  { timestamp: "2024-06-01T09:10:00Z", event: "Login" },
  { timestamp: "2024-06-01T09:40:00Z", event: "Logout" },
  { timestamp: "2024-06-01T10:05:00Z", event: "Login" },
  { timestamp: "2024-06-01T10:35:00Z", event: "Logout" },
];

//? Step 1: Define the bin size in milliseconds (30 minutes)
const binSizeMs = 30 * 60 * 1000;

//? Step 2: Create an object to hold the bins
const timeBins = {};

//? Step 3: Iterate through the events and assign them to the appropriate bins
events.forEach((event) => {
  const timestamp = new Date(event.timestamp).getTime(); // Convert timestamp to milliseconds
  const bin = Math.floor(timestamp / binSizeMs) * binSizeMs; // Calculate the lower bound of the bin
  timeBins[bin] = (timeBins[bin] || 0) + 1; // Increment the count for the bin
});

//? Step 4: Output the bins and their counts
console.log(timeBins);
//? Output will show how many events fall into each 30-minute interval, which can help identify peak activity times.
