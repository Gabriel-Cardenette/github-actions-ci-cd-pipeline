# GitHub Actions CI/CD Pipeline

Projeto desenvolvido para demonstrar a implementação de uma pipeline CI/CD utilizando GitHub Actions, Docker e Node.js.

## Overview

Este projeto automatiza o processo de integração contínua (CI) e entrega contínua (CD), executando etapas de validação, build e deploy através do GitHub Actions.

O objetivo é simular um fluxo utilizado em ambientes DevOps modernos, garantindo consistência e automação durante o ciclo de desenvolvimento.

## Technologies Used

* GitHub Actions
* Docker
* Node.js
* JavaScript
* Git
* CI/CD

## Project Structure

```text
.
├── .github/
│   └── workflows/
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## CI/CD Workflow

Pipeline executada automaticamente após alterações no repositório:

1. Checkout do código
2. Instalação das dependências
3. Build da aplicação
4. Criação da imagem Docker
5. Publicação da imagem no Docker Hub

## Running Locally

Clone o repositório:

```bash
git clone https://github.com/Gabriel-Cardenette/github-actions-ci-cd-pipeline.git
```

Entre na pasta:

```bash
cd github-actions-ci-cd-pipeline
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
node server.js
```

## Learning Objectives

Este projeto foi desenvolvido para praticar:

* GitHub Actions
* Docker Build Automation
* Versionamento com Git
* Integração Contínua (CI)
* Entrega Contínua (CD)
* Boas práticas DevOps

## Roadmap

* [x] Pipeline GitHub Actions
* [x] Docker Build
* [x] Docker Hub Integration
* [ ] Deploy em AWS EC2
* [ ] Deploy em Kubernetes
* [ ] Terraform Provisioning

## Author

Gabriel Paes Cardenette

AWS Certified Cloud Practitioner (CLF-C02)
