interface Project {
  title: string
  description: string
  href?: string
  github?: string
  docs?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'FastAPI Keycloak Middleware',
    description: `Authentication and authorization can be a pain. This library provides
    a simple to use, authentication middleware for FastAPI, facilitating simple and 
    out-of-the-box integration with Keycloak. Comes with OIDC token validation,
    support for custom user mapper, simple and more complex authorization scenarios,
    device authentication, websocket support, a good documentation and more.`,
    href: 'https://github.com/waza-ari/fastapi-keycloak-middleware',
    github: 'waza-ari/fastapi-keycloak-middleware',
    docs: 'https://fastapi-keycloak-middleware.readthedocs.io',
  },
  {
    title: 'Python EasyVerein',
    description: `EasyVerein is a popular membership management software used by many clubs
    and organizations mainly in Germany. While they do provide a REST API, it is not
    very well documented and there is no official API client. This library provides a simple to use,
    Pythonic interface to interact with the EasyVerein API. The core features include
    authentication handling as well as type safety based on Pydantic models.`,
    href: 'https://github.com/waza-ari/python-easyverein',
    github: 'waza-ari/python-easyverein',
    docs: 'https://python-easyverein.readthedocs.io',
  },
  {
    title: 'FastAPI Starter Boilerplate',
    description: `A modern (as of 2024) FastAPI template featuring SQLAlchemy 2.0,
    full async database support, CRUD and CRUD endpoint generation, ARQ worker for deferred tasks and cronjobs,
    and structlog for production ready logging. Currently work in progress.`,
    href: 'https://github.com/waza-ari/fastapi-template',
    github: 'waza-ari/fastapi-template',
  },
]

export default projectsData
