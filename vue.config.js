const path = require("path")

module.exports = {
	lintOnSave: false,
	publicPath: process.env.NODE_ENV === "production"
		? "/account/"
		: "/",
	chainWebpack: config => {
		const dir = path.resolve(__dirname, "src/assets/icons")

		config.module
			.rule("svg-sprite")
			.test(/\.svg$/)
			.include.add(dir).end() // 包含 icons 目录
			.use("svg-sprite-loader").loader("svg-sprite-loader").options({extract: false}).end()
			.use("svgo-loader").loader("svgo-loader")
			.tap(options => ({...options, plugins: [{removeAttrs: {attrs: "fill"}}]})).end()
		config.plugin("svg-sprite").use(require("svg-sprite-loader/plugin"), [{plainSprite: true}])
		config.module.rule("svg").exclude.add(dir) // 其他 svg loader 排除 icons 目录
	}
}
