pipeline {
	agent any
	stages {
		stage ("pull code from git repo"){
			steps{
                git branch: 'main', credentialsId: 'jenkins', url: 'git@bitbucket.org:hypersagetechnology/alphatech-user-admin-panel.git'
			}
		}
        stage('Remove Old Containers and Images') {
            steps {
                script {
                    sh '''
                    sudo docker stop alphatech || true
                    sudo docker rm alphatech || true
                    '''
                    sh '''
                    sudo docker rmi rahul9664/alphatech:latest || true
                    '''
                }
            }
        }

		stage ("Building docker image"){
			steps{
				sh 'sudo docker build -t rahul9664/alphatech:latest .'
			}
		}
		stage ("Push on Docker-Hub"){
			steps{
				withCredentials([string(credentialsId: 'docker_hub', variable: 'docker_passwd')]) {
    					sh 'sudo docker login -u rahul9664 -p ${docker_passwd}'
					sh 'sudo docker push rahul9664/alphatech'
				}
			}
		}
		stage ("Testing the Build"){
			steps{
				sh 'sudo docker run -dit --name alphatech -p 3007:3007 rahul9664/alphatech:latest'
			}
		}
	}
}