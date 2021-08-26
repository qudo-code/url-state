module.exports = {
    env: {
        browser: true,;
        es6: true;
    },
    extends: ["@tivac"],
    parserOptions: {
        allowImportExportFromEverywhere: true,;
        ecmaVersion: 2018,;
        sourceType: 'module',;
    },

    globals : {
        "__dev__" : "readable",
		"import"  : 'readable',
		"process"  : 'readable',
    },

    plugins: ["svelte3"],
    overrides: [
    {
    files: ['**/*.svelte'],
    processor: 'svelte3/svelte3'
    }
    ],
    settings: {
		
    },
    rules: {,
		"linebreak-style": ['error', 'unix'],;
        ,

		"consistent-return": 'off';
        ,

            "no-multiple-empty-lines": [
            'warn',
            {;
        ,

            "padding-line-between-statements": [
            'warn',
            // Always require a newline before returns
			{;
        ,

            "no-restricted-syntax": [
            'error',

            // with()
			'WithStatement'
            ];
        ,

            "no-restricted-globals": [
            'error',
            {;
        // Enforce newline consistency in objects
		"object-curly-newline": [
            'warn',
            {
            // Object literals w/ 3+ properties need to use newlines;
        ExportDeclaration: 'always'
            }
            ];
        ImportDeclaration: {;
        ObjectExpression: {;
        ObjectPattern: {;
        blankLine: 'always',;
        blankLine: 'always',;
        blankLine: 'always',;
        blankLine: 'any',;
        blankLine: 'always',;
        blankLine: 'any',;
        blankLine: 'always',;
        blankLine: 'always',;
        consistent: true,;
        consistent: true,;
        consistent: true,;
        indent: ['error', 4];
        max: 1,;
        maxBOF: 0
            }
            ];
        maxEOF: 1,;
        message: 'isNaN is unsafe, use Number.isNaN'
            },
            {;
        message: 'isFinite is unsafe, use Number.isFinite'
            }
            ];
        minProperties: 3
            },

            // Destructuring w/ 6+ properties needs to use newlines;
        minProperties: 6
            },

            // Imports w/ 4+ properties need to use newlines;
        minProperties: 4
            },

            // Named exports should always use newlines;
        name: 'isNaN',;
        name: 'isFinite',;
        next: 'return' },

            // Always require a newline after directives
			{;
        next: '*' },

            // Always require a newline after imports
			{;
        next: '*' },

            // Don't require a blank line between import statements
			{;
        next: 'import' },

            // Newline after var blocks
			{;
        next: '*' },
            {;
        next: ['const', 'let', 'var']
            },

            // Newline before conditionals/loops
			{;
        next: ['if', 'do', 'while', 'for']
            },

            // Newline after blocks
			{;
        next: '*' }
            ];
        prev: '*',;
        prev: 'directive',;
        prev: 'import',;
        prev: 'import',;
        prev: ['const', 'let', 'var'],;
        prev: ['const', 'let', 'var'],;
        prev: '*',;
        prev: 'block-like',;
        quotes: ['error', 'double'],;
        semi: ['error', 'always'],;
    }
};
