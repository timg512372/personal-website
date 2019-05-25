// const { PHASE_PRODUCTION_SERVER } =
//     process.env.NODE_ENV === 'development'
//         ? {}
//         : !process.env.NOW_REGION
//         ? require('next/constants')
//         : require('next-server/constants');

// module.exports = (phase, { defaultConfig }) => {
//     if (phase === PHASE_PRODUCTION_SERVER) {
//         // Config used to run in production.
//         return {};
//     }

//     const withSass = require('@zeit/next-sass');

//     return withSass({
//         sassLoaderOptions: {
//             includePaths: ['./node_modules']
//         }
//     });
// };

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
    }
});

// const path = require('path')
// const glob = require('glob')

// module.exports = {
//   distDir: "../functions/next",
//   webpack: (config, { dev }) => {
//     config.module.rules.push(
//       {
//         test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
//         use: [
//           {
//             loader: 'emit-file-loader',
//             options: {
//               name: 'dist/[path][name].[ext]'
//             }
//           },
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'dist/[path][name].[ext]'
//             }
//           }
//         ]
//       }
//     ,
//       {
//         test: /\.(css|scss)/,
//         loader: 'emit-file-loader',
//         options: {
//           name: 'dist/[path][name].[ext]'
//         }
//       }
//     ,
//       {
//         test: /\.css$/,
//         use: ['babel-loader', 'raw-loader', 'postcss-loader']
//       }
//     ,
//       {
//         test: /\.s(a|c)ss$/,
//         use: ['babel-loader', 'raw-loader', 'postcss-loader',
//           { loader: 'sass-loader',
//             options: {
//               includePaths: ['styles', 'node_modules']
//                 .map((d) => path.join(__dirname, d))
//                 .map((g) => glob.sync(g))
//                 .reduce((a, c) => a.concat(c), [])
//             }
//           }
//         ]
//       }
//     )
//     return config
//   }
// }

// const withCSS = require('@zeit/next-css');

// module.exports = withCSS();
