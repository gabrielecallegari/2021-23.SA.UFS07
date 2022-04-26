// Main config file
const config = require('./gulpfile.config.js');

// Global
const gulp = require('gulp');

// CSS
    const autoprefixer = require('gulp-autoprefixer');
    const concatCss = require('gulp-concat-css');
    const minifycss = require('gulp-uglifycss');
    const mmq = require('gulp-merge-media-queries');
    const sass = require('gulp-sass')(require('sass'));
// END CSS

// JS
    const concat = require( 'gulp-concat' );
    const uglify = require( 'gulp-uglify' );
    const babel = require( 'gulp-babel' );
// END JS

// FONTS
//const gulpFont = require('gulp-fontgen');

// END FONTS

// UTILITY
    const beep = require('beepbeep');
    const browserSync = require('browser-sync').create(); 
    const filter = require('gulp-filter');
    const lineec = require('gulp-line-ending-corrector');
    const notify = require('gulp-notify');
    const plumber = require('gulp-plumber');
    const rename = require('gulp-rename');
    const remember = require( 'gulp-remember' );
    const replace = require( 'gulp-replace' );
// END UTILITY


// ERROR Handler
const errorHandler = r => {
    notify.onError( '❌ ERROR:\n\n<%= error.message %>\n' )( r );
    beep();
};

// BROWSER SYNC : aggiornamento automatico del browser quando modifichiamo i file
const livereload = done => {
    browserSync.init({
        server: {
            baseDir: 'dist',
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        open: config.browserAutoOpen,
        injectChanges: config.injectChanges,
        watchEvents: [ 
            'change',
            'add',
            'unlink',
            'addDir',
            'unlinkDir' 
        ]
    });
    done();
};

// Helper function to allow browser reload with Gulp 4.
// const reload = done => {
// 	browserSync.reload();
// 	done();
// };

/**
 * Task: `html`
 */
gulp.task('html', () => {
    return gulp
        .src(
            config.htmlSRC, {
                allowEmpty: true
            }
        )
        .pipe( plumber( errorHandler ) )
        .pipe( 
            gulp.dest( config.htmlDST )
        )
        .pipe( browserSync.stream() )
});
/*
 *Task immagini
 */
 gulp.task('image', () => {
    return gulp
        .src(
            config.imageSRC, {
                allowEmpty: true
            }
        )
        .pipe( plumber( errorHandler ) )
        .pipe( 
            gulp.dest( config.imageDST )
        )
        .pipe( browserSync.stream() )
});
 
/**
 * Task: `styles`.
 */
gulp.task('styles', () => {
    return gulp
        .src(config.styleSRC, {
            allowEmpty: true
        })
        .pipe(plumber(errorHandler))
        .pipe(
            sass({
                errLogToConsole: config.errLogToConsole,
                outputStyle: config.outputStyle,
                precision: config.precision
            })
        )
        .on( 'error', sass.logError )
        .pipe( 
            autoprefixer( config.BROWSERS_LIST ) 
        )
        .pipe( lineec() )
        .pipe( gulp.dest( config.styleDST ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( mmq() )
        .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.
        .pipe( rename({ 
                suffix: '.min' 
            })
        )
        .pipe( minifycss() )
        .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
        .pipe( gulp.dest( config.styleDST ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( browserSync.stream() ) // Reloads style.min.css if that is enqueued.
});

/**
 * Task: `scripts`.
 */
gulp.task('scripts', () => {
    return gulp
        .src( config.scriptsSRC, { 
            since: gulp.lastRun( 'scripts' ),
            allowEmpty: true,
        })
        .pipe(plumber(errorHandler))
        .pipe(
            babel({
                presets: [
                    [
                        '@babel/preset-env', // Preset to compile your modern JS to ES6.
                        {
                            targets: { 
                                browsers: config.BROWSERS_LIST 
                            } // Target browser list to support.
                        }
                    ]
                ]
            })
        )
        .pipe(remember(config.scriptsSRC)) // Bring all files back to stream.
        .pipe(concat('main.js'))
        .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
        .pipe(gulp.dest(config.scriptsDST))
        .pipe(
            rename({
                basename: 'main.js',
                suffix: '.min'
            })
        )
        .pipe(uglify())
        .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
        .pipe(gulp.dest(config.scriptsDST))
        .pipe(browserSync.stream())
});


/**
 * 
 * 
 */

gulp.task('replaceText', () => {
    return gulp
        .src(['copy.txt'])
        .pipe(replace('bar', 'foo'))
        .pipe(gulp.dest('dist/'));
})


gulp.task(
    'default',
    gulp.parallel(
        'html',
        'styles',
        'scripts',
        'image',
        livereload, () => {
            gulp.watch(config.htmlWATCH, gulp.parallel('html'));
            gulp.watch(config.styleWATCH, gulp.parallel('styles'));
            gulp.watch(config.scriptsWATCH, gulp.parallel('scripts'));
            gulp.watch(config.imageWATCH, gulp.parallel('image'));
        }
    )
);