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
            // Stop and remove the existing container if it exists
            bat '''
                docker stop hello-world-app-container || true
                docker rm hello-world-app-container || true
            '''
            // Now run the new container
            bat 'docker run -d -p 80:80 --name hello-world-app-container hello-world-app'
            echo 'Application successfully deployed to Docker container!'
        }
    }
}
          stage('Code Quality Analysis') {
    steps {
        script {
            // Reference the SonarQube Scanner set in Global Tool Configuration
            def sonarScannerHome = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
            // Execute sonar-scanner from the configured tool
            bat "${sonarScannerHome}/bin/sonar-scanner -Dsonar.projectKey=hello-world-app -Dsonar.sources=./src -Dsonar.host.url=http://localhost:9000 -Dsonar.login=your_sonarqube_token"
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
