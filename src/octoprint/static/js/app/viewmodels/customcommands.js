function CustomCommandsViewModel(loginStateViewModel, settingsViewModel,TerminalViewModel) {
    var self = this;

    self.loginState = loginStateViewModel;
    self.settings = settingsViewModel;
    self.customCommands = settingsViewModel.custom_commands;

	self.execCustomCommand = function(command) {
		console.log("execute click")
		TerminalViewModel.command(command.command);
		TerminalViewModel.sendCommand();
	}

	 self.removeCustomCommand = function(command) {
        self.custom_commands.remove(command);
    };
}