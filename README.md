# MLM API

This repository implements a basic MLM (Multi-Level Marketing) API with functionalities for user creation, level management, and earnings distribution.

## Prerequisites

To run this API, you'll need the following:

* Node.js and npm (or yarn) installed on your system -> npm start
* MongoDB database running on a remote server


### API Reference

### Post user
....http
Post /api/users

| Parameter          |   Type            |     Description   |
|:------------------ | :-----------------|:------------------|
|     name           | String            | **Required **     |
|     level          | Number            |      |
|parentId (Optional) | String            |                   |

return name, level and parentId
response gettin in Object: for Referance
{name: "test15", level: 0, parentId: null, _id: "663de67d7826d9fa75a8ff41", __v: 0}

### Post 
....http
/api/distribute

| Parameter          |   Type            |     Description   |
|:------------------ | :-----------------|:------------------|
|     userId           | String          | **Required **     |
|     amount          | Number           | **Required **     |

return level,  message, distrubution and remaining Amount
reponse getting in Object for referance
{
distributions: [{level: 3, userId: "663d46ca477546f2e69d835a", amount: 20},…]
message: "Distribution successful"
remainingAmount: 1960
}
### Get
...http
/api/users
reponse getting in Array from all user created in Mongoose Databae
[{_id: "663d3490477546f2e69d7fea", name: "test1", level: 0, parentId: null, __v: 0},…]


### distrubution
If leve 8 have  rs-10000|

| level7-0.4% TotalAmount |
| level6-0.2% TotalAmount |
| level5-0.1% TotalAmount |
| level4-0.05% TotalAmount|
| level3-0.01% TotalAmount |
| level2-0.01% TotalAmount |
| level1-0.01% TotalAmount |
| level0-0.01% TotalAmount |

### Backend Deploy Link
https://metastic-world.onrender.com

### Frontend Deploy Link
https://creative-cuchufli-a7867b.netlify.app/

