# CRONJOB

```
git clone xxx
```

```
npm install node-cron fs express
```

```
touch index,js
```

```
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();
cron.schedule("0,30 * * * * *", function() {
  var date = new Date();
  console.log("what is current time: ", date.toLocaleTimeString());
});

app.listen(1111);
```

Run your script
```
 node index.js

```