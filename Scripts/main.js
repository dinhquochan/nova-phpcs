exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

class IssuesProvider {    
    runningCodeSniffer(path) {
        return new Promise(function(resolve) {
            const issues = [];
            
            const execurePath = nova.config.get("dqh-phpcs.executable-path");
            const standard = nova.config.get("dqh-phpcs.standard");
            const options = {
                args: [
                    execurePath,
                    "--report=json",
                    `--standard=${standard}`,
                    path
                ]
            };
            
            const process = new Process("/usr/bin/env", options);
            
            process.onStdout(function(line) {
                let output = JSON.parse(line);
    
                if (output) {
                    for (let [path, cs] of Object.entries(output.files)) {
                        cs.messages.forEach(function (message) {
                            let issue = new Issue();

                            issue.message = message.message;
                            issue.severity = message.type === "ERROR" ? IssueSeverity.Error : IssueSeverity.Warning;
                            issue.line = message.line;
                            issue.column = message.column;
                            
                            issues.push(issue);
                        });
                    }
                }
                
                resolve(issues);
            });

            process.start();
        });
    }

    async provideIssues(editor) {
        return await this.runningCodeSniffer(editor.document.path);
    }
}

nova.assistants.registerIssueAssistant("php", new IssuesProvider());
