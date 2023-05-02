export const Routes = {
  Home: 'Home',
  Profile: 'Profile',
};
/*
 * Instead of using hardcoded string values for route names throughout the app,
 * defining constants for routes centralizes the route names in a single file.
 * This means that if a route name needs to be changed, it can be done in one place
 * instead of searching through the entire codebase for every instance of the old route name.
 * Furthermore, using constants for routes also makes the code more readable and understandable.
 * It's easier to see what screens are available and how they relate to each other when the route
 * names are defined in a central location and imported throughout the app.
 * Finally, defining constants for routes can help prevent errors from typos or misspellings.
 * If a route name is misspelled or incorrectly typed, the app may crash or navigate to the wrong screen.
 * Using constants for routes can help prevent these types of errors by ensuring that the correct route name
 * is used consistently throughout the app.
 * */
