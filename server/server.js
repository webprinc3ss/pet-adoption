const { cloudinary } = require('./utils/cloudinary');
const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const morgan = require('morgan');
const multiparty = require('multiparty');
const PORT = process.env.PORT || 3001;
const app = express();
var cors = require('cors');

// create a new Apollo server and pass in our schema data
// include context using authMiddleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // allows headers to pass context to resolvers on incoming request
  // performs authentication check on every request
  context: authMiddleware
});
app.use(morgan("tiny"));

// app.use(express.static('public'));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());
// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });
// if we're in production (heroku), serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('/api/images', async (req, res) => {
//   const { resources } = await cloudinary.search
//     .expression('folder:PetsImage')
//     .sort_by('public_id', 'desc')
//     .max_results(30)
//     .execute();

//   const publicIds = resources.map((file) => file.public_id);
//   res.send(publicIds);
// });
app.post("/api/files", async (req, res) => {
  const form = new multiparty.Form();
  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files])
      });
    });
    // console.log(fields, "test");
    const { photo: [{ path }] } = files;
    // console.log({path})
    const { url: photo, ...result } = await cloudinary.uploader.upload(path);
    const pet = {
      ...Object.fromEntries(
        Object.entries(fields)
          .map(([key, [value]]) => [key, value])
      ),
      photo
    };



    if (pet.medical == 'on') {
      pet.medical = "Y";
    } else {
      pet.medical = "N";
    }

    if (pet.kids == 'on') {
      pet.kids = "Y";
    } else { pet.kids = "N" }

    if (pet.cats == 'on') {
      pet.cats = "Y";
    } else { pet.cats = "N" }

    if (pet.dogs == 'on') {
      pet.dogs = "Y";
    } else { pet.dogs = "N" }

    if (pet.age) { pet.age = parseInt(pet.age) }

    // if (pet.onlyPet == 'on') {
    //   pet.onlyPet = "only pet";
    // }


    // console.log( "result", result);
    // console.log( "pet", pet);
    // sends response object from server to client SubmitPet to mutate 
    res.status(201).send(pet);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "internal server error"
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
