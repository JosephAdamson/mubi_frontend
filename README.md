# _"As a user, I want to keep a log of my film reviews."_

Using React and supporting libraries of your choice, build a simple web application to fulfill this user story. It doesn't need to be polished aesthetically, but it should meet the basic requirements in a robust manner.

### Basic requirements

* Creation of a film review with review text attribute.
* A review can be deleted.
* Each review should have its own canonical url.
* Films are searchable by the title field.
* All reviews are navigable from a single index view.

### Optional bonus features

* The reviews in the index view are filterable by film genre.
* Reviews are persisted locally and reconstituted when the application is reopened.
* Apply responsive CSS to optimize the layout for the available screen size.

### Wireframe

Index and show views

![wf1](https://user-images.githubusercontent.com/345715/36377832-6f0cecfa-1570-11e8-89dd-4e26e878ee75.png)

Form view

![wf2](https://user-images.githubusercontent.com/345715/36377771-34742e6e-1570-11e8-904b-0f5ce3a6c2d9.png)


### Development process

This is an opportunity to demonstrate your approach to problem solving, both in terms of the final code and the commits along the way. This part is important, please demonstrate how you approach the task by expressing yourself in a series of incremental commits. You are of course welcome to edit your commit history before sharing your solution.

You may wish to fork this repository into your local github account, or you may wish to simply clone it in to a private repository you control. As long as we can see your work, whatever you prefer is fine. When you are ready to share your work please push your work back to your repository, and share the link.

### Up and running

* Once you have the code checked out locally, first run `npm install`
* Run `npm run dev` for dev server at http://localhost:5173
* You can also run `npm run build` to build the app bundle into dist, and then to preview the built app, run `npm run preview`

### Notes

* Vite boilerplate already included
* Using icons as in the wireframe is not mandatory
* The JSON API url (declared in `app/constants.ts`) is a static JSON file containing a limited snapshot of films.
* For the purpose of this exercise, no state needs to be persisted back to a backend server. It is a 'local' app.


Reach out over email if you have any questions!

### ADDENDUM: Joe's Notes/Log
<hr>

#### Additional dependencies
- [react router dom](https://reactrouter.com/start/declarative/installation) client side cannonical URLs required for individual reviews.
- [zod](https://zod.dev/) Good, simple validation library for derived/custom types.
- [tailwindcss] UI styling.

#### Data
Taking a look at the API data we can split it up into 2 (so far) types Film and it's subtype Cast.

```json
{
    "id": "annie-hall",
    "title": "Annie Hall",
    "release_year": 1977,
    "genres": [
      "Comedy",
      "Romance",
      "Drama"
    ],
    "cast": [
      {
        "id": "woody-allen",
        "name": "Woody Allen",
        "credits": [
          "Director",
          "Cast",
          "Screenplay"
        ]
      }, ...
```

MVP
- [ ] Creation of a film review with review text attribute.
- [ ] A review can be deleted.
- [x] Each review should have its own canonical url.
- [ ] Films are searchable by the title field.
- [x] All reviews are navigable from a single index view.
  
EXTRA
- [ ] The reviews in the index view are filterable by film genre.
- [x] Reviews are persisted locally and reconstituted when the application is reopened.
- [ ] Apply responsive CSS to optimize the layout for the available screen size.

Looking at the wireframes we will need a type to define a Review linked to film by id (the film name).
Component list (based on looking at wireframes)

Data: two hooks and a context.
- [x] One for pulling in the mubi API data that we will need for search
- [x] One for handling the storage of reviews
  - Because this is a small demo app, we can get away with achieving persitance for our reviews by storing them in local storage (5-10mb per domain), in theroy this could still store hundreds of reviews, especially if the content had a character limit. In reality this would feature would be better served storing our reviews in a DB.
- [x] One context for centralizing, sorting and managing our api and locally stored data.
  
Application UI will have 2(3) pages. 
- [x] Home (search review by genre)
  - [x] HomeHeader (open add review modal)
  - [x] SearchForm (search film data, already loaded into memory)
  - [x] ReviewCard (Render review sample)
    NOTE: think about how we want to render review list (pagination? lazy loading?)
- [ ] Review (each review page has it's own unique URL based on an id)
- [ ] ReviewForm (user generated reviews, this could be a modal)