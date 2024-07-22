module.exports = {
	dependency: {
		"react-native-sqlite-storage": {
		platforms: {
			//ios: {},
			android: {
				sourceDir: "../node_modules/react-native-sqlite-storage/platforms/android-native",
          		packageImportPath: "import io.liteglue.SQLitePluginPackage;",
          		packageInstance: "new SQLitePluginPackage()"
			},
			windows: {
				sourceDir: './platforms/windows',
				solutionFile: 'SQLitePlugin.sln',
				projects: [
				  {
					projectFile: 'SQLitePlugin/SQLitePlugin.vcxproj',
					directDependency: true,
				  }
				],
			}
		}
	}
	}
}
