
export const getUsers = async () => {
    const result = await fetch("https://kasusapp1-i1u1jey1.b4a.run/get-users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return result.json();
}

export const createDossier = async (name, dossier_id=1, user_id=1) => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('dossier_id', dossier_id);
    formData.append('utilisateur_id', user_id);

    data = {
        'name': name,
        'dossier_id': dossier_id,
        'utilisateur_id': user_id
    }

    console.log(data)

    const result = await fetch("https://kasusapp1-i1u1jey1.b4a.run/create-dossier", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    });
    return result.json();
}