import crypto from 'crypto';

export function hexToBase64Url(hex: string): string {
    const buffer = Buffer.from(hex, 'hex');
    return buffer.toString('base64url');
}

// RSA 公钥加密类
// 兼容原有接口：setPublic(modulus, exponent) 和 encrypt(plaintext)
export class RSAKey {
    private publicKey: crypto.KeyObject | null = null;

    setPublic(modulus: string, exponent: string): void {
        try {
            // 使用 JWK 格式创建公钥（Node.js 15+）
            const jwkKey: JsonWebKey = {
                kty: 'RSA',
                n: hexToBase64Url(modulus),
                e: hexToBase64Url(exponent),
            };

            this.publicKey = crypto.createPublicKey({
                key: jwkKey,
                format: 'jwk',
            });
        } catch (error) {
            console.error('Failed to create public key:', error);
            this.publicKey = null;
        }
    }

    encrypt(text: string): string | null {
        if (!this.publicKey) {
            console.error('Public key not set');
            return null;
        }

        try {
            const buffer = Buffer.from(text, 'utf-8');
            const encrypted = crypto.publicEncrypt(
                {
                    key: this.publicKey,
                    padding: crypto.constants.RSA_PKCS1_PADDING,
                },
                buffer
            );
            return encrypted.toString('hex');
        } catch (error) {
            console.error('RSA encryption failed:', error);
            return null;
        }
    }
}

export default { RSAKey };