// #
// One - Way Flight Trip
// You 've booked a _really_ cheap one-way flight. Unfortunately, that means you have _tons_ of layovers before you reach your destination. The morning of, you woke up late and had to scramble to the airport to catch your first flight. However, in your rush, you accidentally scrambled all your flight tickets. You don'
// t know the route of your entire trip now!

//   Write a
// function `reconstructTrip`
// to reconstruct your trip from your mass of flight tickets.Each ticket is a two - element array with the source airport as the first element and the destination airport as the second element.The ticket
// for your first flight has a destination but no source, and the ticket
// for your final flight has a source, but no destination.

// An example input might look like this:
const tickets = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'], 
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG'],
];


// Your
// function should output an array with the route of your trip.For the above example, it should look like this:
//   ``
// `
// ['LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD'];
// `
// ``

// Analyze the time and space complexity of your solution.

function oneWayFlight(tickets) {
  let flights = {};
  let result = [];

  for (let i = 0; i < tickets.length; i++) {
    let firstLocation = tickets[i][0];
    let secLocation = tickets[i][1];

    if (!flights[firstLocation]) {
      flights[firstLocation] = secLocation;
    }
  }
  result.push(flights[null]);

  for (let i = 1; i < tickets.length - 1; i++) {
    const dest = flights[result[i - 1]]; // LAX -SFO - BHM
    result.push(dest);
  };
  return result;
}

// function oneWayFlight(tickets) {
//   // use an object to associate sources
//   // and destinations
//   const hash = {};
//   const route = Array(tickets.length - 1);

//   tickets.forEach(ticket => {
//     // check for the start destination of our trip
//     if (ticket[0] === null) {
//       // add it to our `route` array as the first element
//       route[0] = ticket[1];
//     }
//     // hash each ticket with the source as key
//     // and destination as value
//     hash[ticket[0]] = ticket[1];
//   });

//   // loop through our object, grabbing the source's
//   // associated destination and adding it to our route
//   for (let i = 1; i < tickets.length - 1; i++) {
//     route[i] = hash[route[i - 1]];
//   }

//   return route;
// }

console.log(oneWayFlight(tickets));
