# Your Move

<h3 id="index">Index</h3>
1. User Story
  1a. Seller
  2b. Agent
2. Skills Used
3. API Sample
4. Links to Github and Live Site


When you visit the app, you will be required to sign-up with an email, password, and user type. This user type is a required field that consists of either a seller or an agent.

SELLER PROFILE PAGE (before bids) The profile page consists of three main sections. On the left side is a container for created listings, in the center is the form for creating a listing, and on the right side is the container for bids received.

SELLER (before bids) Once logged in as a seller, you will have the ability to create listings from your profile page for properties that you hope to sell (description of a listing below). You will be able to create multiple listings. Once the listing has been created, it will be shown in a minified version on your profile page (description of minified listing view below).

LISTING The listing created by the seller will contain the following fields :

A headline for the property
Address (street, city, zip)
Type of property (house, condo, trailer)
Total number of bedrooms
Total number of bathrooms
Total sq. footage
A thorough description of the property.
MINIFIED VIEW OF THE LISTING This view shows the headline the seller has created and (as of version 1) will show a default image. In this container, you can either click on it to redirect to the full listing information page, or delete the listing.

SELLER (after bids) Once a listing has received bids from an agent(s), the bid box on the right side of the profile page will be populated with a minified view of the bid. This will contain the image, who submitted the bid, the bid amount and the bid status (defaults to pending). From this box, you can change the bid status (reflected on the submitting agent's page) to either accepted or rejected.

AGENT PROFILE PAGE (before placing a bid) After signing up/logging in as an agent, you will be directed to your profile page. The profile page consists of one main section that shows bids that you have submitted on properties (description of bid view below). The profile page also contains a link that directs the user to the search page.

AGENT (placeing a bid) When you are ready to place a bid, you must use the search function to find listings. You are able to submit up to 3 queries:

City
Zipcode
Property Type (house, condo, trailer) Clicking search without any query fields will return ALL listings in the database. When a valid query has been submitted, a minified view of each matching listing displays below the search form. Each minified view has the following information:
Image of the property
Headline
Address
Total number of bedrooms
Total number of bathrooms
Total sq. footage
The agent can then click on one of the listings to view its full page overview.

FULL LISTING OVERVIEW (AGENT) The core functionality of the agent takes place here. The agent will see a form that has one input field (amount). This represents the bid amount that the agent believes they can successfully list the property at. Once this bid has been submitted, it becomes visibile on the full listing overview page, as well as back on the agent's profile page. The agent will NOT be able to see any bids submitted by other agents. The agent will have the ability to delete the bid from this page.

AGENT PROFILE (after bid) The agent's profile will be populated with all of the bids that that agent has submitted for all listings. The agent has the ability to delete bids from this profile page as well. If a seller deletes an active listing that the agent has placed bids on, the bids are removed.

MINIFIED VIEW (after placing bid) The agent is able to see the current status of the bid (default is pending). If the seller has changed the status of the bid, this is reflected on the agent's profile (accepted, rejected). The seller's personal information is not available to the agent, it is up to the seller to reach out to the agent once a bid has been accepted.

USER CONTROLS Currently, a UX decision has been made so that neither the listing nor the bid can be edited. This is a purposeful decision so that neither side can make a claim to false information about the listing or the bid.

Live App URL: https://fullstack-capstone.herokuapp.com/
