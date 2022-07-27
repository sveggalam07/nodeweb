pipeline {
    agent any
    tools {
    nodejs 'nodejs'
    dockerTool 'docker'
}
    stages {
        stage('git') {
            steps {
                echo 'pulling code'
                git 'https://github.com/palakollu145/nodeweb'
            }
        }
        stage('install npm'){
            steps{
                echo 'started npm install'
                sh 'npm install'
            }
        }
        stage('version')
        {
            steps{
                sh 'docker --version'
            }
        }
        stage('Building image') {
      steps{
        echo 'building image'
        }
      }
    }
    
}
