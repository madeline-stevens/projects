# projects

Next steps:

- removed all duplicate project files now trying to commit 
- Working on connecting to Azure
- explore the DSA style/design guide
- Edit all image alt text
- password protected?

### Initial Setup:

New setup:

```
DEBUG=myexpressapp:* npm start
```

#### Preview this app using node.js (for me this shows up as localhost:8080)

Within terminal, in the root of this project folder type:

```
live-server
```

After adding server.js file and installing express and specifying 'PORT 3000' type this in terminal:

```
nodemon
```

#### packages:

npm init- to create package.json
npm install- to create nodemodules

needed to update hoek dependency in node:

```
npm update && npm install
```

#### CDNs (aka- libraries)

- page.js
- jquery
- bootstrap
- Font Awesome ( twitter- <i class="fab fa-twitter-square"></i>)

### Bootstrap and Heroku setup:

#### Bootstrap:

Adding bootstrap components (resource- https://www.youtube.com/watch?v=gqOEoUR5RHg)

To incorporate bootstrap I added two things to my index.html and i immediately saw a change in my chrome browser after right clicking/open in browser:
At the top within my my style sheets section:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

At the bottom within my CDN scripts section:

```html
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

#### Heroku:

Setting up heroku environment.



Attempting to use the php fix again (resource- https://www.youtube.com/watch?v=IVvU9JF6o8s):

```php
<?php header( 'Location: /index.html' ) ; ?>
```

Ran into the issue of jquery not being recognized despite the CDN's script at the bottom of index.html. I had to add this into .eslintrc:

```
  "env": {
    "browser": true,
    "jquery": true,
    "node": true,
    "es6": true
  },
```

### Helpful Code Snippets

#### Code for adding a Bootstrap button that will redirect to an ousdide link

```
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <a class="btn btn-primary mx-auto" href="https://medium.com/p/44acf5b65a3/edit" role="button">Read More
  </a>
</div>
```



### Fixed for Coding Falcons________

#### A merge conflict due to editing the readme on github, that seemed to all of a sudden fix itself:

![terminal](public/photos/terminal.png)

#### MIME chrome error message:

There was missing a semicolon in the server.js file, also had multiple scripts for bootstrap and jquery.
![terminal](public/photos/screenshot2.png)

#### Following error in chrome browser window:

```
The requested URL /about was not found on this server.
```

The issue was that I had used that php trick to attempt to host a simple html/css app (not sure why it wouldn't initally work still) and I did not have _ just _ the following, I thought I had to be explicit about each route in server.js as well as route.js:

In server.js:

```
app.get('/*', (req, res) => {
  console.log("__REQUEST__ : ", req);
  console.log("__RESPONSE__ : ", res);
  res.sendFile('index.html', {root: './public'});
});
```

Getting rid of the above solved my problem locally on localhost:3000 but not on heroku.

#### Hiding tab content on home page:

The following code in routes.js will hide tab content on page load but if you refresh within tab content this code also tells your page to only show home. So I still need to figure out a solution.

```js
// $(document).ready(function() {
// $('#about').hide();
// $('#scholarships').hide();
// $('#programs').hide();
// $('#contact').hide();
// $('#home').show();
// });
```

FIXED, routes.js now looks like this:

```js
var app = app || {};

page("/about", app.aboutController.about);
page("/scholarships", app.scholarshipController.scholarships);
page("/programs", app.programsController.programs);
page("/contact", app.contactController.contact);
page("/", app.homeController.home);

page();
```



### ARIA__________

#### ARIA attributes added to html attributes:

1.  Added aria-label for a fontawesome Twitter icon in my footer:

```html
<a href="https://twitter.com/_madtweets" target="_blank" aria-label="Twitter"><i class="fab fa-twitter-square fa-2x"></i></a>
```

2.  Added aria-required for each "contact us" form text field:

```html
<input type="email" class="form-control" name="replyto" value="" placeholder="E-mail" aria-required="true">
```

3.  Added aria-label for each "contact us" form text field (I think this is to satisfy an aXe issue):

```html
<input type="text" class="form-control" name="name" placeholder="Name" aria-label="Form, empty name field" aria-required="true">
```

4.  Don't use heading mark up on text that isn't actually a heading:
    Used to be:

```html
<h4><strong>Ask us anything!</strong></h4>
```

ARIA change:

```html
<p><strong>Ask us anything!</strong></p>
```

5.  Adding meaningful alt text to images, instead of the default bootcamp provides:

Used to be:

```html
<img class="img-responsive" src="photos/IMG_0433.jpg" alt="Responsive imgage">
```

Changed to:

```html
<img class="img-responsive" src="photos/IMG_0433.jpg" alt="Co-founders, Maddy and Ivette pose for selfie">
```

6.  Adding aria-labels to image carousel left/right pointers:

```html
<a class="left carousel-control" href="#theCarousel" data-slide="prev">
  <span class="glyphicon glyphicon-chevron-left" aria-label="click to go to left carousel image"></span>
</a>
```

### Resources

Project columns- https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_grid_examples1&stacked=h
Rounding corners for about the team- https://codepen.io/Madeline206/pen/JZPmMY?editors=1100  
Resizing jumbotron- https://www.codecademy.com/en/forum_questions/5398ac97282ae39e8d000be6  
Bootstrap contact us- https://bootsnipp.com/snippets/featured/contact-us  
Bootstrap footer- https://mdbootstrap.com/components/bootstrap-footer/  
Formspree for contact us- https://formspree.io  
Routing (showing/hiding index.html content)- https://github.com/ejdelrio/11-spa_routing/tree/anthony-eddie/starter-code
