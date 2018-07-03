# Reside Code Challenge

## Assumptions and Info

There are a couple things we are assuming for this demo.

1. Security & Authorization with API. One would not store credentials client side for API access. Instead lets assume we are authenticating with firebase where we would "sign in" and receive a auth token that would be used on all api calls.
2. Data Consistency. We are assuming that all listings have all the data, we don't have any checks to make sure data is there. Such as images.
3. User Data, i.e. userId right now is just passed as props. A better way to do this would be using Redux and storing it that way for it to be used app wide by all Components.
4. Database Security, right now for the sake of quick and easy firebase firestore is set to just accept any database access from localhost. So anyone can just read or write. One should have it set to read and write on auth and just use the anonymous sign in for firebase. That way the user is "signed in" with the app.

---

## Challenge Outline

### Create a list view of data returned from API
Using any technology you like (we’ve had success with React and Firebase, but, choose whatever you’re comfortable with), create a list view of data returned from the SimplyRETS API. SimplyRETS is an API commonly used in real estate. You'll need to make a SimplyRETS.com trial account. The app should meet the following criteria:

1. Get data from this SimplyRETs endpoint on page load: https://api.simplyrets.com/openhouses (you'll need a SimplyRETs trial account)
2. Output the data from the array into a list view of properties. Each property should at least display the following information:
  - Stories
  - Bedrooms
  - Baths full
  - Baths half
  - mlsId
  - listDate in MM/DD/YYYY format
  - A photo
  - The list price
3. On app load, the app should generate a random number that becomes the user's ID. This ID is stored in browser local storage, unless that ID is already there.

The user can click a button to save the mlsId to a location in firebase associated with their username (no UI is needed to view this, however - just save the data to the DB.

---

## Running App

Just run the following commands:

1. `npm install`
2. `npm start`
