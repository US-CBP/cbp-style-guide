CBP Style Guide
===============

This is a Style Guide for the [CBP Theme](https://github.com/US-CBP/cbp-theme) 
which gives guidance and examples of components, patterns, and colors 
from the CBP theme.

#### Want to contribute?
See our [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.

---

### Building & running locally

#### Building out the generated files
You will need to [install Jekyll](http://jekyllrb.com/docs/installation/). **Note**: On Windows, we've found [this installation guide helpful](https://labs.sverrirs.com/jekyll/). You will also need to [install Node.js](http://nodejs.org/download/). Node.js powers the front-end build and dependency management tools [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/).

Once Jekyll and Node.js are installed, ensure you have Grunt and Bower installed globally with:
```
npm install -g grunt-cli bower
```

Then install the project's dependencies with:
- `npm install`

#### Running the documentation
Run `npm run build` to then generate your files.

If you have python installed, and you want to launch the site locally:
Go into the dist directory `cd dist`  and run `python -m SimpleHTTPSServer` . Then go to [local site](http://localhost:8000/)

##### Distribution Builds
After running `npm run build`, you will have a `dist` folder that contains the entire static site and resources.

### Contributing

We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

### License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)
