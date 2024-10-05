
# Discord Bot Template (DJS v14)

This repository includes my personal bot template (all the base that I own and I am using for my current bots).

## Need help ?
[Try out the documentation!](https://github.com/lwzff/discord-bot-template-v14?tab=readme-ov-file#documentation)

## Installation

1. Clone this project and/or download the ZIP file. 

2. Get your [Discord Bot Token](https://discord.com/developers/applications) and then copy/paste it into the **.env** file.

3. Get your [MongoDB Database URL](https://cloud.mongodb.com/) and then copy/paste it into the **.env** file.

**Note:**
If you don't have any MongoDB Database, leave it blank.

After that, install all dependencies with npm:
```bash
  npm i
```

**Dependencies (in case of any problems):**
- discord.js
- mongoose
- term-logger
- fs
- dotenv

## Documentation

Work in progress..

### Mongoose (MongoDB) Model/Schema Example

1. Create your model in **/models/** as **MyModel.js**.
2. Put the code below in this file and edit it like you want.

```js
const mongoose = require("mongoose");

module.exports = mongoose.model(
    "MyModelName",
    new mongoose.Schema({
        property1: { type: String, required: true, unique: true },
    })
);
```

> How to use this model ?

Put at the top-level of your command file or event file this (based on your model).
```js
const { MyModelName } = require('../../models/MyModel');
```

### Function Example

1. Create your function in **/functions/** as **MyFunction.js**.
2. Put the code below in this file and edit it like you want.
 
```js
module.exports.functionName = (arg1) => {
    console.log(arg1)
    return arg1
}
```

> How to use this function ?

Put at the top-level of your command file or event file this (based on your function).
```js
const { functionName } = require('../../functions/MyFunction');
```

## Authors

- [@lwzff](https://www.twitter.com/lwzff)

