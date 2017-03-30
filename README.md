CBP Style Guide
===============
[![Build Status](https://travis-ci.org/US-CBP/cbp-theme.svg?branch=master)](https://travis-ci.org/US-CBP/cbp-style-guide)
[![dependencies Status](https://david-dm.org/us-cbp/cbp-theme/status.svg)](https://david-dm.org/us-cbp/cbp-style-guide)
[![devDependencies Status](https://david-dm.org/us-cbp/cbp-theme/dev-status.svg)](https://david-dm.org/us-cbp/cbp-style-guide?type=dev)

This is a Style Guide for the [CBP Theme](https://github.com/US-CBP/cbp-theme) 
which gives guidance and examples of components, patterns, and colors 
from the CBP theme.

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
Run `npm run dev` to build and generate your files.

Then go to [local site](http://localhost:4000)

##### Distribution Builds
After running `npm run build`, you will have a `dist` folder that contains the entire static site and resources.

### Contributing

We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

### License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)
