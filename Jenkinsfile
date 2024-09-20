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

        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t hello-world-app .'
                }
            }
        }

       stage('Run Tests') {
            steps {
            bat 'docker run --rm hello-world-app npx mocha'
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
