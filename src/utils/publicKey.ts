const getPublicKey = async() => {
    const res = await fetch('https://passport.migu.cn/password/publickey'
        ,{
            method:'POST',
        }
    )
    if(!res.ok) return;
    const data = await res.json();
    const publicExponent = data.result.publicExponent as string;
    const modulus = data.result.modulus as string;
    return {publicExponent, modulus};
}

export { getPublicKey };