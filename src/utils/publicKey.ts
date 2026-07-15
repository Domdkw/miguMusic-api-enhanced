import { h5fetch } from "./h5fetch";
const getPublicKey = async() => {
    const data = await h5fetch('https://passport.migu.cn/password/publickey'
        ,{
            method:'POST',
        }
    )
    const publicExponent = data.result.publicExponent as string;
    const modulus = data.result.modulus as string;
    return {publicExponent, modulus};
}

export { getPublicKey };