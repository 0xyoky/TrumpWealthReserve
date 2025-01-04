# SynapseAI

# SynapseAI: AI-Powered Full-Stack Web Development in the Browser

**SynapseAI** is an AI-powered web development agent that enables you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. 

If you're here to build your own AI-powered web development agent using the SynapseAI open-source codebase, click [here](#) to get started!

---

## **What Makes SynapseAI Different**

AI tools like Claude or ChatGPT are great—but they can’t install packages, run backends, or edit and deploy full-stack apps. That’s where SynapseAI excels:

### **Full-Stack in the Browser**
SynapseAI integrates cutting-edge AI models with an in-browser development environment powered by StackBlitz’s WebContainers. This allows you to:

- Install and run npm tools and libraries (like Vite, Next.js, and more)
- Run Node.js servers
- Interact with third-party APIs
- Deploy to production from chat
- Share your work via a URL

### **AI with Environment Control**
Unlike traditional dev tools where AI is limited to assisting in code generation, SynapseAI gives AI models full control over:

- Filesystem
- Node.js servers
- Package manager
- Terminal
- Browser console

This empowers AI agents to handle the entire app lifecycle—from creation to deployment.

---

## **Who is SynapseAI for?**

Whether you’re an experienced developer, a project manager, or a designer, SynapseAI allows you to easily build production-grade full-stack applications.

For developers interested in building their own AI-powered development tools with WebContainers, check out the open-source SynapseAI codebase in this [repository](#)!

---

## **Setup**

### **Prerequisites**

1. **Git**: Install Git from [git-scm.com/downloads](https://git-scm.com/downloads).
2. **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/en/download/).

Pay attention to the installer notes to ensure Node.js is added to your system path. Verify by running:

```bash
echo $PATH
```

You should see `/usr/local/bin` or equivalent for your operating system.

### **Cloning the Repository**

Clone the repository by running:

```bash
git clone https://github.com/yourusername/synapseai.git
```

### **Setting API Keys**

1. Rename `.env.example` to `.env.local`.
2. Add your LLM API keys:

```bash
GROQ_API_KEY=XXX
OPENAI_API_KEY=XXX
ANTHROPIC_API_KEY=XXX
```

### **Environment Variables**

Set optional configurations like debug level and context size:

```bash
VITE_LOG_LEVEL=debug
OLLAMA_API_BASE_URL=http://localhost:11434
DEFAULT_NUM_CTX=8192
```

**Important:** Never commit your `.env.local` file to version control; it’s already included in `.gitignore`.

---

## **Running SynapseAI**

### **With Docker**

#### **Prerequisites**

1. Install Docker from [docker.com](https://www.docker.com/).

#### **Using Helper Scripts**

```bash
# Development build
npm run dockerbuild

# Production build
npm run dockerbuild:prod
```

#### **Direct Docker Commands**

```bash
# Development build
docker build . --target synapseai-development

# Production build
docker build . --target synapseai-production
```

#### **Docker Compose**

```bash
# Development environment
docker-compose --profile development up

# Production environment
docker-compose --profile production up
```

### **Without Docker**

#### **Install Dependencies**

```bash
pnpm install
```

If `pnpm` isn’t installed, run:

```bash
sudo npm install -g pnpm
```

#### **Start the Application**

```bash
pnpm run dev
```

---

## **Available Scripts**

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the project.
- `pnpm run start`: Runs the built application locally.
- `pnpm run preview`: Builds the project and starts it locally for production testing.
- `pnpm test`: Runs the test suite.
- `pnpm run typecheck`: Runs TypeScript type checking.
- `pnpm run lint:fix`: Automatically fixes linting issues.
- `pnpm run deploy`: Builds the project and deploys it to Cloudflare Pages.

---

## **Development Notes**

To start the development server:

```bash
pnpm run dev
```

You will need Google Chrome Canary for local testing. It’s a quick install and great for web development!

---

Ready to revolutionize your web development workflow? Get started with SynapseAI today!
