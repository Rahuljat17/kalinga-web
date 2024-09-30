pipeline {
	agent any
	stages {
        stage('Install NVM and Node.js') {
            steps {
                // Install NVM and load it into the environment
                sh '''
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

                # Install Node.js version you want
                nvm install node

                # Check Node.js and npm versions
                node --version
                npm --version
                '''
            }
        }
		stage ("Build"){
			steps{
			    // Checkout code
                git branch: 'main', credentialsId: 'jenkins', url: 'git@bitbucket.org:hypersagetechnology/kalinga-web.git'
				
				// Install dependencies and build project
                // Load NVM in every stage that needs npm
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                nvm use node
                npm install
                npm run build 
                '''
			}
		}
        stage('Deploy') {
            steps {
                // Use SSH private key for deployment
                sshagent(['cPanel-ssh-key']) {
                    // Load NVM in every stage that needs npm
                    sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm use node
                    # Deploy using rsync over SSH
                    rsync -avz -e "ssh -o StrictHostKeyChecking=no" ./build/ $kalin@$43.239.110.108:/home/$CPANEL_USER/public_html/
                    '''
                }
            }
        }
	}
}