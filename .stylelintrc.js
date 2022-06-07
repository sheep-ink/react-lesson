module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recess-order',
	],
	ignoreFiles: [
		'**/node_modules/**', //node_modulesにCSSをLintの対象外とする。
	],
	rules: {
		'at-rule-no-unknown': null, //scssで使える @include などにエラーがでないようにする
		'scss/at-rule-no-unknown': true, //scssでもサポートしていない @ルール にはエラーを出す
		'string-quotes': 'single', //シングルクォーテーションを使用
		indentation: 'tab', //インデントにタブを使用
		'selector-class-pattern': '^[a-z][A-z0-9-_]+$',// セレクタ名で_も使用可能にする
	},
};
