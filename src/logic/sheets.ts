import g, { google } from "googleapis";
import type { Credentials } from "./credentials";

class SheetsManager {
  private auth: g.Auth.JWT;

  private constructor({
    projectId,
    privateKeyId,
    privateKey,
    clientEmail,
    clientId,
  }: Credentials) {
    this.auth = new google.auth.JWT({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      clientId,
      email: clientEmail,
      key: privateKey,
      keyId: privateKeyId,
      projectId,
    });
  }

  public static async create(credentials: Credentials): Promise<SheetsManager> {
    const manager = new SheetsManager(credentials);
    await manager.auth.authorize();
    return manager;
  }

  public async append(sheetId: string, range: string, values: any[]) {
    const response = await google
      .sheets({ version: "v4", auth: this.auth })
      .spreadsheets.values.append({
        spreadsheetId: sheetId,
        range,
        requestBody: { values },
        valueInputOption: "USER_ENTERED",
      });

    return response;
  }
}

export const sheetsManager = await SheetsManager.create({
  projectId: import.meta.env.GOOGLE_PROJECT_ID!,
  privateKeyId: import.meta.env.GOOGLE_PRIVATE_KEY_ID!,
  privateKey: import.meta.env.GOOGLE_PRIVATE_KEY!,
  clientEmail: import.meta.env.GOOGLE_CLIENT_EMAIL!,
  clientId: import.meta.env.GOOGLE_CLIENT_ID!,
});
