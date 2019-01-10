const path = require('path');

const pathConfig = require('./path-config.json');

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const srcPath = path.resolve(__dirname, '..', pathConfig.src);
const publicPath = path.resolve(__dirname, '..', pathConfig.dest);

/**
 * Shared
 */

// Set the title and version of the project
fractal.set('project.title', 'Sheffield Hallam University: Design System');
fractal.set('project.version', 'v1.0');


/**
 * Components
 */

// Set path to components
fractal.components.set('path', path.join(srcPath, 'assets/styles'));

// Set default preview layout
fractal.components.set('default.preview', '@preview');

// Use nunchucks
fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.html');

fractal.components.set('default.collated', true);


fractal.components.set('statuses', {
    deprecated: {
        label: "deprecated",
        description: "Do not implement.",
        color: "#FF3333"
    },
    prototype: {
        label: "Prototype",
        description: "Do not implement.",
        color: "#FF3333"
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution.",
        color: "#FF9233"
    },
    ready: {
        label: "Ready",
        description: "Ready to implement.",
        color: "#29CC29"
    }
})


// Wrapping each in a padded div
fractal.components.set('default.collator', function(markup, item) {
    return `<!-- Start: ${item.handle} -->\n
            <div style="padding-bottom:20px">\n
                <div style="padding-bottom: 10px; color: #b7b7b7;">\n
                  <code>@${item.label}</code>
                </div>\n
                ${markup}\n
            </div>\n
            <!-- End: @${item.handle} -->\n`
});

/**
 * Docs
 */

// Set path to documentation pages
fractal.docs.engine('@frctl/nunjucks');
fractal.docs.set('ext', '.md');
fractal.docs.set('path', path.join(srcPath, 'assets/docs'));

/**
 * Web
 */

// Where the generated static assets will be
fractal.web.set('static.path', publicPath);
// prefix static asset URLs

fractal.components.set('statuses', {
    prototype: {
        label: "Prototype",
        description: "Do not implement.",
        color: "#FF3333"
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution.",
        color: "#FF9233"
    },
    ready: {
        label: "Ready",
        description: "Ready to implement.",
        color: "#29CC29"
    },
    legacy: {
      label: "Legacy",
      description: "Legacy code.",
      color: "#B70D50"
    },
    legacyAddition: {
      label: "Legacy Addition",
      description: "Additions to the legacy codebase.",
      color: "#B30046"
    }
});

// Where to output the built (static HTML) styleguide
fractal.web.set('builder.dest',  path.resolve(__dirname, '../dist'));


// Fractal BS opts
fractal.web.set('server.syncOptions', {
    open: true,
    notify: true,
});

/**
 * Theme
 */
fractal.web.theme(mandelbrot({
  skin: 'default',
  format: 'yaml',
}));

module.exports = fractal;
