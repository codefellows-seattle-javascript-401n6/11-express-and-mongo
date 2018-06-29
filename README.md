![cf](https://i.imgur.com/7v5ASc8.png) 11: Express and MongoDB
======

## Submission Instructions
* Fork this repository & create a new branch for your work
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Push to your repository
* Submit a pull request to this repository
* Submit a link to your PR in canvas
* Write a question and observation on canvas

## Learning Objectives  
* Students will be able to create a RESTful single resource API using the
  express framework
* Students will be able to persist data using MongoDB
* Students will interact with MongoDB through Mongoose

## Requirements

#### Configuration
* `package.json`
* `.gitignore`
* `README.md`
  * Your `README.md` should include detailed instructions on how to use your API
  * List each GET/PUT/POST/DELETE url endpoint
  * Describe how each endpoint expects to receive data
  * Does data come in on the querystring or through the body?
  * What parameter names does it expect?

#### Feature Tasks
* Create an HTTP server using `express`
* Create a Mongoose model with at least three attributes
  * it can **not** have the same properties as the in-class sample code
* Create a RESTful API to interact with your model through the server.
* Create a directory called `routes` that houses files with routes for
  different parts of your application
* Create a dictory called `models` that houses the file with your Mongoose
  model.

#### Server Endpoints
* **`/api/simple-resource-name`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * If no `?id=` is passed in the URL return a list of ids of every resource.
* `GET` request
 * pass `?id=<_id>` as a query string parameter to retrieve a specific resource (as JSON)
* `PUT` request
 * pass `?id=<_id>` as a query string parameter to identify a specific resource (as JSON)
 * pass data as stringifed JSON in the body of a **POST** request to update a resource
* `DELETE` request
 * pass `?id=<_id>` in the query string to **DELETE** a specific resource
 * this should return a 204 status code with no content in the body

#### Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body

###Incomplete