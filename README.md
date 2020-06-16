# basic-cms
📃 basic CMS system using markdown

## 🚀 CMS System
This is a content management system. Using such a system, you can create content easily and seamlessly.

## 🍪 NPM packages

- `express` for the API
- `firebase-admin` for data persistence (NoSQL DB)
- `joi` for input validation
- `markdown-it` for converting markdown to HTML

## 🟢 ToDo 

- [ ] serif font for body
- [ ] edit article feature
- [ ] grid system with sidebar?
- [ ] global 'new articles' list
- [ ] categories and tags
- [ ] search functionality
- [ ] images

## 🔒 Install

1. Clone this repo
```
$ git clone https://github.com/moritzmitterdorfer/basic-cmd.git
```

2. Install NPM packages
```
$ npm install
```

3. Create a Google Firebase project and start a DB. Dowload the credentials file and place it in `db/credentials` and update the path in `db/index.js` line 22 and 26:
```javascript
/** retrieve credentails from json file */
const serviceAccount = require('./credentials/{YOUR_FILE}.json');
/** initialize the app */
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://{YOUR_ADDRESS}.firebaseio.com"
});
```

4. Start server
```
$ npm start
```

5. go to `localhost:3000` to reach the website

## 📃 Create Articles
For creating an article, go to `localhost:3000/articles/new`.

## 📝 Customize
You can write your own CSS to customize the site (instead of using `client/static/style.css`). In addition, you can modify the html pages in `client/views`.

## 
