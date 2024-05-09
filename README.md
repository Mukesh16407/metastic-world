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
|     level          | Number            | **Required **     |
|parentId (Optional) | String            |                   |

return name, level and parentId

### Post /api/distribute

| Parameter          |   Type            |     Description   |
|:------------------ | :-----------------|:------------------|
|     userId           | String          | **Required **     |
|     amount          | Number           | **Required **     |

return level,  message, distrubution and remaining Amount

If leve 8 have  rs-10000
### distrubution
level7-0.4% TotalAmount
level6-0.2% TotalAmount
level5-0.1% TotalAmount
level4-0.05% TotalAmount
level3-0.01% TotalAmount
level2-0.01% TotalAmount
level1-0.01% TotalAmount
level0-0.01% TotalAmount


