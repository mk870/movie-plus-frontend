# MoviePlus (React Frontend) <img src="https://i.ibb.co/G93v3nL/logo5.jpg" alt="logo5" border="0" align="center" width="50" border-radius="15">
<img src="https://i.ibb.co/NY4FkHM/moviehome.png" alt="moviehome" border="0">

## Project Summary 
* This app shows your favourite movies and actors from our library with 5000 movies, It has a [***Machine Learning Recommendation Engine***](https://github.com/mk870/Movie_Recommendation_Engine_Api) which recommends movies based on content type e.g genre, director and actors (its a content based recommendation engine).
* The app also allows you to add and delete your favourite movies and actors in your own account via the [***MoviePlus spring boot server***](https://github.com/mk870/MoviePlusServer). 
* Another feature is that it allows you to watch movie trailers and reviews through the youtube api.
* Finally, it has a live [***Twitter Movie Sentiment***](https://github.com/mk870/Twitter_Sentiment_Analysis_Api) score for each movie, in addition you also get to see what people are saying about your movie through wordcloud.
### Project Steps :
* The app has 9 pages created using react-router (homepage, myMovies, myActors, videos, , login, actor, movie, twitterSentiment and signup page)
* This app consumes 3 custom made apis, a flask machine-learning twitter sentiment app, flask machine-learning recommendation app and a spring boot app with a mysql database.
* Finally, styled-components was used to style the entire application.

### **Resources Used**
***
**React Version :** 17.0.2  

**Language Used :** Javascript

**Dependencies**:  React-router, React-icons, styled-components, react-context, react-wordcloud, react-loader-spinner and axios.  

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)	![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens)

**For Web Framework Requirements**: npm install

**APIs**: tmdb, youtube ,context Api, [***Twitter Movie Sentiments***](https://github.com/mk870/Twitter_Sentiment_Analysis_Api), [***Machine Learning Recommendation Engine***](https://github.com/mk870/Movie_Recommendation_Engine_Api) and [***MoviePlus spring boot server***](https://github.com/mk870/MoviePlusServer)  



### **Movie Recommendations** 
* The [***Machine Learning Recommendation Engine***](https://github.com/mk870/Movie_Recommendation_Engine_Api) is used to pull suggestions based on a movie typed by the client then serve 8 recommended movies.
* Axios is used as the package to fetch the data, utilizing the axios cancelToken property to stop network calls when necessary as the client types in the input field.
* Once the movie names and ids are served, the app calls the TMDB api to get more movie data like the poster, overview etc.

<img src="https://i.ibb.co/9gz9zcN/Movie-Plus-1.png" alt="Movie-Plus-1" border="0">

### **Movie Info**  
* The app displays  more movie information, these include the cast and the reviews thanks to the TMDB api.


<img src="https://i.ibb.co/5xPzcx4/cast.png" alt="cast" border="0">

### **Actor Info**  
* Actors's bio, age, featured movie-list etc are also diplayed by the app on the clicked actor's page.
* Used react-router (dynamic routing) feature to achieve this.  

<img src="https://i.ibb.co/LxNCsMP/Movie-Plus-3.png" alt="Movie-Plus-3" border="0">

### **Twitter sentiments** 
* The twitter-sentiments are retrieved from a custom made machine-learning microservice together with the wordcloud words ([***Twitter Movie Sentiments API***](https://github.com/mk870/Twitter_Sentiment_Analysis_Api)). 
* React-wordcloud is used to serve the twitter data to the client.

<img src="https://i.ibb.co/zZb4zsf/Movie-Plus.png" alt="Movie-Plus" border="0">

### **Movie trailer and reviews**  
* This is rendered in the videos page, the youtube api is consumed to return the appropriate video data and an html iframe displays the video to the client.

<img src="https://i.ibb.co/9Z50Mrg/Movie-Plus-videos.png" alt="Movie-Plus-videos" border="0">

### **MyMovies and MyActors**  
* The client's movies and actors are created, deleted and saved via a restful [***Spring boot server***](https://github.com/mk870/MoviePlusServer) to a mysql database.
* The client can access, delete his/her movies and actors on  his/her account.

### **Productionization**
Deployed the app to Netlify.

**Live Implemantation:** [MoviePlus](https://react-movieplus.netlify.app)
