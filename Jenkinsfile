pipeline {
    agent any

    environment {
        NODE_HOME = "C:\\Program Files\\nodejs" // adjust if needed
        PATH = "${env.NODE_HOME};${env.PATH}"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo 'Checking out source code'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies'
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Vite project'
                bat 'node ./node_modules/vite/bin/vite.js build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests'
                // Run unit tests using Vitest
                bat 'npx vitest run --coverage'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Skipping code quality checks for now'
                // Example: integrate ESLint, SonarQube, etc.
                // bat 'npx eslint src --ext .js,.ts,.vue'
            }
        }

        stage('Security') {
            steps {
                echo 'Skipping security checks for now'
                // Example: npm audit or Snyk
                // bat 'npm audit --audit-level=high'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Skipping deploy for now'
                // Example: copy dist folder to server
                // bat 'xcopy dist \\server\deploy /E /Y'
            }
        }
    }

    post {
        success {
            echo 'Build, test, and deployment pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
