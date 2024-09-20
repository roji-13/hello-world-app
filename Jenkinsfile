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
                    // Build the Docker image
                    sh 'docker build -t hello-world-app .'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run the tests inside a Docker container
                    sh 'docker run --rm hello-world-app npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Replace this with your deployment commands
                    sh 'docker run -d -p 3000:3000 hello-world-app'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Cleanup Docker images if needed
            sh 'docker rmi hello-world-app || true'
        }
    }
}
