const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css')

    console.log('env', env)
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                        loader: 'css-loader',
                        options: {
                                sourceMap: true
                            }
                        },
                        {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true //this tells the dev server that client-side code will handle routing 
            //and this page (public?) is what should be served up for all 404 routes - I think basically
            //just pass back index.html and let react-router figure out what to render
            //The dev-server build notes now show the message "404s will fallback to /index.html" AKA 
            //when the server can't find what is in the HTTP Request, the client side code will also
            //be searched to see if there is something available to render
        }
    }
};