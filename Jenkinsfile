pipeline {
	agent any
	stages {
		stage ("Build"){
			steps{
			    // Checkout code
                git branch: 'main', credentialsId: 'jenkins', url: 'git@bitbucket.org:hypersagetechnology/kalinga-web.git'
				
				// Install dependencies and build project
                sh 'npm install'
                sh 'npm run build'
			}
		}
        stage('Deploy') {
            steps {
                // Use SSH private key for deployment
                sshagent(['cPanel-ssh-key']) {
                    sh '''
                    # Deploy using rsync over SSH
                    rsync -avz -e "ssh -o StrictHostKeyChecking=no" ./build/ $kalin@$43.239.110.108:/home/$CPANEL_USER/public_html/
                    '''
                }
            }
        }
	}
}