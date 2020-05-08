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



**(To be added)**



<a name="3-pre-requisites-">

----

## 3. Pre-requisites:

*List of required software to download*

* Java JDK
* Maven
* MySQL
* Node.js



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



---



<a name="4-uml-diagrams">

## 4. UML Diagrams

* Class Diagram

![img](https://lh4.googleusercontent.com/QMRrm4L-KG4Sz05KFkWfwe2kwss-f-PgSP-ksChT39A0XyCd2XkyW7FtB6K98ZRfiuGF5CzrlxyMy6Rs-Y8_yz1aoEdVQUtL-OM1TMdbNQdY0F7t6fRfhSGPyBFms-eL4WIkiXEBCUs)

* Sequence Diagram

(To be added by Jiawei)





<a name="5-schema">

## 5. Schema

![image-20200508004635847](C:\Users\Jimmy\AppData\Roaming\Typora\typora-user-images\image-20200508004635847.png)

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

  

* User : @PostMapping("/usuer")

  ```
  {
  	"userFullname" : "Mike Miller",
  	"password":"1234",
  	"userEmail" : "mikemiller@gmail.com"
  }
  ```

* User : @PostMapping("/user/login")

  ```
  {
  	"password":"1234",
  	"userEmail" : "mikemiller@gmail.com"
  }
  ```

  