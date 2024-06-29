
const getAuthorsData = async() => {
    const res = await fetch('http://localhost:5000/authors',{
        cache: 'no-store'
    })
    const authorData = res.json()
    return authorData;
};

export default getAuthorsData;