export function URLParams($: object|string){
    const form = new URLSearchParams();
    for (const [key, value] of Object.entries($)) {
        form.append(key, String(value));
    }
    return form.toString();
}
