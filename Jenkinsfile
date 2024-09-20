pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout([$class: 'GitSCM', 
                              branches: [[name: '*/master']], 
                              userRemoteConfigs: [[url: 'https://github.com/roji-13/hello-world-app.git', credentialsId: 'roji-13']]])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'echo Installing dependencies...'
                // Install dependencies with npm
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Running tests...'
                // Run tests using Mocha
                bat 'npx mocha test/app.test.js'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying the application...'
                // Add your deployment commands here. For example, if you have a script for deployment:
                // bat 'deploy-script.bat'
                // If you're deploying to a server, you might use something like:
                // bat 'scp -r ./dist user@server:/path/to/deploy'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Add cleanup commands here if needed, such as deleting temporary files or logs
        }
    }
}
