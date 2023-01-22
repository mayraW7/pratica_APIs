import axios from 'axios';


export async function getUserFromGithub(user: string) {
    try {
        const result = await axios.get(`https://api.github.com/users/${user}`)
        console.log(result.data);
    } catch (error: any) {
        console.log('Usuário não existe ' + error);
    }
}

//  -------------------------------

export async function getRepositories(repo: string) {
    try {
        const result = await axios.get(`https://api.github.com/repos/${repo}`)
        console.log(result.data);
    }
    catch (error: any) {
    console.log('Repositório não existe' + error);
    }
    }

    