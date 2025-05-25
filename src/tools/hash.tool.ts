import { compare, hash } from "bcryptjs";
import { createHash } from "node:crypto";


export class HashTools {
    async generate(password_hash: string): Promise<string> {
        const genHash = await hash(password_hash, 10);
        return genHash;
    }

    async compare(password: string, password_hash: string): Promise<boolean> {
        const result = await compare(password, password_hash);
        return result;
    }

    async encrypt(content: string): Promise<string> {
        const result = createHash("sha256").update(content).digest("hex");
        return result.slice(0, 8);
    }
}

export const hashHelper = new HashTools();