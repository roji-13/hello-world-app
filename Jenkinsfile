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
                bat 'docker run hello-world-app npm test'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    bat 'docker run -d -p 80:80 --name hello-world-app-container hello-world-app'
                    echo 'Application successfully deployed to Docker container!'
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    bat 'sonar-scanner -Dsonar.projectKey=hello-world-app -Dsonar.sources=./src -Dsonar.host.url=http://localhost:9000 -Dsonar.login=your_sonarqube_token'
                }
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
