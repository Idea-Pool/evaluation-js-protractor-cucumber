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
        tags: [],
        dryRun: false
    },

    allScriptsTimeout: 11000,
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        // maximize the browser before executing the feature files
        browser.manage().window().maximize();
    }
};