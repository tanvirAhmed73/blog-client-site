
const getCategoriesData = async() => {
    const res = await fetch("http://localhost:5000/categories",{
        cache: 'no-cache'
    })
    const data = await res.json()
    return data;
};

export default getCategoriesData;