pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Vite project'
                // Run Vite via Node directly to avoid npx/.bin issues
                bat 'node ./node_modules/vite/bin/vite.js build'
            }
        }

        stage('Test') {
            steps {
                echo 'Skipping tests for now'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Skipping code quality for now'
            }
        }

        stage('Security') {
            steps {
                echo 'Skipping security checks for now'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Skipping deploy for now'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
