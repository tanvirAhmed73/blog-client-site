
const getAuthorsData = async() => {
    const res = await fetch('https://lynea-server.vercel.app/authors',{
        cache: 'no-store'
    })
    const authorData = res.json()
    return authorData;
};

export default getAuthorsData;