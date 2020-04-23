# Lost And Found Backend API 



### How to start backend 

In project directory, open terminal and run 

```
mvn install
```

When the build is finished,

go to project directory, go to *target* folder.

In *target* you can found a jar file name  lost-and-found-0.0.1-SNAPSHOT.jar

Open terminal and run following command

```Java
java -jar lost-and-found-0.0.1-SNAPSHOT.jar
```





## Item

#### 

#### @GetMapping("api/items")

---

**This will return all items stored in database.**

Return:

```
[
    {
        "itemId": 1,
        "itemName": "Android",
        "itemDescription": "an andriod",
        "itemPicture": "http://xxx.jpg",
        "dateLost": "2020-04-15T05:08:49.000+0000",
        "dateFound": "2020-04-19T08:47:23.000+0000"
    },
    {
        "itemId": 2,
        "itemName": "andriod 3",
        "itemDescription": "an lost andriod",
        "itemPicture": "http://xxx.jpg",
        "dateLost": "2020-04-23T22:44:04.000+0000",
        "dateFound": null
    },
    {
        "itemId": 4,
        "itemName": "Macbook",
        "itemDescription": "a laptop",
        "itemPicture": "http://xxxxx.jpg",
        "dateLost": "2020-04-23T22:56:52.000+0000",
        "dateFound": "2020-04-23T22:57:33.000+0000"
    }
]
```







### @GetMapping("api/item/{itemId}")

**This will return a specific item**

```
{
    "itemId": 4,
    "itemName": "Macbook",
    "itemDescription": "a laptop",
    "itemPicture": "http://xxxxx.jpg",
    "dateLost": "2020-04-23T22:56:52.000+0000",
    "dateFound": "2020-04-23T22:57:33.000+0000"
}
```





### @PostMapping("/item")

**Create and store a item into database**

Params (item id and dataLost is set already by default, dataFound is null when create) :

```
{
	"itemName": "Macbook",
	"itemDescription": "a laptop",
	"itemPicture": "http://xxxxx.jpg"
}
```

Return:

```
{
    "itemId": 0,
    "itemName": "Macbook",
    "itemDescription": "a laptop",
    "itemPicture": "http://xxxxx.jpg",
    "dateLost": null,
    "dateFound": null
}
```

*Issue :dataLost returns null when creating but the value is set in database. WIll be fix in next version* 



### @DeleteMapping("/item/{itemId}")

**This will delete a specific item**

Return (String):

```
Deleted item id -4
```





### @PostMapping("/item/{itemId}")

**This will post a found date to a specific item and return a String**



Return: 

```
Successfully post found date!
```





### @GetMapping("/item/date/{itemId}")

**This will return a string containing found date for a specific item**

```
2020-04-23 04:11:54
```





## User



### @PostMapping("/user")

**This will return ApiReponse entity**

```
{
	"userFullname" : "Mike Miller",
	"password":"1234",
	"userEmail" : "mikemiller@gmail.com"
}
```

Return: 

```
{
    "status": 200,
    "message": "success",
    "result": {
        "userId": 7,
        "userFullname": "Mike Miller",
        "userEmail": "mikemiller@gmail.com",
        "password": "1234",
        "userIsAdmin": false
    }
}
```



### @PostMapping("/login")

**This will return ApiResponse entity**

In the result it only contains the UserName

Param:

```
{
	"password":"1234",
	"userEmail" : "mikemiller@gmail.com"
}
```

Return:

```
{
    "status": 200,
    "message": "Login success",
    "result": "Mike Miller"
}
```

