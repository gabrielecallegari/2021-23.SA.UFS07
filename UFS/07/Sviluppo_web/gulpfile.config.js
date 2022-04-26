module.exports = {
    // BROWSERSYNC
        browserAutoOpen: true,
        injectChanges: true,
    // END BROWSERSYNC

    // HTML
        htmlSRC: './src/views/**/*.html',
        htmlDST: './dist/',
        htmlWATCH: './src/views/**/*.html',
    // END HTML

    //IMAGE
        imageSRC: './src/image/**/*.jpg',
        imageDST: './dist/assets/image/',
        imageWATCH: './src/image/**/*.jpg',
    //END IMAGE

    // SCSS 
        styleSRC: './src/scss/main.scss',
        styleDST: './dist/assets/styles/',
        styleWATCH: './src/scss/**/*.scss',
        
        // SCSS settings
            outputStyle: 'expanded',
            errLogToConsole: true,
            precision: 10,
    // END SCSS

    // JS
        scriptsSRC: './src/js/main/**/*.js',
        scriptsDST: './dist/assets/scripts/',
        scriptsWATCH: './src/js/main/**/*.js',
    // END JS

    // FONTS
    
        //fontsSRC : './src/fonts/**/*.ttf',
        //fontsDST : './dist/assets/fonts/',
        //fontsWATCH : './src/fonts/**/*.ttf',
        
    // END FONTS

    BROWSERS_LIST: [
		'last 2 version',
		'> 2%',
		'ie >= 10',
		'last 4 Android versions',
		'last 4 ChromeAndroid versions',
		'last 4 Chrome versions',
		'last 4 Firefox versions',
		'last 4 Safari versions',
		'last 3 iOS versions',
		'last 2 Edge versions',
		'last 1 Opera versions'
	],

}