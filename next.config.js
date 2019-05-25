const withSass = require('@zeit/next-sass');

module.exports = withSass({
    sassLoaderOptions: {
        includePaths: ['./node_modules']
    },
    webpack(config, options) {
        // Further custom configuration here

        return {
            ...config,
            node: {
                fs: 'empty',
                child_process: 'empty'
            }
        };
    },
    target: 'serverless'
});
