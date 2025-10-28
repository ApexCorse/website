import { s as sponsorJoinSchema } from '../../chunks/useSponsorForm_A5TJwbhY.mjs';
import { google } from 'googleapis';
import { ZodError } from 'zod';
export { renderers } from '../../renderers.mjs';

class SheetsManager {
  auth;
  constructor({
    projectId,
    privateKeyId,
    privateKey,
    clientEmail,
    clientId
  }) {
    this.auth = new google.auth.JWT({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      clientId,
      email: clientEmail,
      key: privateKey,
      keyId: privateKeyId,
      projectId
    });
  }
  static async create(credentials) {
    const manager = new SheetsManager(credentials);
    await manager.auth.authorize();
    return manager;
  }
  async append(sheetId, range, values) {
    const response = await google.sheets({ version: "v4", auth: this.auth }).spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      requestBody: { values },
      valueInputOption: "USER_ENTERED"
    });
    return response;
  }
}
const sheetsManager = await SheetsManager.create({
  projectId: undefined                                 ,
  privateKeyId: undefined                                     ,
  privateKey: undefined                                  ,
  clientEmail: undefined                                   ,
  clientId: undefined                                
});

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      email,
      name,
      officeLocation: { country, city, state, address, zipCode },
      reason,
      industry
    } = sponsorJoinSchema.parse(data);
    const fullAddress = `${address}, ${city} ${state}, ${zipCode}, ${country}`;
    await sheetsManager.append(undefined                               , "A1:E1", [
      [name, email, fullAddress, reason, industry]
    ]);
    return new Response(JSON.stringify({ email, name }), {
      status: 201
    });
  } catch (error) {
    console.error(error);
    if (error instanceof ZodError) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400
      });
    }
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
