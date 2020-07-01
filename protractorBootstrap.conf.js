const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './src/specs/*.feature'
    ],

    cucumberOpts: {
        strict: true,
        format: [
            'progress'
        ],
        require: [
            './src/steps/*.js'
        ],
        tags: '@bootstrap',
        dryRun: false
    },

    allScriptsTimeout: 11000,
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: async function() {
        // maximize the browser before executing the feature files
        browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
    }
};