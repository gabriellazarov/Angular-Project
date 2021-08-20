**MyGameList** is a simple site that is intended to index video games with info about them and let registered users make lists for their finished games and those they plan on playing. The concept is heavily inspired by MyAnimeList's.

 \
**Header:**\
Contains the site's logo as well as a navigation for pages: "All Games", "Login", "Register" for all users and "Finished Games", "Plan to Play", "Profile Page" for logged in users. Also has a "Logout" button for logged in users.

**All Games:**\
The main page, accessible by all users, lists all games on the database with an image, title, tags, short summary of the game, average score (calculated from all user scores) and buttons to add the corresponding game to your "Plan to Play" or "Finished Games" list. For non-logged in users the two buttons will send them to a login page while logged in users they will play their appropriate role. Logged in users also get an additional option (select + button) to rate the game from 1 to 10 or remove their already existing scores by selecting "None" IF the game is already in their "Finished Games" list.

**Login/Register:**\
Standard login and register pages, with links to one another for users with/without a registered account. 

**Finished Games:**\
Only accessible by logged in users. This page lists all games the user has finished similarly to All Games but with limited actions that are more appropriate to the page and a different view model.

**Plan to Play:**\
Very similar to Finished Games as it is only accessible by logged in users and allows limited but adequate actions with the user's planned games.

**Profile Page:**\
Shows info about the user: a profile picture, short description, gender, age, all of which are edit-able and the user's highest rated  (by average score) finished and planned to play games.


