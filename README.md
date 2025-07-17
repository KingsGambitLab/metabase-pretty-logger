# Logs Explorer

A React-based web application for exploring and viewing logs with beautiful formatting through Metabase integration.

## Features

- **Pretty Log Viewing**: Enhanced log display with syntax highlighting and formatting
- **Metabase Integration**: Seamless connection to Metabase for log queries
- **Multiple Field Renderers**: Support for various data types including:
  - DateTime fields with formatting
  - Log entries with syntax highlighting  
  - Ruby hash objects with structured display
  - String fields with enhanced readability
- **Saved Queries**: Execute and manage saved log queries
- **Responsive Design**: Columned layout that adapts to different screen sizes
- **Session Management**: Secure Metabase authentication and session handling

## Tech Stack

- **Frontend**: React 18 with Create React App
- **State Management**: Recoil
- **Styling**: SASS modules with @vectord component library
- **Build Tool**: CRACO for customized configuration
- **API Integration**: Axios for Metabase API calls
- **Routing**: React Router DOM

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment files (`.env.development`, `.env.staging`, `.env.production`)
4. Configure Metabase connection settings

## Available Scripts

### Development
```bash
npm run start:dev
```
Runs the app in development mode using the development environment configuration.

### Production Build
```bash
npm run build:production
```
Creates a production build optimized for deployment.

### Staging Build
```bash
npm run build:staging
```
Creates a staging build for testing purposes.

### Code Quality
```bash
npm run lint        # Check code formatting
npm run format      # Auto-format code with Prettier
```

## Project Structure

```
src/
├── api/metabase/          # Metabase API integration
├── atoms/                 # Recoil state atoms
├── components/            # Reusable React components
│   ├── ErrorLayout/
│   ├── Field/
│   ├── Form/
│   ├── Input/
│   ├── Loader/
│   ├── LogViewer/
│   └── MetabaseLoginModal/
├── data/                  # Configuration and constants
├── hoc/                   # Higher-order components
├── hooks/                 # Custom React hooks
├── pages/                 # Application pages
│   ├── NotFoundPage/
│   └── PrettyLogsPage/
└── utils/                 # Utility functions
```

## Configuration

The application uses environment-specific configuration files:
- `.env.development` - Development settings
- `.env.staging` - Staging environment settings  
- `.env.production` - Production environment settings

## Deployment

### Production Deployment Steps

1. Create `.env.production` file with the following configuration:
   ```
   PORT=6002
   REACT_APP_METABASE_API_BASE=https://metabase.interviewbit.com/api
   REACT_APP_FRONTEND_BASE_PATH=/dev-logs/
   ```

2. Build the production version:
   ```bash
   PUBLIC_URL=/dev-logs npm run build:production
   ```

3. Deploy to AWS S3:
   - Go to S3 bucket `metabase-pretty-logger` on MITProduction AWS
   - Upload `/build/index.html` to the root of the S3 bucket
   - Upload all other content from `/build` directory into the `/dev-logs` directory of the S3 bucket

## Contributing

1. Follow the existing code style and conventions
2. Use Prettier for code formatting
3. Ensure all linting checks pass before committing
4. Test thoroughly across different log formats and data types

## Usage
1. scaler-prod-web: https://metabase.interviewbit.com/dev-logs/pretty/scaler-web/:uuid
2. scaler-prod-web-admin: https://metabase.interviewbit.com/dev-logs/pretty/scaler-web-admin/:uuid
3. scaler-prod-nonweb: https://metabase.interviewbit.com/dev-logs/pretty/scaler-non-web/:job_id
4. interviewbit-prod-web: https://metabase.interviewbit.com/dev-logs/pretty/ib-web/:uuid
5. interviewbit-prod-nonweb: https://metabase.interviewbit.com/dev-logs/pretty/ib-non-web/:job_id
6. ib-puma-1: https://metabase.interviewbit.com/dev-logs/pretty/ib-puma-1/:uuid
7. crm-scaler-sales-web: https://metabase.interviewbit.com/dev-logs/pretty/crm-scaler-sales-web/:uuid
8. crm-scaler-sales-non-web: https://metabase.interviewbit.com/dev-logs/pretty/crm-scaler-sales-non-web/:job_id
