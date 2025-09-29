pipeline {
    agent any

    tools {
        nodejs 'Node13'
    }

    stages {
        stage('Build') {
    steps {
        echo 'Installing dependencies and building project'
        sh 'npm install'
        sh 'npm run build'

        // Optional: archive build artefact
        archiveArtifacts artifacts: 'dist/**', fingerprint: true

        // Optional: build Docker image
        sh 'docker build -t my-vue-app:latest .'
    }
}

        stage('Test') {
            steps {
                echo 'Test stage placeholder'
            }
        }
        stage('Code Quality') {
            steps {
                echo 'Code Quality placeholder'
            }
        }
        stage('Security') {
            steps {
                echo 'Security placeholder'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy placeholder'
            }
        }
        stage('Release') {
            steps {
                echo 'Release placeholder'
            }
        }
        stage('Monitoring') {
            steps {
                echo 'Monitoring placeholder'
            }
        }
    }
}
