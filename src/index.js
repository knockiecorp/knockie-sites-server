const express = require("express");
const bodyParser = require("body-parser"); // Import body-parser
const app = express();
const port = 5000;
// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());
const webistes = [
  "https://google.com",
  "https://sites.vertueal.com",
  "https://vercel.com",
  "https://bing.com",
  "https://microsoft.com",
  "https://youtube.com",
  "https://facebook.com",
  "https://twitter.com",
  "https://baidu.com",
  "https://wikipedia.org",
  "https://yahoo.com",
  "https://yandex.ru",
  "https://amazon.com",
  "https://tiktok.com",
  "https://linkedin.com",
  "https://office.com",
  "https://openai.com",
  "https://netflix.com",
  "https://bilibili.com",
  "https://discord.com",
  "https://github.com",
  "https://stackoverflow.com",
  "https://wordpress.org",
  "https://wordpress.com",
  "https://reddit.com",
  "https://instagram.com",
  "https://apple.com",
  "https://adobe.com",
  "https://cnn.com",
  "https://bbc.com",
  "https://nytimes.com",
  "https://washingtonpost.com",
  "https://wsj.com",
  "https://nasa.gov",
  "https://whitehouse.gov",
  "https://columbia.edu",
  "https://harvard.edu",
  "https://mit.edu",
  "https://stanford.edu",
  "https://berkeley.edu",
  "https://princeton.edu",
  "https://yale.edu",
  "https://utoronto.ca",
  "https://ox.ac.uk",
  "https://cam.ac.uk",
  "https://www.uni-heidelberg.de",
  "https://www.tum.de",
  "https://www.ethz.ch",
  "https://www.sorbonne-universite.fr",
  "https://www.tudelft.nl",
  "https://www.ucla.edu",
  "https://www.usc.edu",
  "https://www.columbia.edu",
  "https://www.nyu.edu",
  "https://www.utexas.edu",
  "https://www.uchicago.edu",
  "https://www.purdue.edu",
  "https://www.princeton.edu",
  "https://www.stanford.edu",
  "https://www.mit.edu",
  "https://www.caltech.edu",
  "https://www.ox.ac.uk",
  "https://www.cam.ac.uk",
  "https://www.lse.ac.uk",
  "https://www.ucl.ac.uk",
  "https://www.sciencemag.org",
  "https://www.nature.com",
  "https://www.sciencedaily.com",
  "https://www.wikipedia.org",
  "https://www.britannica.com",
  "https://www.quora.com",
  "https://www.stackexchange.com",
  "https://www.medium.com",
  "https://www.dev.to",
  "https://www.smashingmagazine.com",
  "https://www.entrepreneur.com",
  "https://www.inc.com",
  "https://www.forbes.com",
  "https://www.bloomberg.com",
  "https://www.wsj.com",
  "https://www.nytimes.com",
  "https://www.washingtonpost.com",
  "https://www.cnn.com",
  "https://www.bbc.com",
  "https://www.aljazeera.com",
  "https://www.reuters.com",
  "https://www.apnews.com",
  "https://www.npr.org",
  "https://www.buzzfeed.com",
  "https://www.bbcgoodfood.com",
  "https://www.allrecipes.com",
  "https://www.foodnetwork.com",
  "https://www.epicurious.com",
  "https://www.healthline.com",
  "https://www.mayoclinic.org",
  "https://www.webmd.com",
  "https://www.cdc.gov",
  "https://www.nih.gov",
];
// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin (you can restrict this to specific origins)
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/sites", (req, res) => {
  res.send(webistes);
});
app.post("/sites/search", (req, res) => {
  const { search_value } = req.body;
  const results = webistes.filter((site) => {
    return site.includes(search_value);
  });
  res.send(results);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
