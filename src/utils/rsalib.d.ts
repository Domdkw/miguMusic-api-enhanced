/**
 * RSA 加密模块类型声明
 */

export interface RSAKeyConstructor {
    new(): RSAKeyInstance;
    prototype: RSAKeyInstance;
}

export interface RSAKeyInstance {
    setPublic(modulus: string, exponent: string): void;
    encrypt(text: string): string;
}

export interface RsaModule {
    RSAKey: RSAKeyConstructor;
}

declare const rsaModule: RsaModule;
export default rsaModule;