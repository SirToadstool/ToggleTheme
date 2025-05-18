import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('moodSwap.toggleLightDark', async () => {
		const configuration = vscode.workspace.getConfiguration();
		const currentTheme = vscode.window.activeColorTheme;

		const lightTheme = "Default Light+";
		const darkTheme = "Default Dark+";

		const newTheme =
			currentTheme.kind === vscode.ColorThemeKind.Light ? darkTheme : lightTheme;

		await configuration.update(
			"workbench.colorTheme",
			newTheme,
			vscode.ConfigurationTarget.Global
		);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }