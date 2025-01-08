# Simple Node.js Application

A basic Node.js application created for learning purposes, used to implement and test my first CI/CD pipeline.

## Prerequisites

You need to have an **EC2 instance with Amazon Linux** configured to run the application. The pipeline will automatically install Node.js and npm during the deployment process.

---

## Reproduce the Pipeline

To reproduce the CI/CD pipeline with GitHub Actions, follow the steps below:

### 1. Configure Secrets in GitHub

- Go to the repository on GitHub.
- Navigate to **Settings > Secrets and variables > Actions > New repository secret** and add the following environment variables:

  - **EC2_HOST**: Public IP address of your EC2 instance (e.g., `34.234.175.181`).
  - **EC2_USER**: SSH username for EC2 (e.g., `ec2-user`).
  - **EC2_SSH_KEY**: Private SSH key to access your EC2 instance (copy the content of your `.pem` file).

### 2. Push to the Repository

- Make any necessary changes to the code or just test the pipeline.
- Push to the `main` branch of your GitHub repository.
- GitHub Actions will be triggered automatically and deploy the application to your EC2 instance.

### Pipeline Details

The pipeline is configured in the `.github/workflows/deploy.yml` file and follows these steps:
1. **Checks out the code**.
2. **Sets up the Node.js environment**.
3. **Installs dependencies** using `npm ci`.
4. **Runs tests** using `npm test`.
5. **Transfers files to EC2** via SCP.
6. **SSHs into EC2** and runs the deployment script, installing Node.js and npm, and using PM2 to run the application.

At the end of the process, the application will be reloaded or started using PM2 on your EC2 instance.
