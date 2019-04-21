# Your Move
<h3 id="index">Index</h3>
1. <a href="#notes">Notes</a><br>
2. <a href="#user">User Story</a><br>
  2a. <a href="#seller">Seller</a><br>
  2b. <a href="#agent">Agent</a><br>
3. <a href="#skills">Skills Used</a><br>
4. Sample API<br>
  4a. <a href="front">Async Call From React Action</a><br>
  4b. <a href="back">Server Handling Of Request</a><br>
5. <a href="#links">Links to Github and Live Site</a><br><br>

 <h2 id="notes">Notes About The App</h2>
 
#### User Controls 
Currently, a UX decision has been made so that neither the listing nor the bid can be edited. This is a purposeful decision so that neither side can make a claim to false information about the listing or the bid.

#### Images
Due to deadline constraints, forms do not allow for image uploading. This is the primary feature to be implemented.

<h2 id="user">User Story</h2>

When you visit the app, you will be required to sign-up with an email, password, and user type. This user type is a required field that consists of either a seller or an agent.

 ![landing](https://user-images.githubusercontent.com/34799623/56465470-c53b0080-63cb-11e9-8f02-a4c8280eb3d5.jpg)

![login](https://user-images.githubusercontent.com/34799623/56465496-4a261a00-63cc-11e9-808e-99c1455b18ba.jpg)

<h2 id="seller">SELLER PROFILE PAGE</h2> (before bids) 

The profile page consists of three main sections. On the left side is a container for created listings, in the center is the form for creating a listing, and on the right side is the container for bids received.

![seller-profile](https://user-images.githubusercontent.com/34799623/56465499-4eeace00-63cc-11e9-911d-4831e01be96f.jpg)

### SELLER (before bids) 
Once logged in as a seller, you will have the ability to create listings from your profile page for properties that you hope to sell (description of a listing below). You will be able to create multiple listings. Once the listing has been created, it will be shown in a minified version on your profile page (description of minified listing view below).

### LISTING 
The listing created by the seller will contain the following fields:

* A headline for the property
* Address (street, city, zip)
* Type of property (house, condo, trailer)
* Total number of bedrooms
* Total number of bathrooms
* Total sq. footage
* A thorough description of the property.

### SELLER (after bids) 
Once a listing has received bids from an agent(s), the bid box on the right side of the profile page will be populated with a minified view of the bid. This will contain the image, who submitted the bid, the bid amount and the bid status (defaults to pending). From this box, you can change the bid status (reflected on the submitting agent's page) to either accepted or rejected.

![seller-profile](https://user-images.githubusercontent.com/34799623/56465499-4eeace00-63cc-11e9-911d-4831e01be96f.jpg)


### MINIFIED VIEW OF THE LISTING 
This view shows the headline the seller has created and (as of version 1) will show a default image. In this container, you can either click on it to redirect to the full listing information page, or delete the listing.

### View Full Listing As Seller
By clicking on a mini-listing component, you will be taken to the full listing overview page. This is where you can review all of the information submitted for a listing. You are also able to delete the listing and/or accept/reject bids. 

![full-listing](https://user-images.githubusercontent.com/34799623/56465494-45f9fc80-63cc-11e9-8dce-454fd17043d0.jpg)

<h2 id="agent">AGENT PROFILE PAGE</h2> (before placing a bid) 

After signing up/logging in as an agent, you will be directed to your profile page. The profile page consists of one main section that shows bids (currently does not contain any content until a bid is placed) that you have submitted on properties (description of bid view below). The profile page also contains a link that directs the user to the search page.

### Agent Search
When you are ready to place a bid, you must use the search function to find listings. You are able to submit up to 3 queries:

* City
* Zipcode
* Property Type (house, condo, trailer) 

Clicking search without any query fields will return ALL listings in the database. When a valid query has been submitted, a minified view of each matching listing displays below the search form. Each minified view has the following information:

* Image of the property
* Headline
* Address
* Total number of bedrooms
* Total number of bathrooms
* Total sq. footage

The agent can then click on one of the listings to view its full page overview.

![search](https://user-images.githubusercontent.com/34799623/56465497-4d210a80-63cc-11e9-95a2-b3dd1cc1ee2e.jpg)

### FULL LISTING OVERVIEW (AGENT) 
The core functionality of the agent takes place here. The agent will see a form that has one input field (amount). This represents the bid amount that the agent believes they can successfully list the property at. Once this bid has been submitted, it becomes visibile on the full listing overview page, as well as back on the agent's profile page. The agent will NOT be able to see any bids submitted by other agents. The agent will have the ability to delete the bid from this page.

#### AGENT PROFILE (after bid) 
The agent's profile will be populated with all of the bids that that agent has submitted for all listings. The agent has the ability to delete bids from this profile page as well. If a seller deletes an active listing that the agent has placed bids on, the bids are removed.

![agent-profile](https://user-images.githubusercontent.com/34799623/56465493-44303900-63cc-11e9-8368-bcb0026a8e32.jpg)

#### MINIFIED VIEW (after placing bid) 
The agent is able to see the current status of the bid (default is pending). If the seller has changed the status of the bid, this is reflected on the agent's profile (accepted, rejected). The seller's personal information is not available to the agent, it is up to the seller to reach out to the agent once a bid has been accepted.

<h2 id="skills">Skills Used</h2>

#### Front End Dependencies
    "enzyme": "^3.8.0",
    "enzyme-adapter-react-16": "^1.11.2",
    "isomorphic-fetch": "^2.2.1",
    "node": "^11.12.0",
    "normalizr": "^3.3.0",
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-redux": "^6.0.1",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.1.5",
    "react-thunk": "^1.0.0",
    "redux": "^4.0.1",
    "redux-mock-store": "^1.5.3",
    "redux-persist": "^5.10.0",
    "redux-react-session": "^2.5.0",
    "redux-thunk": "^2.3.0"

#### Back End Dependencies
    "bcrypt-nodejs": "0.0.3",
    "bcryptjs": "^2.4.0",
    "body-parser": "^1.15.2",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.4",
    "cors": "^2.8.5",
    "dotenv": "^4.0.0",
    "express": "^4.14.0",
    "express-session": "^1.15.6",
    "jquery": "^3.3.1",
    "jsonwebtoken": "^8.2.0",
    "method-override": "^2.3.10",
    "mongoose": "^5.4.7",
    "morgan": "^1.7.0",
    "passport": "^0.3.2",
    "passport-jwt": "^2.2.1",
    "passport-local": "^1.0.0",    

<h2 id="front">Sample API</h2>

#### Get Listing
Returns json data about a single listing.

#### URL
/listing/:id

#### Method:
GET

#### URL Params
Required:
id=[integer]

#### Data Params
Credentials (SSID)

#### Sample Call From Action
    export const GET_LISTING_SUCCESS = "GET_LISTING_SUCCESS";
    export const getListingSuccess = json => {
      const listingResults = normalize(json.listing, Listing);
      return { type: GET_LISTING_SUCCESS, entities: listingResults.entities };
    };

    export const GET_LISTING_FAILURE = "GET_LISTING_FAILURE";
    export const getListingFailure = error => {
      return { type: GET_LISTING_FAILURE, message: error };
    };

    export const GET_LISTING_REQUEST = "GET_LISTING_REQUEST";
    export const getListing = id => dispatch => {
      dispatch({ type: GET_LISTING_REQUEST, id });
      return fetch("/listing/" + id, {
        method: "GET",
        credentials: "include"
      })
        .then(res => {
          if (res.headers.get("Content-Type").includes("application/json")) {
            if (res.ok) {
              return res.json();
            }

            return res.json().then(json => {
              throw Error("API: " + JSON.stringify(json));
            });
          }

          return res.text().then(text => {
            throw Error("HTTP " + res.status + " : " + text);
          });
        })
        .then(json => dispatch(getListingSuccess(json)))
        .catch(error => dispatch(getListingFailure(error)));
    };
    

<h2 id="back">Request Handling From Server</h2>

#### Sample Call:
    app.get("/listing/:id", isLoggedIn, (req, res, next) => {
    Listing.findById(req.params.id)
      .populate({
        path: "bids",
        populate: { path: "user", select: "local.email bids listings" }
      })
      .populate("user")
      .then(listing => {
        return res.json({ listing });
      })
      .catch(next);
    });

#### JSON Success Response:

    { bids:
       [ { _id: 5c91a3ad77b93700175f5c02,
           amount: 300000,
           listing: 5c91a1aa77b93700175f5bfc,
           user: [Object],
           status: 'rejected',
           },
         { _id: 5cb508308776240017d69cb0,
           amount: 250000,
           listing: 5c91a1aa77b93700175f5bfc,
           user: [Object],
           status: 'pending',
           } ],
      _id: 5c91a1aa77b93700175f5bfc,
      headline: 'A beautiful, modern metropolitan condo!',
      street: '123 Smith st.',
      zip: '28805',
      city: 'Asheville',
      image: './styles/images/condo-1.jpg',
      user:
       { local:
          { email: 'seller-demo@email.com'},
         listings:
          [ 5c91a1aa77b93700175f5bfc,
            5c91a2f077b93700175f5bfd,
            5c92769df5f0220017d071c9 ],
         bids: [],
         _id: 5c91a0f277b93700175f5bfb,
         type: 'seller',
         },
      type: 'Condo',
      bed: 2,
      bath: 2,
      footage: 1800,
      description:
       'Built in 2010, this modern property has all of the designs that an aesthetically...',
      }


<h2 id="links">Links</h2>

#### Live App: https://fullstack-capstone.herokuapp.com/

#### Github: https://github.com/dukefan5656/full-stack-capstone


<a href="#index">Back To Top</a>
