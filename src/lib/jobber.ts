/**
 * Jobber API Client — Stub/Placeholder
 *
 * Jobber is a field service management platform used by home service businesses.
 * Their API uses GraphQL at: https://api.getjobber.com/api/graphql
 *
 * OAuth 2.0 Flow:
 * 1. Redirect user to: https://api.getjobber.com/api/oauth/authorize
 *    with params: client_id, redirect_uri, response_type=code
 * 2. After user approves, Jobber redirects to your redirect_uri with ?code=...
 * 3. Exchange code for access token via POST to https://api.getjobber.com/api/oauth/token
 *    with: client_id, client_secret, code, redirect_uri, grant_type=authorization_code
 * 4. Use the access_token as a Bearer token in Authorization header for API calls
 *
 * Booking Widget:
 * - Jobber provides an embeddable booking widget via iframe
 * - See JobberBookingWidget.astro for the embed structure
 * - Widget URL format: https://clienthub.getjobber.com/client_hubs/{YOUR_JOBBER_CLIENT_HUB_ID}/public/work_request/new
 *
 * Documentation: https://developer.getjobber.com/
 *
 * To activate: set PUBLIC_JOBBER_ENABLED=true and fill in credentials in .env
 */

const JOBBER_GRAPHQL_ENDPOINT = 'https://api.getjobber.com/api/graphql';
const JOBBER_AUTH_URL = 'https://api.getjobber.com/api/oauth/authorize';
const JOBBER_TOKEN_URL = 'https://api.getjobber.com/api/oauth/token';

export interface JobberConfig {
  clientId: string;
  clientSecret: string;
  accessToken?: string;
}

export interface JobberClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingAddress?: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
}

export interface JobberJob {
  id: string;
  title: string;
  status: string;
  clientId: string;
  startAt?: string;
  endAt?: string;
  instructions?: string;
  lineItems?: JobberLineItem[];
}

export interface JobberLineItem {
  name: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  taxable?: boolean;
}

export interface JobberQuote {
  id: string;
  clientId: string;
  title: string;
  message?: string;
  lineItems: JobberLineItem[];
  total: number;
  status: string;
}

export interface JobberService {
  id: string;
  name: string;
  description?: string;
  defaultUnitPrice?: number;
}

/**
 * Initialize Jobber API client with credentials.
 * In production, load credentials from environment variables.
 *
 * @example
 * const client = createJobberClient({
 *   clientId: import.meta.env.JOBBER_CLIENT_ID,
 *   clientSecret: import.meta.env.JOBBER_CLIENT_SECRET,
 *   accessToken: await getStoredAccessToken(),
 * });
 */
export function createJobberClient(_config: JobberConfig) {
  // TODO: Replace with actual Jobber GraphQL client implementation
  // Consider using a GraphQL client library like graphql-request
  console.warn('Jobber integration is not yet configured. Set credentials in .env to activate.');

  return {
    /**
     * Create a new client record in Jobber.
     * @see https://developer.getjobber.com/docs/build_with_jobber/create_client/
     */
    async createClient(_clientData: Omit<JobberClient, 'id'>): Promise<JobberClient> {
      // TODO: Implement with GraphQL mutation createClient
      throw new Error('Jobber integration not configured. See src/lib/jobber.ts for setup instructions.');
    },

    /**
     * Create a new job in Jobber.
     * @see https://developer.getjobber.com/docs/
     */
    async createJob(_jobData: Omit<JobberJob, 'id'>): Promise<JobberJob> {
      // TODO: Implement with GraphQL mutation createJob
      throw new Error('Jobber integration not configured. See src/lib/jobber.ts for setup instructions.');
    },

    /**
     * Get or create a quote for a client.
     * @see https://developer.getjobber.com/docs/
     */
    async getQuote(_quoteId: string): Promise<JobberQuote> {
      // TODO: Implement with GraphQL query quote(id: $id)
      throw new Error('Jobber integration not configured. See src/lib/jobber.ts for setup instructions.');
    },

    /**
     * List all services configured in Jobber account.
     * @see https://developer.getjobber.com/docs/
     */
    async listServices(): Promise<JobberService[]> {
      // TODO: Implement with GraphQL query services
      throw new Error('Jobber integration not configured. See src/lib/jobber.ts for setup instructions.');
    },

    /**
     * Make a raw GraphQL request to the Jobber API.
     */
    async graphql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
      const accessToken = _config.accessToken;
      if (!accessToken) {
        throw new Error('No Jobber access token available. Complete OAuth flow first.');
      }

      const response = await fetch(JOBBER_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'X-JOBBER-GRAPHQL-VERSION': '2024-01-01',
        },
        body: JSON.stringify({ query, variables }),
      });

      if (!response.ok) {
        throw new Error(`Jobber API error: ${response.status} ${response.statusText}`);
      }

      const data = (await response.json()) as { data: T; errors?: unknown[] };

      if (data.errors && data.errors.length > 0) {
        throw new Error(`Jobber GraphQL errors: ${JSON.stringify(data.errors)}`);
      }

      return data.data;
    },
  };
}

/**
 * Generate the OAuth authorization URL for Jobber.
 * Redirect users to this URL to begin the OAuth flow.
 */
export function getJobberAuthUrl(clientId: string, redirectUri: string): string {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
  });
  return `${JOBBER_AUTH_URL}?${params.toString()}`;
}

/**
 * Exchange OAuth authorization code for access token.
 */
export async function exchangeJobberCode(
  clientId: string,
  clientSecret: string,
  code: string,
  redirectUri: string
): Promise<{ access_token: string; refresh_token: string; expires_in: number }> {
  const response = await fetch(JOBBER_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to exchange Jobber code: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<{ access_token: string; refresh_token: string; expires_in: number }>;
}
