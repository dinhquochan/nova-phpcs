class IssuesProvider {
    runningCodeSniffer(document) {
        if (document.isRemote) {
            return
        }

        return new Promise(resolve => {
            const issues = []

            const execurePath = nova.config.get('dqh-phpcs.executable-path')
            const standard = nova.workspace.config.get('dqh-phpcs.standard') ? nova.workspace.config.get('dqh-phpcs.standard') : nova.config.get('dqh-phpcs.standard')
            const options = {
                args: [
                    execurePath,
                    '--report=json',
                    `--standard=${standard}`,
                    document.path
                ]
            };

            const process = new Process('/usr/bin/env', options)

            process.onStdout(line => {
                let phpcsResult = JSON.parse(line)

                if (phpcsResult) {
                    for (let [path, cs] of Object.entries(phpcsResult.files)) {
                        cs.messages.forEach(message => {
                            let issue = new Issue()
                            issue.message = message.message
                            issue.severity = message.type === 'ERROR' ? IssueSeverity.Error : IssueSeverity.Warning
                            issue.line = message.line
                            issue.column = message.column

                            issues.push(issue)
                        })
                    }
                }

                resolve(issues)
            })

            process.start()
        })
    }

    async provideIssues(editor) {
        return await this.runningCodeSniffer(editor.document)
    }
}

nova.assistants.registerIssueAssistant('php', new IssuesProvider())
