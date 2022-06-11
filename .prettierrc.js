module.exports = {
	printWidth: 160, //折り返す行の長さ（の目安）を指定。
	tabWidth: 4, //インデント
	useTabs: true, //タブの使用
	semi: true, // 文末にセミコロン
	singleQuote: false, //シングルクォートに統一しない
	jsxSingleQuote: false, // JSXではシングルクォートを使わない
	trailingComma: "all", //末尾のカSンマは全て入れる
	bracketSpacing: true, //オブジェクト{}の両端にスペースを入れる
	bracketSameLine: false, //<>内で改行するとき、最後の行を`>`だけにする
	jsxBracketSameLine: false, //JSXにおいて、<>内で改行するとき、最後の行を`>`だけにする
	arrowParens: "always", //アロー関数の引数の()は常に省略しない
	endOfLine: "lf", // 改行に常に［\n］を使用
};
