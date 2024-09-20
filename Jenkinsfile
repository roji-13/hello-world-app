pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Ensure you have Git configured correctly
                    checkout([$class: 'GitSCM', 
                              branches: [[name: '*/main']], 
                              userRemoteConfigs: [[url: 'https://github.com/your-repo.git', credentialsId: 'your-credentials-id']]])
                }
            }
        }

        stage('Build') {
            steps {
                bat 'echo Building the project...'
                // Add your build commands here
            }
        }

        stage('Test') {
            steps {
                bat 'echo Running tests...'
                // Add your test commands here
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying the application...'
                // Add your deployment commands here
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Add cleanup commands here if needed
        }
    }
}
