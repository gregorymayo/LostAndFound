# LostAndFound



**San Jose State University**

**EnterpriseSoftware-CMPE172/Spring2020**

* Gregory Jueves Mayo
* Kevin Prakasa
* Jiawei Zhang



### Table of Content

  * [1. Project Introduction](#1-project-introduction)
  * [2. Sample Demo Screen Shots:](#2-sample-demo-screen-shots-)
  * [3. Pre-requisites:](#3-pre-requisites-)
  * [4. UML Diagrams](#4-uml-diagrams)
  * [5. Schema](#5-schema)
  * [6. Database Queries](#6-database-queries)
  * [7. Midtier APIs](#7-midtier-apis)
  * [9. UI data transport](#9-ui-data-transport)



<a name="1-project-introduction"></a>

## 1. Project Introduction

Everyone always has that moment when they forget their essential belongings and don't know where to start to look for it. By developing Lost and Found, we hope that we can assist our users to search for their lost item on our platform first. 

Lost and Found is a web application that allows the user to post their lost items and find their lost personal belongings in the area. It is a class project that we hope to solve problems on a daily basis and implement different kinds of new technologies that we learned from the class such as ReactJS, Maven, Spring Boot, AWS RDS and Docker. 

<a name="2-sample-demo-screen-shots-"></a>

----

## 2. Sample Demo Screen Shots:

* Sign In Page

![img](https://i.ibb.co/zxFnjZB/Screen-Shot-2020-05-12-at-2-42-19-PM.png)

* Sign Un Page

![img](https://i.ibb.co/4d15zxF/Screen-Shot-2020-05-12-at-2-42-29-PM.png)

* Post Item Page

![img](https://i.ibb.co/G3LWHDY/Screen-Shot-2020-05-12-at-2-44-09-PM.png)

* Regular User Page

![img](https://i.ibb.co/bdGyCZX/image.png)

* Admin User Page

![img](https://i.ibb.co/KsBSVYF/image.png)


<a name="3-pre-requisites-">

----

## 3. Pre-requisites:

*List of required software to download*

* Java JDK
* Maven
* MySQL
* Node.js
* Docker



*How to run the application locally*

In /LostAndFound project directory. Open terminal and run the following command. 

```
mvn install
```



After build is success, run the following command.

```
java -jar target/lost-and-found-0.0.1-SNAPSHOT.jar
```

Backend is now running on 

```
localhost:8080
```



In /src/main/frontend directory, run the following command 

```
npm install
npm start
```

Frontend is now running on 

```
localhost:3000
```

*How to run the application using Docker*

In /LostAndFound project directory. Open terminal and run the following command. 

```
docker build -f Dockerfile -t docker-spring-boot .
```



After build is success, run the following command.

```
docker run -p 8085:8085 docker-spring-boot
```


In /src/main/frontend directory, run the following command 

```
docker build -f Dockerfile -t docker-react-app .
```

After build is success, run the following command.

```
docker run \-it \--rm \-v ${PWD}:/app \-v /app/node_modules \-p 3000:3000 \-e CHOKIDAR_USEPOLLING=true \docker-react-app
```

Frontend is now running on 

```
localhost:3000
```

---



<a name="4-uml-diagrams">

## 4. UML Diagrams

* Class Diagram

![img](https://lh4.googleusercontent.com/QMRrm4L-KG4Sz05KFkWfwe2kwss-f-PgSP-ksChT39A0XyCd2XkyW7FtB6K98ZRfiuGF5CzrlxyMy6Rs-Y8_yz1aoEdVQUtL-OM1TMdbNQdY0F7t6fRfhSGPyBFms-eL4WIkiXEBCUs)

* Sequence Diagram

Login :

![img](https://lh6.googleusercontent.com/ED5dz9kObIW9B3eq9wEWS2FpZyMEjmN3Bcr8RAzydNaS1yUwmldtXE2euLmrHYV7x8boD6EjQOhj1VEEHwLfhY-525wxcK80s6oQSJHIvsAqX6AlhXYMjbYClHzCi1D5JYZrPMawx5Y)

Item :

![img](https://lh5.googleusercontent.com/8pz7ZMqgeluRgEcwvdTbWGCETAKXBVEBn72FINJNstkFoNNUK_oTioHL4SJSRZxfrj7ow2d3wIrtCMDkEecd_3o04JElfTaSBtUhzgCXpVGynooyAaASAp9W021Gws1NWtm9ZuuiAOI)





<a name="5-schema">

## 5. Schema

![img](https://lh4.googleusercontent.com/Yr71nS7hv3QFHXuckgPWOrfGnQDxGCb6EuRUTvGvb9GTwakfciWqSoCxcEgysE7rLBvbIJP7YNG-BcI-aVpW1hqiQ3OjAAViCzrVbopSLJ-b6z5mozurRxofVf3nY2Z4uFAge2LgFzk)

<a name="6-database-queries">

## 6. Database Queries

*Every query in our project is provided default by Spring Data JPA, we did not implement any custom query*



<a name="7-midtier-apis">

## 7. Midtier APIs

 @GetMapping

* ("api/items") : Get all items
* ("api/item/{itemId}") : Get a specific item with a @PathVariable itemId
* ("api/item/date/{itemId}") : Get a string containing found date for a specific item 



@PostMapping

* ("api//item") : Create a new item and store in database
* ("api//item/{itemId}/{dateFound}") : Post the string dateFound to target itemId item
* ("/user") : Create an user
* ("/user/login") : Login an user. 



@DeleteMapping

* ("/item/{itemId}") : Delete an item.



---



<a name="9-ui-data-transport">

## 9. UI data transport

* Items : @GetMapping("api/items") 

  ```
  [
      {
          "itemId": 1,
          "itemName": "Android",
          "itemDescription": "an andriod",
          "itemPicture": "http://xxx.jpg",
          "dateLost": "2020-04-15",
          "dateFound": "2020-04-19"
      },
      {
          "itemId": 2,
          "itemName": "andriod 3",
          "itemDescription": "an lost andriod",
          "itemPicture": "http://xxx.jpg",
          "dateLost": "2020-04-23",
          "dateFound": null
      },
      {
          "itemId": 4,
          "itemName": "Macbook",
          "itemDescription": "a laptop",
          "itemPicture": "http://xxxxx.jpg",
          "dateLost": "2020-04-23",
          "dateFound": "2020-04-23"
      }
  ]
  ```
  
 * Frontend :
 
  ```
  const getData = async () => {
		  //GET Method
		  const res = await fetch('https://lost-and-found-backend.herokuapp.com/api/items');
		  const resData = await res.json();
		  console.log(resData);
	};

  ```
  

* Item: @GetMapping("api/item/{itemId}")

  ```
  {
      "itemId": 4,
      "itemName": "Macbook",
      "itemDescription": "a laptop",
      "itemPicture": "http://xxxxx.jpg",
      "dateLost": "2020-04-23",
      "dateFound": "2020-04-23"
  }
  ```

* Item : @PostMapping("/item")

  ```
  {
  	"itemName": "Macbook",
  	"itemDescription": "a laptop",
  	"itemPicture": "http://xxxxx.jpg"
  }
  ```
* Frontend:
  ```
	 const response = await fetch('https://lost-and-found-backend.herokuapp.com/api/item', {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify({
					itemName: itemName,
					itemDescription: itemDesc,
					itemPicture: itemImg,
					dateLost: newTimeFounds
				})
			});
			const responseData = await response.json();
   console.log(responseData);
	 };
  ```
  

* User : @PostMapping("/usuer")

  ```
  {
  	"userFullname" : "Mike Miller",
  	"password":"1234",
  	"userEmail" : "mikemiller@gmail.com"
  }
  ```
* Frontend:
  ```
	 const response = await fetch('https://lost-and-found-backend.herokuapp.com/user', {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify({ userFullname: name, password: password, userEmail: email, userIsAdmin: admin })
			});
			const resData = await response.json();
   console.log(resData);
	 };
  ```

* User : @PostMapping("/user/login")

  ```
  {
  	"password":"1234",
  	"userEmail" : "mikemiller@gmail.com"
  }
  ```
* Frontend:
  ```
	 const response = await fetch('https://lost-and-found-backend.herokuapp.com/user/login', {
			method: 'POST',
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({ userEmail: email, password: password })
		});
		const responseData = await response.json();
  console.log(responseData);
	 };
  ```
  
