---
title: "Resources"
layout: pattern
---
{::nomarkdown}
<div class="">
    <div class="pl-panel">
        <div class="row">
            <div class="col-sm-6 col-lg-6">
                <h4 class="margin-top-0">Download CSS/LESS</h4>
                <p>This zip file includes the source LESS files and minified CSS. The compiled CSS file includes a themed and extended version of Bootstrap. The LESS files pull in the Bootstrap source at compilation time.</p>
                <a href="{{site.baseurl}}/downloads/cbpstrap-{{site.version}}.zip" class="btn btn-primary"><i class="icon icon-inverse icon-download"></i> &nbsp;Download v{{site.version}}</a>
                <div class="margin-top-1 small">Looking for older releases? Find them <a href="{{site.repository.url}}/releases">here.</a></div>
            </div>
            <div class="col-sm-6 col-lg-6">
                <h4 class="margin-top-0">View on GitHub</h4>
                <p>The documentation and source are available on Github. If you want to build the documentation locally, follow the instructions there.</p>
                <a href="{{site.repository.url}}" class="btn btn-default"><i class="icon icon-github"></i> &nbsp;{{site.repository.name}}</a>
            </div>
        </div>
    </div>
    <div class="pl-panel">
        <h4 class="margin-top-0">Using the LESS files</h4>
        <p>The <code>cbpstrap.less</code> file uses <code>@import</code> to merge all the LESS files at compilation time. Based on your folder structure, dependency management system, and 3rd party libraries, <code>cbpstrap.less</code> may need to be updated. Use <a href="http://gruntjs.com/">Grunt</a>, <a href="http://gulpjs.com/">Gulp</a>, <a href="http://maven.apache.org/">Maven</a>, or some <a href="http://lesscss.org/usage/index.html#third-party-compilers">other tool</a> to compile the LESS files.</p>
        <p>Similar to Bootstrap, the LESS files are organized by module.</p>
        <ul>
            <li>All Bootstrap overrides are at the root of the <code>less</code> folder.</li>
            <li>Variables are in <code>_variables.less</code>.</li>
            <li>CSS for new modules is in the <code>custom</code> folder.</li>
            <li>3rd party plugin themes are in the <code>vendor</code> folder.</li>
        </ul>
        <h4>Using the CSS files</h4>
        <p>The compiled CSS file includes a themed and extended version of Bootstrap. You shouldn't include the original Bootstrap CSS in your web page. If you're going to be writing any additional CSS specific for your web page, we recommend using the LESS files instead and taking advantage of the variables when possible.</p>
    </div>
</div>
{:/nomarkdown}
