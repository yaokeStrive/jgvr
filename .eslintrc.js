module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier:comment": "自动格式化当前目录下的所有文件',
        'prettier": "prettier --write'
    ],

    rules: {
        // override/add rules settings here, such as:
    }
};


